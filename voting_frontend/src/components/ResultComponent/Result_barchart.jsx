import React from 'react';
import { Chart } from "react-google-charts";

function Result_barchart() {
  // Example data: Candidate Name and Votes they obtained
  const data = [
    ["Candidate", "Votes"], // Column names
    ["Candidate A", 3000],  // Candidate A with 3000 votes
    ["Candidate B", 4000],  // Candidate B with 4000 votes
    ["Candidate C", 2500],  // Candidate C with 2500 votes
    ["Candidate D", 3500],  // Candidate D with 3500 votes
  ];

  // Options for the chart
  const options = {
    chart: {
      title: "Votes for Candidates",
      subtitle: "Votes obtained by candidates in the election",
    },
    colors: ["#1b9e77"], // Different colors for each bar
  };

  return (
    <div 
      style={{
        display: "flex",           // Use Flexbox
        justifyContent: "center", // Horizontally center the chart
        alignItems: "center",     // Vertically center the chart
        height: "70vh",  
        backgroundColor: "white",
        marginTop: "50px"
      }}
    > 
      {/* Container with custom height */}
      <div style={{ width: "75%", height: "400px" }}>
        {/* Inner container for the chart */}
        <Chart
          chartType="Bar"
          width="100%"  // Chart takes full width of the container
          height="100%" // Chart takes full height of the container
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default Result_barchart;
