import './LineChartExample.css';
import React, { useRef, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { lineChartDataOptions, lineChartDates } from './data';

export const LineChartExample = () => {
  const [leftData, setLeftData] = useState(lineChartDataOptions[0]);
  const [rightData, setRightData] = useState(lineChartDataOptions[1]);
  const leftDataToUse = leftData.data;
  const rightDataToUse = rightData.data;
  const [chartSeries, setChartSeries] = useState([{
    type: 'line',
    data: [...leftDataToUse], // https://github.com/highcharts/highcharts-react/issues/326
    name: leftData.name,
    yAxis: 0,
    color: '#66410E'
  }, {
    type: 'line',
    data: [...rightDataToUse],
    name: rightData.name,
    yAxis: 1,
    color: '#FF9999'
  }]);

  const chartOptions: Highcharts.Options = {
    title: { 
      text: `${leftData.name } vs ${rightData.name}`,
      style: { fontSize: '25px', fontWeight: 'normal' }
    },
    annotations: [{
      labels: [{
        point: 'max',
        text: 'Max'
      }]
    }],
    series: chartSeries,
    xAxis: { 
      categories: lineChartDates
    },
    yAxis: [
      {title: { text: leftData.yLabel }},
      {title: { text: rightData.yLabel }, opposite: true }
    ]
  };

  const handleReplaceLeft = () => {
    const currentOptions = [...chartSeries];
    for (const option of lineChartDataOptions) {
      if((option.name !== leftData.name) && (option.name !== rightData.name)){
        setLeftData(option);
        currentOptions[0].data = option.data;
        currentOptions[0].name = option.name;
      }
    }
    setChartSeries(currentOptions);
  }

  const handleReplaceRight = () => {
    const currentOptions = [...chartSeries];
    for (const option of lineChartDataOptions) {
      if((option.name !== leftData.name) && (option.name !== rightData.name)){
        setRightData(option);
        currentOptions[1].data = option.data;
        currentOptions[1].name = option.name;
      }
    }
    setChartSeries(currentOptions);
  }

  return (
    <div className='LineChart'>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        updateArgs={[true]}
      />
      <button onClick={handleReplaceRight}>
        Swap right side for another data set
      </button>
      <button onClick={handleReplaceLeft}>
        Swap left side for another data set
      </button>
    </div>
  );
};