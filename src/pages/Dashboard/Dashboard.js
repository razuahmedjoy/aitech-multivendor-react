import React from 'react';

import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale,
  BarElement,
  Title
} from 'chart.js';

import { AiOutlineFundView,AiFillEye } from 'react-icons/ai'
import { TbReportSearch } from 'react-icons/tb'
import { BiTargetLock } from 'react-icons/bi'
import avatarImage from '../../assets/images/avatar_male.png'

ChartJS.register(ArcElement, Tooltip, CategoryScale,
  LinearScale,
  BarElement,
  Title);

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
      '#fca11a', '#fca11a', '#ffa11a', '#ffc11a', '#fbc40a',
    ],

    // hoverBackgroundColor: [
    // '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
    // ]
  }]
};

const data221 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [

    {
      label: 'Customers',
      backgroundColor: 'rgba(251, 99, 142,1)',
      borderColor: 'rgba(251, 99, 142,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(251, 99, 142,0.8)',
      hoverBorderColor: 'rgba(251, 99, 142,1)',
      data: [255, 279, 140, 211, 116, 265, 119]
    }
  ]
};


const options12 = {
  legend: {
    display: true,
  },
};

const options221 = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      categoryPercentage: 0.6,
      barPercentage: 0.6,
      maxBarThickness: 4,
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        display: false
      }
    }],
    yAxes: [{
      categoryPercentage: 0.7,
      barPercentage: 0.7,
      maxBarThickness: 4,
      display: 1,
      gridLines: {
        color: "rgba(0, 0, 0, 0.01)",
      },
      ticks: {
        display: true
      }
    }]
  },
  maintainAspectRatio: false
};

const data312 = {
  labels: [25, 26, 27,
    28, 29, 30, 31
  ],
  datasets: [
    {
      label: 'Orders',
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#3ABFF8',
      fillColor: '#3ABFF8',
      borderColor: '#3ABFF8',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: '#3ABFF8',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3ABFF8',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [

        2, 34, 53, 45, 38, 28, 49, 77, 23, 24,
        11, 37, 63, 9, 20, 67, 29, 10, 75,
      ]
    },
    {
      label: 'Visits',
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#F69037',
      fillColor: '#F69037',
      borderColor: '#F69037',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: '#F69037',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#F69037',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [
        11, 37, 63, 9, 20, 67, 29, 10, 75,
        2, 34, 53, 45, 38, 28, 49, 77, 23
      ]
    },
    {
      label: 'Sales',
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#37CDBE',
      borderColor: '#37CDBE',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: '#37CDBE',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#37CDBE',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [
        0, 32, 31, 29, 5, 3, 4, 29, 3,
        11, 22, 10, 12, 20, 5, 27, 4, 3
      ]
    },
    {
      label: 'Goal',
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#FBBD23',
      borderColor: '#FBBD23',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: '#FBBD23',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#FBBD23',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [

        11, 22, 10, 12, 20, 5, 27, 4, 3,
        0, 32, 31, 29, 5, 3, 4, 29, 3,
      ]
    }
  ]
};

const options312 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [{
      categoryPercentage: 0.8,
      barPercentage: 0.6,
      maxBarThickness: 12,
      display: 1,
      gridLines: {
        color: "rgba(0, 0, 0, 0.01)",
      },
      ticks: {
        display: true
      }
    }],
    xAxes: [{
      display: 1,
      gridLines: {
        color: "rgba(0, 0, 0, 0.01)",
      },
      ticks: {
        display: false
      },

    }]
  },
  layout: {
    padding: { left: 0, right: 0, top: 0, bottom: 0 }
  }
};

const Dashboard = () => {
  return (
    <>
      <h2 className="text-title text-lg md:text-2xl pb-2">Dashboard</h2>
      <div>

        {/* chart */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Product Sales</p>

            <div className="chart p-5">
              <div className="chart-area" style={{ height: 90 + 'px', width: 90 + 'px' }}>
                <Doughnut height={200} data={data12} options={options12} />

              </div>
            </div>
            <p className="text-xl">4500 Sales</p>
            <p className="text-gray-500 text-xs py-2">Total 30% increase</p>

          </div>
         

        </div> */}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="p-4 flex flex-col border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Summary of the Month</p>

            <div className="reports p-5 grid grid-cols-2 gap-4 h-full">

              <div className="flex items-center justify-start gap-x-2">
                <div className="bg-primary p-2 rounded-full">
                  <AiFillEye size={30} className="text-white" />

                </div>
                <p className="text-xs">4500 <br />
                  Visits
                </p>

              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div className="bg-primary p-2 rounded-full">
                  <AiOutlineFundView size={30} className="text-white" />

                </div>

                <p className="text-xs">4500 <br />
                  Sales
                </p>

              </div>

              <div className="flex items-center justify-start gap-x-2">
                <div className="bg-primary p-2 rounded-full">
                  <TbReportSearch size={30} className="text-white" />

                </div>

                <p className="text-xs">4500 <br />
                  Orders
                </p>

              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div className="bg-primary p-2 rounded-full">
                  <BiTargetLock size={30} className="text-white" />

                </div>
                <p className="text-xs">4500 <br />
                  Goal of the Month
                </p>

              </div>


            </div>



          </div>

          <div className="p-4 flex flex-col border border-gray-200 bg-white shadow-sm">



            <div className="chart p-1">
              <div className="chart w-full">

                <Line data={data312} options={options312} height={250} />
              </div>
            </div>


          </div>
          <div className="p-4 flex flex-col border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Alerts </p>

            <div className="alerts py-2">


              <div className="overflow-y-auto single-alert flex flex-col gap-y-2 max-h-[250px]">

                <div className="flex gap-2 items-center border-b pb-2 cursor-pointer hover:bg-gray-100">
                  <img className="w-10 h-10 rounded-full" src={avatarImage} alt="" />
                  <p className="text-sm"> Visitor Added a Product In his busket
                  <br />
                    <small className="text-2xs text-gray-400">2 minutes Ago</small>
                  </p>


                </div>
                <div className="flex gap-2 items-center border-b pb-2 cursor-pointer hover:bg-gray-100">
                  <img className="w-10 h-10 rounded-full" src={avatarImage} alt="" />
                  <p className="text-sm"> Visitor Added a Product In his busket
                  <br />
                    <small className="text-2xs text-gray-400">2 minutes Ago</small>
                  </p>


                </div>
                <div className="flex gap-2 items-center border-b pb-2 cursor-pointer hover:bg-gray-100">
                  <img className="w-10 h-10 rounded-full" src={avatarImage} alt="" />
                  <p className="text-sm"> Visitor Added a Product In his busket
                  <br />
                    <small className="text-2xs text-gray-400">2 minutes Ago</small>
                  </p>


                </div>
                <div className="flex gap-2 items-center border-b pb-2 cursor-pointer hover:bg-gray-100">
                  <img className="w-10 h-10 rounded-full" src={avatarImage} alt="" />
                  <p className="text-sm"> Visitor Added a Product In his busket
                  <br />
                    <small className="text-2xs text-gray-400">2 minutes Ago</small>
                  </p>


                </div>
                <div className="flex gap-2 items-center border-b pb-2 cursor-pointer hover:bg-gray-100">
                  <img className="w-10 h-10 rounded-full" src={avatarImage} alt="" />
                  <p className="text-sm"> Visitor Added a Product In his busket
                  <br />
                    <small className="text-2xs text-gray-400">2 minutes Ago</small>
                  </p>


                </div>
                <div className="flex gap-2 items-center border-b pb-2 cursor-pointer hover:bg-gray-100">
                  <img className="w-10 h-10 rounded-full" src={avatarImage} alt="" />
                  <p className="text-sm"> Visitor Added a Product In his busket
                  <br />
                    <small className="text-2xs text-gray-400">2 minutes Ago</small>
                  </p>


                </div>
                <div className="flex gap-2 items-center border-b pb-2 cursor-pointer hover:bg-gray-100">
                  <img className="w-10 h-10 rounded-full" src={avatarImage} alt="" />
                  <p className="text-sm"> Visitor Added a Product In his busket
                  <br />
                    <small className="text-2xs text-gray-400">2 minutes Ago</small>
                  </p>


                </div>



              </div>

            </div>


          </div>



        </div>

        <br /><br />
        {/* Latest Orders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm col-span-2">
            <p className="text-gray-500 text-lg self-start">Latest Orders</p>

            <div className="w-full py-5">
              <div class="overflow-x-auto">
                <table class="table w-full">

                  <thead>
                    <tr>
                      <th></th>
                      <th>Customer</th>
                      <th>Total Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>$120</td>
                      <td>Pending</td>
                      <td>
                        <button className="btn btn-xs border border-info">View</button>
                      </td>
                    </tr>

                    <tr class="hover">
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>$120</td>
                      <td>Pending</td>
                      <td>
                        <button className="btn btn-xs border border-info">View</button>
                      </td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>$120</td>
                      <td>Pending</td>
                      <td>
                        <button className="btn btn-xs border border-info">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-lg self-start">Sold Out Items</p>

            <div className="chart w-full py-5">
              <div class="overflow-x-auto">
                <table class="table w-full">

                  <thead>
                    <tr>

                      <th>Item ID</th>
                      <th>Product</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>

                      <td>12345677</td>
                      <td>Product Name</td>

                      <td>
                        <button className="btn btn-xs btn-warning">Restock</button>
                      </td>
                    </tr>

                    <tr class="hover">
                      <td>12345677</td>
                      <td>Product Name</td>

                      <td>
                        <button className="btn btn-xs btn-warning">Restock</button>
                      </td>
                    </tr>

                    <tr>
                      <td>12345677</td>
                      <td>Product Name</td>

                      <td>
                        <button className="btn btn-xs btn-warning">Restock</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>

        </div>

      </div>
    </>

  );
};

export default Dashboard;