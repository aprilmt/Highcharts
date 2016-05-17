$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Box Office Collection Comparison(In Millions)'
        },
        xAxis: {
            categories: ['Day1', 'Day4', 'Day8', 'Day12', 'Day16', 'Day24', 'Day28']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Number'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Martian',
            data: [77.4, 54.5, 36.4, 23.7, 12.8, 8.5, 2.8]
        }, {
            name: 'Intersteller',
            data: [80.5, 57.2, 35.6, 28.5, 11.9, 4.3, 2.2]
        }]
    });
});