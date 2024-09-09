import React, { useMemo } from 'react'
import { useTable, useBlockLayout, useResizeColumns, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
// import Columns from './columns'
// import tableData from './tableData'
import Table, { TableHeadRow, TableHead, TableRow, TableDataColumn, GreenText, Div, PageDiv, ColToggleSpan } from './table.style'
import { GlobalFilter } from './GlobalFilter'
import Button from '../Button'

const MyTable2 = ({Columns, TableBody}) => {

    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => TableBody, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        state,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps,
        setGlobalFilter,
    } = useTable({ 
        columns,
        data,
    }, useBlockLayout, useResizeColumns, useGlobalFilter, usePagination,);


    const { pageIndex } = state
    const { globalFilter } = state

    return (

        <div style={ {marginTop:"10px"} }>

        <Div>
            <div>
                <input type='checkbox' {...getToggleHideAllColumnsProps()} />Toggle All
            </div>
            <span>Page {pageIndex + 1} out of {pageOptions.length}</span>
            <div>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                <a style={ {marginLeft:"20px"} } href=''>Manage Tags</a>
                <a style={ {marginLeft:"20px", marginRight:"10px"} } href=''>Change Tags</a>
           </div>
           <div>
            {
                    allColumns.map((column) => {
                        return <ColToggleSpan className='flex' key={column.id}>
                            <label>
                                <input type='checkbox' {...column.getToggleHiddenProps()}></input>
                                {column.Header}
                            </label>
                        </ColToggleSpan>
                    })
                }
           </div>
        </Div>

        <Table {...getTableProps}>
            <TableHeadRow>
                {headerGroups.map((headerGroup) => {
                    return <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => {
                            return <TableHead {...column.getHeaderProps()}>{column.render("Header")}</TableHead>
                        })}
                    </tr>
                })}
            </TableHeadRow>

            <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                        return <TableRow {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                if(cell.column.Header === "P&L"){
                                    return <TableDataColumn {...cell.getCellProps()}><GreenText> {cell.render("Cell")} </GreenText></TableDataColumn>
                                }
                                return <TableDataColumn {...cell.getCellProps()}>{cell.render("Cell")}</TableDataColumn>
                            })}
                        </TableRow>
                })}
            </tbody>

        </Table>

        <PageDiv>
            <Button tertiary onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
            <Button tertiary style={ {marginLeft:"5px"} } onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
        </PageDiv>

        </div>
    )
}

export default MyTable2;