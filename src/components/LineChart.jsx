import React from "react";
import Chart from "react-apexcharts";

let options = {
    chart: {
        id: "chart",
        type: "area",
        fontFamily: "IBM_Plex_Sans, sans-serif",
    },

    fill: {
        colors: ["rgba(255, 205, 101, .2)", "rgba(0,0,0,0)"],
        type: "solid",
    },

    xaxis: {
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
    dataLabels: {
        enabled: false,
    },
    colors: ["#17A8F5", "#FB8833", "#B2C8B8"],
    style: { height: 400, maxHeight: 400 },
    stroke: {
        show: true,
        curve: "straight",
        lineCap: "butt",
        colors: undefined,
        width: 3.6,
        dashArray: 0,
    },
    legend: { fontFamily: "IBM_Plex_Sans", fontSize: "16px", height: "60px" },
    markers: {
        size: 6,
        colors: undefined,
        strokeColors: "#fff",
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
            size: 7,
            sizeOffset: 3,
        },
    },
};

let series = [
    {
        name: "Revenue",
        data: [41, 79, 87, 99, 113, 125, 141, 169, 187, 197, 203, 220],
    },
    {
        name: "Sales",
        data: [21, 35, 45, 55, 65, 75, 85, 95, 105, 125, 145, 165],
    },
    // {
    //     name: "Leads",
    //     data: [51, 79, 87, 47, 53, 31, 41, 79, 57, 87, 73, 41],
    // },
];

// options = {
//     chart: {
//         id: "basic-bar",
//     },
//     xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
//     },
// };

// series = [
//     {
//         name: "series-1",
//         data: [30, 40, 45, 50, 49, 60, 70, 91],
//     },
// ];

// const BarChartOptions = {
//     chart: {
//         type: "column",
//     },
//     title: {
//         text: "Bar Chart",
//     },
//     xAxis: {
//         categories: ["January", "February", "March", "April", "May", "June"],
//     },
//     colors: ["#FB8833", "#17A8F5"],
//     series: [
//         {
//             name: "Sales",
//             data: [21, 35, 75, 51, 41, 47],
//         },
//         {
//             name: "Leads",
//             data: [41, 79, 57, 47, 63, 71],
//         },
//     ],
//     credits: {
//         enabled: false,
//     },
//     label: { minFontSize: "1.2rem" },
// };

function LineChart() {
    return <Chart series={series} options={options} type="area" height="90%" />;
}

export default LineChart;
