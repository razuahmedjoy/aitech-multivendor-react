import React from 'react';

import DataTable from 'react-data-table-component';

import moment from 'moment'; // Example for onSort prop

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },

    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
 
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Phone',
        selector: row => row.phone,
        sortable: true,
    },
    {
        name: 'Role',
        selector: row => row.role,
        sortable: true,
    },

];

const data = [
    { id: 1, name: "Helen Banks", email: "hbanks0@networkadvertising.org", phone: "386-(842)278-0044", date: moment().subtract(1, 'days').format('Do MMMM YYYY'), role: "Cashier", },
    { id: 2, name: "Helen Banks", email: "hbanks0@networkadvertising.org", phone: "386-(842)278-0044", date: moment().subtract(1, 'days').format('Do MMMM YYYY'), role: "Editor", },
    { id: 3, name: "Helen Banks", email: "hbanks0@networkadvertising.org", phone: "386-(842)278-0044", date: moment().subtract(1, 'days').format('Do MMMM YYYY'), role: "Manager", },
   
];

const AllUsers = () => {
    return (
        <>
        <h2 className="text-title text-lg md:text-2xl pb-2">Users</h2>
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

export default AllUsers;