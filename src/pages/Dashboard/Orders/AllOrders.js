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
        name: 'Customer',
        selector: row => row.customer,
        sortable: true,
    },
    {
        name: 'Vendor',
        selector: row => row.vendor,
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
const data = [{ id: 1, number: "0220-9068", customer: "Howard Foster", vendor: "Nicole Ramos", status: "New", date: "11/10/2015", price: "$288.05", product: "Leica T Mirrorless Digital Camera" },
{ id: 2, number: "29300-187", customer: "Norma Torres", vendor: "Louis Hall", status: "Pending", date: "2/25/2015", price: "$191.92", product: "Nikon D5500 DSLR - Black" },
{ id: 3, number: "65044-1006", customer: "Willie Evans", vendor: "Chris Dean", status: "New", date: "3/22/2015", price: "$357.25", product: "Night Visions" },
{ id: 4, number: "60505-2654", customer: "Albert Elliott", vendor: "Albert Hunter", status: "New", date: "10/2/2015", price: "$204.50", product: "Lenovo IdeaCentre 600 All-in-One PC" },
{ id: 5, number: "55910-825", customer: "Thomas Alexander", vendor: "Roy Hansen", status: "Delivered", date: "7/16/2015", price: "$177.56", product: "Nike Floral Running Shoes" },
{ id: 6, number: "0440-8195", customer: "Frances Boyd", vendor: "Raymond Price", status: "New", date: "6/21/2015", price: "$206.23", product: "Nikon D5500 DSLR" },
{ id: 7, number: "21695-832", customer: "Norma Clark", vendor: "Doris Powell", status: "Delivered", date: "6/12/2015", price: "$441.06", product: "Obey Propaganda Hat" },
{ id: 8, number: "42787-102", customer: "Kimberly Hawkins", vendor: "Judy Grant", status: "New", date: "1/14/2015", price: "$120.35", product: "Nokia Lumia 1020" },
{ id: 9, number: "65862-171", customer: "Jimmy Brown", vendor: "Phyllis Gilbert", status: "Delivered", date: "4/19/2015", price: "$313.56", product: "Leica T Mirrorless Digital Camera" },
{ id: 10, number: "42291-889", customer: "Julie Butler", vendor: "Billy Allen", status: "New", date: "10/26/2015", price: "$150.02", product: "Custom T-Shirt" },
{ id: 11, number: "52685-307", customer: "Cheryl Evans", vendor: "Susan Rose", status: "Delivered", date: "11/30/2014", price: "$246.47", product: "HP Envy 6-1180ca Sleekbook" },
{ id: 12, number: "49349-914", customer: "Sarah Lynch", vendor: "Joe Long", status: "New", date: "7/26/2015", price: "$464.77", product: "Nikon D5500 DSLR - Black" },
{ id: 13, number: "55513-021", customer: "Edward Bell", vendor: "Cynthia Shaw", status: "Delivered", date: "2/2/2015", price: "$206.65", product: "Custom T-Shirt" },
{ id: 14, number: "51393-7434", customer: "Jose Perez", vendor: "Christopher Williams", status: "New", date: "7/15/2015", price: "$280.43", product: "Nike Floral Running Shoes" },
{ id: 15, number: "45802-237", customer: "Joseph Shaw", vendor: "Russell Cunningham", status: "Pending", date: "4/28/2015", price: "$102.60", product: "Lenovo IdeaCentre 600 All-in-One PC" },
{ id: 16, number: "49288-0499", customer: "Randy Hughes", vendor: "Jason Freeman", status: "New", date: "8/1/2015", price: "$409.36", product: "Digital Storm Performance PC" },
{ id: 17, number: "0409-7904", customer: "Arthur Perez", vendor: "Todd Gilbert", status: "Pending", date: "1/28/2015", price: "$325.38", product: "HTC One Mini Blue" },
{ id: 18, number: "55714-8008", customer: "Joe Johnson", vendor: "Adam Wells", status: "Delivered", date: "5/30/2015", price: "$400.16", product: "HTC One Mini Blue" },
{ id: 19, number: "41250-280", customer: "James Warren", vendor: "Roger Myers", status: "New", date: "3/10/2015", price: "$130.49", product: "Leica T Mirrorless Digital Camera" },
{ id: 20, number: "61748-024", customer: "Helen Martinez", vendor: "Anne Reed", status: "Pending", date: "10/5/2015", price: "$497.31", product: "HP Envy 6-1180ca Sleekbook" },


];

const AllOrders = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">All Orders</h2>
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

export default AllOrders;