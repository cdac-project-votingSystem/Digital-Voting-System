import React from 'react';
import { Chart } from "react-google-charts";

function Result_piechart() {
  // Example data: Candidate Name and Votes they obtained
  const data = [
    ["Candidate", "Votes"],  // Column names
    ["Candidate A", 3000],   // Candidate A with 3000 votes
    ["Candidate B", 4000],   // Candidate B with 4000 votes
    ["Candidate C", 2500],   // Candidate C with 2500 votes
    ["Candidate D", 3500],   // Candidate D with 3500 votes
  ];

  // Options for the pie chart
  const options = {
    title: "Votes for Candidates",  // Updated title
    pieHole: 0.4,  // Creates a Donut Chart
    is3D: true,    // Enables 3D view
    pieStartAngle: 100,  // Rotates the chart
    sliceVisibilityThreshold: 0.02,  // Hides slices smaller than 2%
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A"],  // Colors for each slice
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default Result_piechart;
