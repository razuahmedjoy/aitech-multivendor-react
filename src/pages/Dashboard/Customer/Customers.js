import React from 'react';
import DataTable from 'react-data-table-component';

import moment from 'moment'; // Example for onSort prop
import { Link } from 'react-router-dom';

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
        name: 'Family Name',
        selector: row => row.familyName,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,

    },
    {
        name: 'Phone',
        selector: row => row.phone,

    },
    {
        name: 'Country',
        selector: row => row.country,
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: row => row.dob,
        sortable: true,
    },
    {
        name: 'Gender',
        selector: row => row.gender,

    },

];

const data = [
    { id: 1, name: "Helen Banks", familyName: "Brainlounge", email: "hbanks0@netw.org", phone: "386-(842)278-0044", country: "Saudi Arabia", dob: moment().subtract(1, 'days').format('Do MMMM YYYY'), gender: "male" },
    { id: 2, name: "Helen Banks", familyName: "Brainlounge", email: "hbanks0@netw.org", phone: "386-(842)278-0044", country: "Saudi Arabia", dob: moment().subtract(1, 'days').format('Do MMMM YYYY'), gender: "male" },
    { id: 3, name: "Helen Banks", familyName: "Brainlounge", email: "hbanks0@netw.org", phone: "386-(842)278-0044", country: "Saudi Arabia", dob: moment().subtract(1, 'days').format('Do MMMM YYYY'), gender: "male" },
    { id: 4, name: "Helen Banks", familyName: "Brainlounge", email: "hbanks0@netw.org", phone: "386-(842)278-0044", country: "Saudi Arabia", dob: moment().subtract(1, 'days').format('Do MMMM YYYY'), gender: "Female" },

];

const Customers = () => {

    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">Customers</h2>
            <div className="flex justify-end my-2">
                <Link to="/dashboard/add-customer" className="ml-5 btn btn-secondary text-white font-normal btn-sm">Add New Customer</Link>
            </div>
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

export default Customers;