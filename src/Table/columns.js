import React, { useMemo } from 'react'

const GROUPED_COLUMNS = [
    {
        Header : 'Id',
        accessor: 'Id',
    },
    {
        Header : 'Name',
        Footer: '',
        columns: [
            {
                Header : 'FirstName',
                accessor: 'FirstName',
            },
            {
                Header : 'LastName',
                accessor: 'LastName',
            },
        ],
    },
    // {
    //     Header : 'Age',
    //     Footer: info => {
    //         const total = useMemo(
    //           () =>
    //             info.rows.reduce((sum, row) => row.values.Age + sum, 0),
    //           [info.rows]
    //         )

    //         return <span>Total: {total}</span>
    //       },
    //     accessor: 'Age',
    // },
    {
        Header : 'Country',
        accessor: 'Country',
    },
    {
        Header : 'Email',
        accessor: 'Email',
    },
    {
        Header : 'Address',
        accessor: 'Address',
    },
    {
        Header: "Options",
        accessor: "Options",
    }
]

export default GROUPED_COLUMNS;