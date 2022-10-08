import React, { useState, useEffect } from 'react';
import '../../Styles/_mainStyles.scss';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";



const SendReceiveChart = () => {


    const [ dataArray, setDataArray ] = useState([]);

    useEffect(() => {
        setDataArray([
            {
                "date": "2017-12-31T20:30:00.000Z",
                "receive": 103,
                "send": 109
            },
            {
                "date": "2018-01-01T20:30:00.000Z",
                "receive": 100,
                "send": 99
            },
            {
                "date": "2018-01-02T20:30:00.000Z",
                "receive": 96,
                "send": 102
            },
            {
                "date": "2018-01-03T20:30:00.000Z",
                "receive": 96,
                "send": 100
            },
            {
                "date": "2018-01-04T20:30:00.000Z",
                "receive": 92,
                "send": 93
            },
            {
                "date": "2018-01-05T20:30:00.000Z",
                "receive": 92,
                "send": 94
            },
            {
                "date": "2018-01-06T20:30:00.000Z",
                "receive": 89,
                "send": 91
            },
            {
                "date": "2018-01-07T20:30:00.000Z",
                "receive": 92,
                "send": 95
            },
            {
                "date": "2018-01-08T20:30:00.000Z",
                "receive": 89,
                "send": 96
            },
            {
                "date": "2018-01-09T20:30:00.000Z",
                "receive": 87,
                "send": 90
            },
            {
                "date": "2018-01-10T20:30:00.000Z",
                "receive": 83,
                "send": 90
            },
            {
                "date": "2018-01-11T20:30:00.000Z",
                "receive": 81,
                "send": 89
            },
            {
                "date": "2018-01-12T20:30:00.000Z",
                "receive": 82,
                "send": 88
            },
            {
                "date": "2018-01-13T20:30:00.000Z",
                "receive": 80,
                "send": 87
            },
            {
                "date": "2018-01-14T20:30:00.000Z",
                "receive": 83,
                "send": 89
            },
            {
                "date": "2018-01-15T20:30:00.000Z",
                "receive": 85,
                "send": 88
            },
            {
                "date": "2018-01-16T20:30:00.000Z",
                "receive": 86,
                "send": 90
            },
            {
                "date": "2018-01-17T20:30:00.000Z",
                "receive": 90,
                "send": 98
            },
            {
                "date": "2018-01-18T20:30:00.000Z",
                "receive": 86,
                "send": 92
            },
            {
                "date": "2018-01-19T20:30:00.000Z",
                "receive": 89,
                "send": 94
            },
            {
                "date": "2018-01-20T20:30:00.000Z",
                "receive": 88,
                "send": 98
            },
            {
                "date": "2018-01-21T20:30:00.000Z",
                "receive": 91,
                "send": 98
            },
            {
                "date": "2018-01-22T20:30:00.000Z",
                "receive": 91,
                "send": 97
            },
            {
                "date": "2018-01-23T20:30:00.000Z",
                "receive": 95,
                "send": 102
            },
            {
                "date": "2018-01-24T20:30:00.000Z",
                "receive": 92,
                "send": 100
            },
            {
                "date": "2018-01-25T20:30:00.000Z",
                "receive": 93,
                "send": 104
            },
            {
                "date": "2018-01-26T20:30:00.000Z",
                "receive": 92,
                "send": 101
            },
            {
                "date": "2018-01-27T20:30:00.000Z",
                "receive": 88,
                "send": 98
            },
            {
                "date": "2018-01-28T20:30:00.000Z",
                "receive": 91,
                "send": 103
            },
            {
                "date": "2018-01-29T20:30:00.000Z",
                "receive": 89,
                "send": 97
            },
            {
                "date": "2018-01-30T20:30:00.000Z",
                "receive": 86,
                "send": 94
            },
            {
                "date": "2018-01-31T20:30:00.000Z",
                "receive": 88,
                "send": 98
            },
            {
                "date": "2018-02-01T20:30:00.000Z",
                "receive": 87,
                "send": 96
            },
            {
                "date": "2018-02-02T20:30:00.000Z",
                "receive": 91,
                "send": 102
            },
            {
                "date": "2018-02-03T20:30:00.000Z",
                "receive": 94,
                "send": 103
            },
            {
                "date": "2018-02-04T20:30:00.000Z",
                "receive": 97,
                "send": 108
            },
            {
                "date": "2018-02-05T20:30:00.000Z",
                "receive": 94,
                "send": 105
            },
            {
                "date": "2018-02-06T20:30:00.000Z",
                "receive": 98,
                "send": 107
            },
            {
                "date": "2018-02-07T20:30:00.000Z",
                "receive": 98,
                "send": 107
            },
            {
                "date": "2018-02-08T20:30:00.000Z",
                "receive": 95,
                "send": 109
            },
            {
                "date": "2018-02-09T20:30:00.000Z",
                "receive": 99,
                "send": 111
            },
            {
                "date": "2018-02-10T20:30:00.000Z",
                "receive": 95,
                "send": 103
            },
            {
                "date": "2018-02-11T20:30:00.000Z",
                "receive": 91,
                "send": 104
            },
            {
                "date": "2018-02-12T20:30:00.000Z",
                "receive": 90,
                "send": 102
            },
            {
                "date": "2018-02-13T20:30:00.000Z",
                "receive": 94,
                "send": 104
            },
            {
                "date": "2018-02-14T20:30:00.000Z",
                "receive": 93,
                "send": 105
            },
            {
                "date": "2018-02-15T20:30:00.000Z",
                "receive": 97,
                "send": 109
            },
            {
                "date": "2018-02-16T20:30:00.000Z",
                "receive": 97,
                "send": 107
            },
            {
                "date": "2018-02-17T20:30:00.000Z",
                "receive": 97,
                "send": 109
            },
            {
                "date": "2018-02-18T20:30:00.000Z",
                "receive": 95,
                "send": 107
            },
            {
                "date": "2018-02-19T20:30:00.000Z",
                "receive": 98,
                "send": 111
            },
            {
                "date": "2018-02-20T20:30:00.000Z",
                "receive": 95,
                "send": 109
            },
            {
                "date": "2018-02-21T20:30:00.000Z",
                "receive": 92,
                "send": 107
            },
            {
                "date": "2018-02-22T20:30:00.000Z",
                "receive": 93,
                "send": 107
            },
            {
                "date": "2018-02-23T20:30:00.000Z",
                "receive": 97,
                "send": 111
            },
            {
                "date": "2018-02-24T20:30:00.000Z",
                "receive": 94,
                "send": 109
            },
            {
                "date": "2018-02-25T20:30:00.000Z",
                "receive": 90,
                "send": 103
            },
            {
                "date": "2018-02-26T20:30:00.000Z",
                "receive": 89,
                "send": 104
            },
            {
                "date": "2018-02-27T20:30:00.000Z",
                "receive": 85,
                "send": 103
            },
            {
                "date": "2018-02-28T20:30:00.000Z",
                "receive": 85,
                "send": 101
            },
            {
                "date": "2018-03-01T20:30:00.000Z",
                "receive": 89,
                "send": 107
            },
            {
                "date": "2018-03-02T20:30:00.000Z",
                "receive": 92,
                "send": 110
            },
            {
                "date": "2018-03-03T20:30:00.000Z",
                "receive": 92,
                "send": 108
            },
            {
                "date": "2018-03-04T20:30:00.000Z",
                "receive": 88,
                "send": 103
            },
            {
                "date": "2018-03-05T20:30:00.000Z",
                "receive": 88,
                "send": 106
            },
            {
                "date": "2018-03-06T20:30:00.000Z",
                "receive": 85,
                "send": 101
            },
            {
                "date": "2018-03-07T20:30:00.000Z",
                "receive": 89,
                "send": 109
            },
            {
                "date": "2018-03-08T20:30:00.000Z",
                "receive": 90,
                "send": 108
            },
            {
                "date": "2018-03-09T20:30:00.000Z",
                "receive": 88,
                "send": 105
            },
            {
                "date": "2018-03-10T20:30:00.000Z",
                "receive": 86,
                "send": 103
            },
            {
                "date": "2018-03-11T20:30:00.000Z",
                "receive": 84,
                "send": 101
            },
            {
                "date": "2018-03-12T20:30:00.000Z",
                "receive": 87,
                "send": 106
            },
            {
                "date": "2018-03-13T20:30:00.000Z",
                "receive": 87,
                "send": 102
            },
            {
                "date": "2018-03-14T20:30:00.000Z",
                "receive": 83,
                "send": 100
            },
            {
                "date": "2018-03-15T20:30:00.000Z",
                "receive": 80,
                "send": 99
            },
            {
                "date": "2018-03-16T20:30:00.000Z",
                "receive": 83,
                "send": 100
            },
            {
                "date": "2018-03-17T20:30:00.000Z",
                "receive": 81,
                "send": 99
            },
            {
                "date": "2018-03-18T20:30:00.000Z",
                "receive": 85,
                "send": 102
            },
            {
                "date": "2018-03-19T20:30:00.000Z",
                "receive": 87,
                "send": 103
            },
            {
                "date": "2018-03-20T20:30:00.000Z",
                "receive": 88,
                "send": 104
            },
            {
                "date": "2018-03-21T20:30:00.000Z",
                "receive": 91,
                "send": 112
            },
            {
                "date": "2018-03-22T19:30:00.000Z",
                "receive": 91,
                "send": 110
            },
            {
                "date": "2018-03-23T19:30:00.000Z",
                "receive": 94,
                "send": 113
            },
            {
                "date": "2018-03-24T19:30:00.000Z",
                "receive": 95,
                "send": 117
            },
            {
                "date": "2018-03-25T19:30:00.000Z",
                "receive": 92,
                "send": 111
            },
            {
                "date": "2018-03-26T19:30:00.000Z",
                "receive": 92,
                "send": 113
            },
            {
                "date": "2018-03-27T19:30:00.000Z",
                "receive": 93,
                "send": 117
            },
            {
                "date": "2018-03-28T19:30:00.000Z",
                "receive": 96,
                "send": 115
            },
            {
                "date": "2018-03-29T19:30:00.000Z",
                "receive": 95,
                "send": 114
            },
            {
                "date": "2018-03-30T19:30:00.000Z",
                "receive": 91,
                "send": 114
            },
            {
                "date": "2018-03-31T19:30:00.000Z",
                "receive": 94,
                "send": 117
            },
            {
                "date": "2018-04-01T19:30:00.000Z",
                "receive": 94,
                "send": 116
            },
            {
                "date": "2018-04-02T19:30:00.000Z",
                "receive": 91,
                "send": 110
            },
            {
                "date": "2018-04-03T19:30:00.000Z",
                "receive": 89,
                "send": 110
            },
            {
                "date": "2018-04-04T19:30:00.000Z",
                "receive": 91,
                "send": 115
            },
            {
                "date": "2018-04-05T19:30:00.000Z",
                "receive": 88,
                "send": 110
            },
            {
                "date": "2018-04-06T19:30:00.000Z",
                "receive": 89,
                "send": 109
            },
            {
                "date": "2018-04-07T19:30:00.000Z",
                "receive": 89,
                "send": 108
            },
            {
                "date": "2018-04-08T19:30:00.000Z",
                "receive": 87,
                "send": 106
            },
            {
                "date": "2018-04-09T19:30:00.000Z",
                "receive": 88,
                "send": 111
            },
            {
                "date": "2018-04-10T19:30:00.000Z",
                "receive": 91,
                "send": 114
            },
            {
                "date": "2018-04-11T19:30:00.000Z",
                "receive": 93,
                "send": 117
            },
            {
                "date": "2018-04-12T19:30:00.000Z",
                "receive": 90,
                "send": 113
            },
            {
                "date": "2018-04-13T19:30:00.000Z",
                "receive": 93,
                "send": 113
            },
            {
                "date": "2018-04-14T19:30:00.000Z",
                "receive": 92,
                "send": 115
            },
            {
                "date": "2018-04-15T19:30:00.000Z",
                "receive": 96,
                "send": 122
            },
            {
                "date": "2018-04-16T19:30:00.000Z",
                "receive": 98,
                "send": 122
            },
            {
                "date": "2018-04-17T19:30:00.000Z",
                "receive": 97,
                "send": 121
            },
            {
                "date": "2018-04-18T19:30:00.000Z",
                "receive": 96,
                "send": 122
            },
            {
                "date": "2018-04-19T19:30:00.000Z",
                "receive": 99,
                "send": 122
            },
            {
                "date": "2018-04-20T19:30:00.000Z",
                "receive": 95,
                "send": 120
            },
            {
                "date": "2018-04-21T19:30:00.000Z",
                "receive": 95,
                "send": 119
            },
            {
                "date": "2018-04-22T19:30:00.000Z",
                "receive": 96,
                "send": 123
            },
            {
                "date": "2018-04-23T19:30:00.000Z",
                "receive": 94,
                "send": 119
            },
            {
                "date": "2018-04-24T19:30:00.000Z",
                "receive": 97,
                "send": 122
            },
            {
                "date": "2018-04-25T19:30:00.000Z",
                "receive": 95,
                "send": 121
            },
            {
                "date": "2018-04-26T19:30:00.000Z",
                "receive": 92,
                "send": 117
            },
            {
                "date": "2018-04-27T19:30:00.000Z",
                "receive": 94,
                "send": 120
            },
            {
                "date": "2018-04-28T19:30:00.000Z",
                "receive": 91,
                "send": 114
            }
        ])
    }, []);

    am4core.useTheme(am4themes_animated);

    am4core.addLicense("");

    var chart = am4core.create("chartdiv2", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 20;

    chart.data = dataArray;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "receive";
    series.dataFields.valueY = "send";
    series.tooltipText = "ارسال: {openValueY.value} دریافت: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0.3;
    series.fill = '#c7f2ff';
    series.stroke = '#00c852';
    series.defaultState.transitionDuration = 1000;
    series.tensionX = 0.8;

    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "receive";
    series2.sequencedInterpolation = true;
    series2.defaultState.transitionDuration = 1500;
    series2.stroke = '#f54336';
    series2.tensionX = 0.8;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    // chart.scrollbarX.disabled = new am4core.Scrollbar();


    return (
        <div className='sectionComponentWithHeader'>
            <div id="chartdiv2" style={{width: '100%', height: 500}}/>
        </div>
    )
}

export default SendReceiveChart;