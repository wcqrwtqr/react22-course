import React, { useState } from 'react';
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

  const dataPointvalues = props.dataPoints.map(el => el.value );
  const totalMax = Math.max(...dataPointvalues)

  return (
    <div className="chart">
      {props.dataPoints.map(el => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={totalMax}
          label={el.label} />
      ))}
    </div>
  )

}

export default Chart;
