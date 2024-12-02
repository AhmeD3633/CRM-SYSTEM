import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [options] = useState({
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false, // Hide the toolbar menu button
      },
    },
    colors: ["#00c853"],
    plotOptions: {
      bar: {
        // borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + " " + "عملاء";
      },
      offsetY: -20,
      style: {
        fontSize: "14px",
        colors: ["white"],
      },
    },
    xaxis: {
      categories: [
        "السبت",
        "الاحد",
        "الاثنين",
        "الثلاثاء",
        "الاربعاء",
        "الخميس",
        "الجمعة",
      ],
      labels: {
        style: {
          colors: Array(7).fill("#fff"), // Gray color for each day
          fontSize: "14px",
        },
      },
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.1,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      max: 30,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val;
        },
      },
    },
    grid: {
      borderColor: "#808080", // Set the grid lines to gray
      strokeDashArray: 4, // Optional: dashed effect for the grid lines
    },
    title: {
      text: "عدد العملاء هذا الاسبوع",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#fff",
      },
    },
  });

  const [series] = useState([
    {
      name: "العملاء",
      data: [2, 3, 4, 12, 4, 3, 3],
    },
  ]);

  return (
    <div>
      <div className="bg-[#0d0d0d] py-16 rounded-lg mx-6" id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
