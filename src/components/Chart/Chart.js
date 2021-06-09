import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {

    const dataPointValues= props.data.map((datapoint)=> datapoint.value);
const totalMaximum=Math.max(...dataPointValues)


  return (
  <div className="chart">
{props.data.map((data) =>
(
    <ChartBar 
    key={data.label}
value={data.value}
maxValue = {totalMaximum}
label={data.label}
    />
))}


  </div>
  );

}

export default Chart;
