import React from "react";
import "./ChartBar.css";
function ChartBar(props) {

let barfillh='0%';
if(props.maxValue>0)
{
    barfillh=Math.round((props.value/props.maxValue)*100)+'%'; //filling levels wrt to max value in array
}

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barfillh}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
export default ChartBar;
