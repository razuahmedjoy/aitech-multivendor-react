import React from 'react';

import DataTable from 'react-data-table-component';




const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },

    {
        name: 'number',
        selector: row => row.number,
        sortable: true,
    },

    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
    },
    {
        name: 'Product',
        selector: row => row.product,
        sortable: true,
    },
]
const data = [
    { id: 1, number: "0220-9068", status: "New", date: "11/10/2015", price: "$288.05", product: "Leica T Mirrorless Digital Camera" },
    { id: 2, number: "0220-9068", status: "New", date: "11/10/2015", price: "$288.05", product: "Leica T Mirrorless Digital Camera" },
    { id: 3, number: "0220-9068", status: "New", date: "11/10/2015", price: "$288.05", product: "Leica T Mirrorless Digital Camera" },
    { id: 4, number: "0220-9068", status: "New", date: "11/10/2015", price: "$288.05", product: "Leica T Mirrorless Digital Camera" },


];
const Orders = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">My Orders</h2>
            <div>


                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    pagination
                />

            </div>
        </>
    );
};

export default Orders;