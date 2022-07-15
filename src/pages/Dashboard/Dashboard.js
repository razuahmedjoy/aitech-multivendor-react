import React from 'react';

import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip);

const data12 = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge',
    'Opera',
    'IE'
  ],
  datasets: [{
    data: [300, 50, 100, 75, 40],
    backgroundColor: [
    '#fca11a','#fca11a','#ffa11a','#ffc11a','#fbc40a',
    ],
    
    // hoverBackgroundColor: [
    // '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    // ]
  }]
};

const options12={
  legend: {
      display: true,
  },
};


const Dashboard = () => {
  return (
    <>
      <h2 className="text-title text-lg md:text-2xl pb-2">Dashboard</h2>
      <div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
         
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Product Sales</p>
          
            <div className="chart p-5">
              <div className="chart-area" style={{height: 90+'px', width: 90+'px'}}>
              <Doughnut height={200} data={data12} options={options12} />

              </div>
            </div>
            <p className="text-xl">4500 Sales</p>
            <p className="text-gray-500 text-xs py-2">Total 30% increase</p>

          </div>
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Monthly Earnings</p>
          
            <div className="chart p-5">
              <div className="chart-area" style={{height: 90+'px', width: 90+'px'}}>
              <Doughnut height={200} data={data12} options={options12} />

              </div>
            </div>
            <p className="text-xl">$23k Earnings</p>
            <p className="text-gray-500 text-xs py-2">Total 20% increase</p>

          </div>
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">vendors</p>
          
            <div className="chart p-5">
              <div className="chart-area" style={{height: 90+'px', width: 90+'px'}}>
              <Doughnut height={200} data={data12} options={options12} />

              </div>
            </div>
            <p className="text-xl">320 Vendors</p>
            <p className="text-gray-500 text-xs py-2">Total 10% increase</p>

          </div>
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Customers</p>
          
            <div className="chart p-5">
              <div className="chart-area" style={{height: 90+'px', width: 90+'px'}}>
              <Doughnut height={200} data={data12} options={options12} />

              </div>
            </div>
            <p className="text-xl">4500 Users</p>
            <p className="text-gray-500 text-xs py-2">Total 10% increase</p>

          </div>

        </div>

      </div>
    </>

  );
};

export default Dashboard;