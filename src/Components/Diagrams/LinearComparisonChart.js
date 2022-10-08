import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const LinearComparisonChart = ({data}) => {

    const response = data;


    const options = {
        chart: {
            type: 'column',
            height: 400
        },
        title: {
            text: ' '
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: response[0].category,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ' '
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.4,
                borderWidth: 0
            }
        },
        series: response[0].data
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default LinearComparisonChart;
