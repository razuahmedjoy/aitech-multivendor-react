import React from "react";

import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,

} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,

);


const data221 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [165, 219, 180, 221, 216, 140, 211, 116]
    },
    {
      label: 'Visits',
      backgroundColor: 'rgba(255, 138, 101,1)',
      borderColor: 'rgba(255, 138, 101,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      hoverBorderColor: 'rgba(255, 138, 101,1)',
      data: [255, 279, 140, 211, 116, 265, 119, 280]
    },
    {
      label: 'Subscriptions',
      backgroundColor: 'rgba(127, 143, 244,1)',
      borderColor: 'rgba(127, 143, 244,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(127, 143, 244,0.8)',
      hoverBorderColor: 'rgba(127, 143, 244,1)',
      data: [265, 119, 280, 121, 316, 255, 279, 140]
    },
  ]
};


const options221 = {
  legend: {
    display: false,
  },

  maintainAspectRatio: false
};

const data312 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Resolved',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(38, 166, 154,0.8)',
      fillColor: 'rgba(38, 166, 154,0.8)',
      borderColor: 'rgba(38, 166, 154,0.8)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(38, 166, 154,0.8)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [65, 59, 50, 65, 56, 50, 60]
    },
    {
      label: 'New',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 138, 101,0.8)',
      borderColor: 'rgba(255, 138, 101,0.8)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fafafa',
      pointBackgroundColor: 'rgba(255, 138, 101,0.8)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
      pointHoverBorderColor: '#eeeeee',
      pointHoverBorderWidth: 1,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [45, 74, 60, 65, 56, 65, 70]
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


const primaryColor = "#26a69a";
const accentColor = "#ff8a65";
const purpleColor = "#7f8ff4";


const targetData = {
  labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
  datasets: [{
    label: "Leads",
    borderColor: primaryColor,
    pointBorderColor: "#FFF",
    pointBackgroundColor: primaryColor,
    pointBorderWidth: 2,
    pointHoverRadius: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderWidth: 2,
    data: [1140, 660, 1100, 720, 790, 1232, 860, 1120]
  },
  {
    label: "Customers",
    borderColor: accentColor,
    pointBorderColor: "#FFF",
    pointBackgroundColor: accentColor,
    pointBorderWidth: 2,
    pointHoverRadius: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderWidth: 2,
    data: [540, 760, 700, 620, 690, 732, 660, 720]
  },
  {
    label: "Vendors",
    borderColor: purpleColor,
    pointBorderColor: "#FFF",
    pointBackgroundColor: purpleColor,
    pointBorderWidth: 2,
    pointHoverRadius: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderWidth: 2,
    data: [740, 760, 800, 720, 690, 832, 760, 820]
  }]
}

const targetOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  elements: {
    line: {
      tension: .4 // disables bezier curves
    }
  },
  responsive: true,
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },


  scales: {
    xAxes: [{
      display: 1,
      gridLines: {
        color: "rgba(0, 0, 0, 0.01)",
      },
      ticks: {
        display: false
      },

    }],
    yAxes: [{
      categoryPercentage: 0.5,
      barPercentage: 0.5,
      maxBarThickness: 6,
      display: 1,
      gridLines: {
        color: "rgba(0, 0, 0, 0.01)",
      },
      ticks: {
        display: true
      }
    }]
  },
  layout: {
    padding: { left: 0, right: 0, top: 0, bottom: 0 }
  }
};



const data2 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Invoice',
      backgroundColor: 'rgba(38, 166, 154,1)',
      borderColor: 'rgba(38, 166, 154,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(38, 166, 154,0.8)',
      hoverBorderColor: 'rgba(38, 166, 154,1)',
      data: [165, 219, 180, 221, 216, 205, 290, 280, 221, 216, 245, 130]
    }
  ]
};


const options2 = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{
      categoryPercentage: 0.6,
      barPercentage: 0.6,
      maxBarThickness: 9,
      display: 1,
      gridLines: {
        color: "rgba(0, 0, 0, 0.01)",
      },
      ticks: {
        display: false
      },

    }],
    yAxes: [{
      categoryPercentage: 0.6,
      barPercentage: 0.6,
      maxBarThickness: 9,
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


const AdminDashboard = () => {
  return (
    <>
      <h2 className="text-title text-lg md:text-2xl pb-2">Dashboard</h2>
      <div>
        {/* chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="p-4 flex flex-col justify-center  border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-md md:text-lg">3342</p>
            <p className="text-gray-500 text-xs">New Leads Generated</p>

            <div className="py-2">
              <progress class="progress h-[4px] progress-primary w-full" value="20" max="100"></progress>
            </div>

            <p className="text-gray-500 text-xs py-2">20% increase</p>
          </div>
          <div className="p-4 flex flex-col justify-center  border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-md md:text-lg">1154</p>
            <p className="text-gray-500 text-xs">New Vendors Added</p>

            <div className="py-2">
              <progress class="progress h-[4px] progress-success w-full" value="30" max="100"></progress>
            </div>

            <p className="text-gray-500 text-xs py-2">20% increase</p>
          </div>
          <div className="p-4 flex flex-col justify-center  border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-md md:text-lg">1533</p>
            <p className="text-gray-500 text-xs">New Customer Added </p>

            <div className="py-2">
              <progress class="progress h-[4px] progress-secondary w-full" value="40" max="100"></progress>
            </div>

            <p className="text-gray-500 text-xs py-2">20% increase</p>
          </div>
          <div className="p-4 flex flex-col justify-center  border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-md md:text-lg">3342</p>
            <p className="text-gray-500 text-xs">New Leads Generated</p>

            <div className="py-2">
              <progress class="progress h-[4px] progress-info w-full" value="20" max="100"></progress>
            </div>

            <p className="text-gray-500 text-xs py-2">20% increase</p>
          </div>

        </div>

        <br />
        <br />
        {/* Subscription */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm col-span-2">
            <p className="text-gray-500 text-sm md:text-md self-start uppercase">Subscriptions</p>

            <div className="chart w-full md:p-5">
              <Bar
                data={data221}
                height={350}
                options={options221}

              />
            </div>
          </div>

          {/* targets */}
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm md:text-md self-start uppercase">Targets</p>

            <div className="chart w-full py-2">

              <Line data={targetData} options={targetOptions} height={300} />
            </div>
          </div>


          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm md:text-md self-start uppercase">Support Tickets</p>

            <div className="chart w-full py-2">

              <Line data={data312} options={options312} height={300} />
            </div>
          </div>

          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm md:text-md self-start uppercase">Ticket cleared</p>

            <div className="chart w-full py-2">

              <Bar
                data={data2}
                height={300}
                options={options2}

              />
            </div>
          </div>
          <div className="p-4 flex flex-col items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm md:text-md self-start uppercase">Earnings</p>

            <div className="chart w-full py-3">

              <div class="overflow-x-auto">
                <table class="table w-full">
             
                  <thead>
                    <tr>
                     
                      <th>Name</th>
                      <th>Sales</th>
                      <th>Status</th>
                   
                    </tr>
                  </thead>
                  <tbody>
             
                    <tr>
              
                      <td>Cy Ganderton</td>
                      <td>4321</td>
                      <td>Approved</td>
                 
                    </tr>
                    <tr>
              
                      <td>Cy Ganderton</td>
                      <td>4321</td>
                      <td>Approved</td>
                  
                    </tr>
                    <tr>
              
                      <td>Cy Ganderton</td>
                      <td>4321</td>
                      <td>Approved</td>
               
                    </tr>
                    <tr>
              
                      <td>Cy Ganderton</td>
                      <td>4321</td>
                      <td>Approved</td>
              
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

export default AdminDashboard;
