import React from 'react';
import { Chart } from "react-google-charts";

function Result_piechart({Pdata}) {

  const data = [
    ["Candidate (Party)", "Votes"], 
    ...Pdata.map(item => [item.candidateName, item.voteGain])  
];


  

  // Options for the pie chart
  const options = {
    // title: "Votes for Candidates",  // Updated title
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
      {console.log(Pdata)}
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
