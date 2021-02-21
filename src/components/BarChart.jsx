import React from "react";
import Chart from "react-apexcharts";

// const series = [
//     {
//         name: "Sales",
//         type: "column",
//         data: [21, 35, 45, 55, 65, 75, 85, 95, 105, 125, 145, 165],
//     },
//     {
//         name: "Revenue",
//         type: "column",
//         data: [41, 79, 87, 99, 113, 125, 141, 169, 187, 197, 203, 220],
//     },
// ];

// const options = {
//     // chart: {
//     //     height: 350,
//     //     type: "line",
//     //     stacked: false,
//     // },
//     dataLabels: {
//         enabled: false,
//     },
//     colors: ["#FB8833", "#17A8F5", "#B2C8B8"],
//     stroke: {
//         width: [1, 1, 4],
//     },
//     // title: {
//     //     // text: "XYZ - Stock Analysis (2009 - 2016)",
//     //     align: "left",
//     //     offsetX: 110,
//     // },
//     xaxis: {
//         categories: [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec",
//         ],
//     },
//     yaxis: [
//         {
//             axisTicks: {
//                 // show: true,
//             },
//             axisBorder: {
//                 // show: true,
//                 color: "#008FFB",
//             },
//             labels: {
//                 style: {
//                     colors: "#008FFB",
//                 },
//             },
//             title: {
//                 // text: "Income (thousand crores)",
//                 style: {
//                     color: "#008FFB",
//                 },
//             },
//             tooltip: {
//                 enabled: true,
//             },
//         },
//         {
//             seriesName: "Revenue",
//             // opposite: true,
//             axisTicks: {
//                 // show: true,
//             },
//             axisBorder: {
//                 // show: true,
//                 color: "#FEB019",
//             },
//             labels: {
//                 style: {
//                     colors: "#FEB019",
//                 },
//             },
//             title: {
//                 // text: "Revenue (thousand crores)",
//                 style: {
//                     color: "#FEB019",
//                 },
//             },
//         },
//     ],
//     tooltip: {
//         fixed: {
//             enabled: true,
//             position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
//             offsetY: 30,
//             offsetX: 60,
//         },
//     },
//     legend: {
//         horizontalAlign: "left",
//         offsetX: 40,
//     },
// };

const series = [
    {
        name: "Sales",
        type: "column",
        data: [21, 35, 45, 55, 65, 75, 85, 95, 105, 125, 145, 165],
    },
    {
        name: "Revenue",
        type: "column",
        data: [41, 79, 87, 99, 113, 125, 141, 169, 187, 197, 203, 220],
    },
];

const options = {
    chart: {
        height: 350,
        // type: "line",
        stacked: false,
        fontFamily: "IBM_Plex_Sans, sans-serif",
    },
    colors: ["#17A8F5", "#FB8833", "#B2C8B8"],
    stroke: {
        width: [0, 2, 5],
        curve: "smooth",
    },
    legend: { fontFamily: "IBM_Plex_Sans", fontSize: "16px", height: "60px" },
    plotOptions: {
        bar: {
            columnWidth: "50%",
        },
    },

    fill: {
        opacity: [0.85, 0.85, 1],
        gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
        },
    },
    // labels: [
    //     "01/01/2003",
    //     "02/01/2003",
    //     "03/01/2003",
    //     "04/01/2003",
    //     "05/01/2003",
    //     "06/01/2003",
    //     "07/01/2003",
    //     "08/01/2003",
    //     "09/01/2003",
    //     "10/01/2003",
    //     "11/01/2003",
    // ],
    markers: {
        size: 0,
    },
    xaxis: {
        // type: "datetime",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        labels: {
            style: { fontSize: "0.94rem" },
        },
    },
    yaxis: {
        title: {
            // text: "Points",
        },
        min: 0,
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            },
        },
    },
};

function BarChart() {
    return <Chart options={options} series={series} type="line" height="94%" />;
}

export default BarChart;
