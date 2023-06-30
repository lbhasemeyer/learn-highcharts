import React, { useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { barChartFoodData, barChartLiquidData, barChartTimes } from './data';

export const BarChartExample = () => {
    const [seriesData, setSeriesData] = useState(JSON.parse(JSON.stringify(barChartLiquidData)));
    const [chartTheme, setChartTheme] = useState('liquid');

    const titleText = (chartTheme === 'liquid') ? 'Liquid Consumption' : 'Food Consumption';
    const buttonText = (chartTheme === 'liquid') ? 'Change to Food Consumption' : 'Change to Liquid Consumption';

    const options: Highcharts.Options = {
      chart: {
          type: 'column'
      },
      title: {
          text: titleText,
          style: { fontSize: '30px', fontWeight: 'normal' }
      },
      subtitle: {
          text: 'Through Laura\'s Life',
          style: { color: 'gray' }
      },
      xAxis: {
          categories: barChartTimes,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Subjective amounts in no real unit of measurement'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: seriesData
    };

    const handleChangeConsumption = () => {
      if(chartTheme === 'liquid'){
        setChartTheme('food');
        setSeriesData(barChartFoodData);
      } else {
        setChartTheme('liquid');
        setSeriesData(barChartLiquidData);
      }
    }

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <button onClick={handleChangeConsumption}>{buttonText}</button>
      </div>
    );
};



