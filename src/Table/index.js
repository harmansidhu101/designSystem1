import React, { useMemo, useState, forwardRef, useRef, useEffect } from 'react'
import { useTable, useSortBy, useGlobalFilter, useBlockLayout, usePagination, useRowSelect } from 'react-table'
import Table, { TableHeadRow, TableHead, TableColumn, TableColumnFlex, TableRow, ColToggleSpan} from './table.style'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import { GlobalFilter } from './GlobalFilter'
import {Div, PreButton, PageButton, NextButton} from './pagination.style'
import {SearchDiv, SpanIcon, SpanIndex} from "./searchBar.style";
import {AiOutlineSearch} from 'react-icons/ai'

const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef()
      const resolvedRef = ref || defaultRef
  
      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <React.Fragment>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </React.Fragment>
      )
    }
  )

const MyTable = ({Columns, TableBody, EditDeleteButtons}) => {

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => TableBody, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        selectedFlatRows,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        gotoPage,
        setPageSize,
        allColumns,
        getToggleHideAllColumnsProps,
        prepareRow,
        state,
        pageOptions,
        setGlobalFilter,
    } = useTable({ 
        columns,
        data,
    }, useGlobalFilter, useSortBy, usePagination, useRowSelect, hooks => {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllPageRowsSelectedProps }) => (
              <div>
                <span>Select All </span>
                <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ]);
    })

    const noOfPageButtons = () => {
      const noOfPages = pageOptions.length
      const pages = []
      for(let i = 1; i<= noOfPages;i++){
        pages.push(i)
      }
      return pages
    }

    const { globalFilter } = state
    const { pageIndex, pageSize } = state
    const { selectedRowIds } = state

    return (
        <div>

        <SearchDiv>
             <SpanIcon for="searchbar"><AiOutlineSearch /></SpanIcon>
             <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
             <SpanIndex>Page {pageIndex + 1} out of {pageOptions.length}</SpanIndex>
        </SearchDiv>

        <Div>
          <ColToggleSpan>
            <label>
              <input type='checkbox' {...getToggleHideAllColumnsProps()}></input>Toggle All
            </label>
          </ColToggleSpan>
          {
            allColumns.map((column) => {
              if(column.id==='selection'){
                return <ColToggleSpan>
                  <label>
                    <input type='checkbox' {...column.getToggleHiddenProps()}></input>Select
                  </label>
                </ColToggleSpan>
              }
              return <ColToggleSpan key={column.id}>
                <label>
                  <input type='checkbox' {...column.getToggleHiddenProps()}></input>
                    {column.Header}
                </label>
              </ColToggleSpan>
            })
          }
        </Div>

        <Table {...getTableProps}>
          <TableHeadRow>
            {headerGroups.map((headerGroup) => {
              return <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return <TableHead {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
                  <span>
                      {column.isSorted ? (column.isSortedDesc ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />) : ''}
                  </span></TableHead>
                })}
              </tr>
            })}
          </TableHeadRow>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)
                  return <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      if(cell.value === 'Options'){
                        return <TableColumnFlex {...cell.getCellProps()}> {EditDeleteButtons()} </TableColumnFlex>
                      }
                      return <TableColumn {...cell.getCellProps()}>{cell.render("Cell")}</TableColumn>
                    })}
                  </TableRow>
            })}
          </tbody>
            
          {/* <tfoot>
            {
              footerGroups.map((footerGroup) => {
                return <tr {...footerGroup.getFooterGroupProps()}>
                  {footerGroup.headers.map((column) => {
                    console.log(column)
                      if(column.Header === 'Name'){
                        return ;
                      }
                      return <TableHead {...column.getFooterProps}>
                        {column.render('Footer')}</TableHead>
                  })}
                </tr>
              })
            }
          </tfoot> */}

        </Table>

        <Div>
          <PreButton onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </PreButton>
          {
            noOfPageButtons().map((pg, i) => {
            return <PageButton onClick={() => gotoPage(i)}>{pg}</PageButton>
            })
          }
          <NextButton onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </NextButton>

          <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </Div>

        <pre>
          <code>
            {JSON.stringify(
              {
                selectedRowIds: selectedRowIds,
                'selectedFlatRows[].original': selectedFlatRows.map(
                d => d.original
                ),
              },
              null,
              2
            )}
          </code>
        </pre>
        
        <selectedRow rowdata={selectedFlatRows.map(d => d.original)}/>

        </div>
    )
}

export default MyTable;