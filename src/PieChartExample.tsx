import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { youTubeData } from './data';

export const PieChartExample = () => {
    const options: Highcharts.Options = {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'YouTube Videos',
          style: { fontSize: '30px', fontWeight: 'normal' }
    },
      subtitle: {
          text: 'How Laura Spends her Time on YouTube',
          style: { color: 'gray' }
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    }, series: [{
        name: 'Video percent',
        data: youTubeData
    }]
    };

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
};