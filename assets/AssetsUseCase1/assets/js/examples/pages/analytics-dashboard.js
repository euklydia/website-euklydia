$(function () {

    var colors = {
            primary: $('.colors .bg-primary').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
            secondary: $('.colors .bg-secondary').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
            info: $('.colors .bg-info').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
            success: $('.colors .bg-success').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
            danger: $('.colors .bg-danger').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
            warning: $('.colors .bg-warning').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        },
        chartFontStyle = 'Fira Sans';

    var rgbToHex = function (rgb) {
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    var fullColorHex = function (r, g, b) {
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red + green + blue;
    };

    colors.primary = '#' + fullColorHex(colors.primary[0], colors.primary[1], colors.primary[2]);
    colors.secondary = '#' + fullColorHex(colors.secondary[0], colors.secondary[1], colors.secondary[2]);
    colors.info = '#' + fullColorHex(colors.info[0], colors.info[1], colors.info[2]);
    colors.success = '#' + fullColorHex(colors.success[0], colors.success[1], colors.success[2]);
    colors.danger = '#' + fullColorHex(colors.danger[0], colors.danger[1], colors.danger[2]);
    colors.warning = '#' + fullColorHex(colors.warning[0], colors.warning[1], colors.warning[2]);

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#analytics-dashboard-daterangepicker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#analytics-dashboard-daterangepicker').daterangepicker({
        startDate: start,
        endDate: end,
        opens: 'left',
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

    function online_users() {
        if ($('#online-users').length > 0) {
            var lastDate = 0;
            var data = [];
            var TICKINTERVAL = 86400000;
            let XAXISRANGE = 777600000;

            function getDayWiseTimeSeries(baseval, count, yrange) {
                var i = 0;
                while (i < count) {
                    var x = baseval;
                    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                    data.push({
                        x, y
                    });
                    lastDate = baseval;
                    baseval += TICKINTERVAL;
                    i++;
                }
            }

            getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 90
            });

            function getNewSeries(baseval, yrange) {
                var newDate = baseval + TICKINTERVAL;
                lastDate = newDate;

                for (var i = 0; i < data.length - 10; i++) {
                    // IMPORTANT
                    // we reset the x and y of the data which is out of drawing area
                    // to prevent memory leaks
                    data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
                    data[i].y = 0
                }

                data.push({
                    x: newDate,
                    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
                })
            }

            function resetData() {
                // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
                data = data.slice(data.length - 10, data.length);
            }

            var options = {
                series: [{
                    data: data.slice()
                }],
                chart: {
                    id: 'realtime',
                    height: 150,
                    type: 'line',
                    fontFamily: chartFontStyle,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                    colors: ['#ffffff'],
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    type: 'datetime',
                    range: XAXISRANGE,
                    axisBorder: {
                        show: false,
                    }
                },
                yaxis: {
                    show: false,
                    max: 100
                },
                grid: {
                    show: false,
                }
            };

            var chart = new ApexCharts(document.querySelector("#online-users"), options);
            chart.render();

            window.setInterval(function () {
                getNewSeries(lastDate, {
                    min: 10,
                    max: 90
                });

                chart.updateSeries([{
                    data: data
                }])
            }, 1000)
        }
    }

    function device_session_chart() {
        if ($('#device_session_chart').length) {
    
            // Updated data for the chart
            var data = [
                {
                    name: "Paid Reach",
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1753, 25759, 17900, 19586, 19922, 15266]
                },
                {
                    name: "Amount spent",
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22, 3.39, 3.1, 8.84, 9.3, 8.62]
                }
            ];
    
            // Updated options for the chart
            var options = {
                chart: {
                    type: 'area',
                    fontFamily: chartFontStyle,
                    height: 300,
                    offsetX: -18,
                    width: '103%',
                    stacked: true,
                    events: {
                        selection: function (chart, e) {
                            // console.log(new Date(e.xaxis.min))
                        }
                    },
                    toolbar: {
                        show: false,
                    }
                },
                colors: [ colors.danger,colors.success,],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 1
                },
                series: data,
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: .6,
                        opacityTo: 0,
                    }
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [
                        "2024-02-01", "2024-02-02", "2024-02-03", "2024-02-04", "2024-02-05", "2024-02-06", "2024-02-07",
                        "2024-02-08", "2024-02-09", "2024-02-10", "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14",
                        "2024-02-15", "2024-02-16", "2024-02-17", "2024-02-18", "2024-02-19", "2024-02-20", "2024-02-21",
                        "2024-02-22", "2024-02-23", "2024-02-24", "2024-02-25", "2024-02-26", "2024-02-27", "2024-02-28",
                        "2024-02-29"
                    ]
                }
            };
    
            var chart = new ApexCharts(
                document.querySelector("#device_session_chart"),
                options
            );
    
            chart.render();
        }
    }
    

    function analytics_tab1() {
        if ($('#analytics-tab-1').length) {
            var options = {
                series: [{
                    name: 'Reach',
                    data: [10961, 13566, 10848, 11144, 10790, 11187, 8422, 4891, 6734, 2347, 228, 887, 315, 2267, 1432, 1998, 485, 278, 173, 11234, 17202, 24201, 18273, 3216, 26820, 18513, 25250, 21496, 16516]
                }],
                chart: {
                    height: 490,
                    type: 'area',
                    offsetX: -20,
                    width: '102%',
                    fontFamily: chartFontStyle,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        "2024-02-01", "2024-02-02", "2024-02-03", "2024-02-04", "2024-02-05",
                        "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09", "2024-02-10",
                        "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14", "2024-02-15",
                        "2024-02-16", "2024-02-17", "2024-02-18", "2024-02-19", "2024-02-20",
                        "2024-02-21", "2024-02-22", "2024-02-23", "2024-02-24", "2024-02-25",
                        "2024-02-26", "2024-02-27", "2024-02-28", "2024-02-29"
                    ]
                },
                colors: [colors.success],
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: .6,
                        opacityTo: 0
                    }
                }
            };
    
            var chart = new ApexCharts(document.querySelector("#analytics-tab-1"), options);
    
            chart.render();
        }
    }

    function analytics_tab2() {
        if ($('#analytics-tab-2').length) {
            var options = {
                series: [{
                    name: 'Reach',
                    data: [1969, 2041, 1565, 1380, 937, 1044, 660, 357, 314, 108, 7, 89, 33, 159, 55, 252, 53, 15, 14, 1010, 2270, 2360, 1260, 4, 18, 7, 319, 615, 736]
                }],
                chart: {
                    height: 490,
                    type: 'area',
                    offsetX: -20,
                    width: '102%',
                    fontFamily: chartFontStyle,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        "2024-02-01", "2024-02-02", "2024-02-03", "2024-02-04", "2024-02-05",
                        "2024-02-06", "2024-02-07", "2024-02-08", "2024-02-09", "2024-02-10",
                        "2024-02-11", "2024-02-12", "2024-02-13", "2024-02-14", "2024-02-15",
                        "2024-02-16", "2024-02-17", "2024-02-18", "2024-02-19", "2024-02-20",
                        "2024-02-21", "2024-02-22", "2024-02-23", "2024-02-24", "2024-02-25",
                        "2024-02-26", "2024-02-27", "2024-02-28", "2024-02-29"
                    ]
                },
                colors: [colors.secondary],
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: .6,
                        opacityTo: 0
                    }
                }
            };
    
            var chart = new ApexCharts(document.querySelector("#analytics-tab-2"), options);
    
            chart.render();
        }
    }

    function analytics_tab3() {
        if ($('#analytics-tab-3').length) {
            var options = {
                series: [{
                    name: 'Facebook Visits',
                    data: [1009, 1074, 729, 529, 785, 799, 1264, 1079, 812, 349, 350, 499, 367, 684, 713, 598, 359, 402, 426, 893, 1160, 1412, 1102, 659, 774, 673, 1493, 1126, 1067]
                }],
                chart: {
                    height: 490,
                    type: 'area',
                    offsetX: -20,
                    offsetY: 20,
                    width: '102%',
                    fontFamily: 'sans-serif', // Ensure you define `chartFontStyle` or replace it with a string
                    toolbar: {
                        show: false,
                    }
                },

                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        "2024-02-01T00:00:00", "2024-02-02T00:00:00", "2024-02-03T00:00:00",
                        "2024-02-04T00:00:00", "2024-02-05T00:00:00", "2024-02-06T00:00:00",
                        "2024-02-07T00:00:00", "2024-02-08T00:00:00", "2024-02-09T00:00:00",
                        "2024-02-10T00:00:00", "2024-02-11T00:00:00", "2024-02-12T00:00:00",
                        "2024-02-13T00:00:00", "2024-02-14T00:00:00", "2024-02-15T00:00:00",
                        "2024-02-16T00:00:00", "2024-02-17T00:00:00", "2024-02-18T00:00:00",
                        "2024-02-19T00:00:00", "2024-02-20T00:00:00", "2024-02-21T00:00:00",
                        "2024-02-22T00:00:00", "2024-02-23T00:00:00", "2024-02-24T00:00:00",
                        "2024-02-25T00:00:00", "2024-02-26T00:00:00", "2024-02-27T00:00:00",
                        "2024-02-28T00:00:00", "2024-02-29T00:00:00"
                    ]
                },
                colors: ['#00A3E0'], // Replace `colors.info` with a specific color if necessary
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0,
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "%" + val;
                        }
                    }
                }
            };
    
            var chart = new ApexCharts(document.querySelector("#analytics-tab-3"), options);
            chart.render();
        }
    }
    

    function analytics_tab4() {
        if ($('#analytics-tab-4').length) {
            var options = {
                series: [{
                    name: 'Daily Visits',
                    data: [36, 28, 31, 24, 26, 15, 27, 12, 15, 6, 4, 9, 1, 9, 8, 24, 28, 7, 10, 15, 42, 36, 21, 4, 5, 3, 8, 26, 9]
                }],
                chart: {
                    height: 490,
                    type: 'area',
                    offsetX: -20,
                    offsetY: 20,
                    width: '102%',
                    fontFamily: 'sans-serif', // make sure you define `chartFontStyle` or replace it with a string
                    toolbar: {
                        show: false,
                    }
                },


                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        "2024-02-01T00:00:00", "2024-02-02T00:00:00", "2024-02-03T00:00:00",
                        "2024-02-04T00:00:00", "2024-02-05T00:00:00", "2024-02-06T00:00:00",
                        "2024-02-07T00:00:00", "2024-02-08T00:00:00", "2024-02-09T00:00:00",
                        "2024-02-10T00:00:00", "2024-02-11T00:00:00", "2024-02-12T00:00:00",
                        "2024-02-13T00:00:00", "2024-02-14T00:00:00", "2024-02-15T00:00:00",
                        "2024-02-16T00:00:00", "2024-02-17T00:00:00", "2024-02-18T00:00:00",
                        "2024-02-19T00:00:00", "2024-02-20T00:00:00", "2024-02-21T00:00:00",
                        "2024-02-22T00:00:00", "2024-02-23T00:00:00", "2024-02-24T00:00:00",
                        "2024-02-25T00:00:00", "2024-02-26T00:00:00", "2024-02-27T00:00:00",
                        "2024-02-28T00:00:00", "2024-02-29T00:00:00"
                    ]
                },
                colors: ['#00A3E0'], // Replace `colors.info` with a specific color if necessary
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0,
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " visits";
                        }
                    }
                }
            };
    
            var chart = new ApexCharts(document.querySelector("#analytics-tab-4"), options);
            chart.render();
        }
    }
    

    function analytics_tab5() {
        if ($('#analytics-tab-5').length) {
            var options = {
                series: [{
                    name: 'Visitor Numbers',
                    data: [38, 29, 25, 18, 25, 32, 26, 22, 23, 7, 12, 14, 13, 5, 11, 7, 8, 6, 12, 28, 40, 25, 27, 13, 18, 9, 22, 9, 20]
                }],
                chart: {
                    height: 490,
                    type: 'area',
                    offsetX: -20,
                    offsetY: 20,
                    width: '102%',
                    fontFamily: 'sans-serif', // make sure you define `chartFontStyle` or replace it with a string
                    toolbar: {
                        show: false,
                    }
                },
                stroke: {
                    width: 1,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        "2024-02-01T00:00:00", "2024-02-02T00:00:00", "2024-02-03T00:00:00",
                        "2024-02-04T00:00:00", "2024-02-05T00:00:00", "2024-02-06T00:00:00",
                        "2024-02-07T00:00:00", "2024-02-08T00:00:00", "2024-02-09T00:00:00",
                        "2024-02-10T00:00:00", "2024-02-11T00:00:00", "2024-02-12T00:00:00",
                        "2024-02-13T00:00:00", "2024-02-14T00:00:00", "2024-02-15T00:00:00",
                        "2024-02-16T00:00:00", "2024-02-17T00:00:00", "2024-02-18T00:00:00",
                        "2024-02-19T00:00:00", "2024-02-20T00:00:00", "2024-02-21T00:00:00",
                        "2024-02-22T00:00:00", "2024-02-23T00:00:00", "2024-02-24T00:00:00",
                        "2024-02-25T00:00:00", "2024-02-26T00:00:00", "2024-02-27T00:00:00",
                        "2024-02-28T00:00:00", "2024-02-29T00:00:00"
                    ]
                },
                colors: [colors.danger], // Replace `colors.info` with a specific color if necessary
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " visitors";
                        }
                    }
                }
            };
    
            var chart = new ApexCharts(document.querySelector("#analytics-tab-5"), options);
            chart.render();
        }
    }
    

    function analytics_tab6() {
        if ($('#analytics-tab-6').length) {
            var options = {
                series: [{
                    name: 'User Engagements',
                    data: [2, 5, 2, 1, 4, 3, 3, 2, 1, 2, 2, 1, 3, 4, 2, 1, 11, 7, 1, 1, 2, 4, 2]
                }],
                chart: {
                    height: 490,
                    type: 'area',
                    offsetX: -20,
                    offsetY: 20,
                    width: '102%',
                    fontFamily: 'sans-serif', // ensure `chartFontStyle` is defined or replaced with a string
                    toolbar: {
                        show: false,
                    }
                },
                stroke: {
                    width: 1,
                    curve: 'smooth'
                },

                dataLabels: {
                    enabled: false
                },
                
                xaxis: {
                    type: 'datetime',
                    categories: [
                        "2024-02-01T00:00:00", "2024-02-02T00:00:00", "2024-02-03T00:00:00",
                        "2024-02-04T00:00:00", "2024-02-05T00:00:00", "2024-02-06T00:00:00",
                        "2024-02-07T00:00:00", "2024-02-08T00:00:00", "2024-02-09T00:00:00",
                        "2024-02-10T00:00:00", "2024-02-12T00:00:00", "2024-02-14T00:00:00",
                        "2024-02-15T00:00:00", "2024-02-16T00:00:00", "2024-02-17T00:00:00",
                        "2024-02-20T00:00:00", "2024-02-21T00:00:00", "2024-02-22T00:00:00",
                        "2024-02-23T00:00:00", "2024-02-24T00:00:00", "2024-02-27T00:00:00",
                        "2024-02-28T00:00:00", "2024-02-29T00:00:00"
                    ]
                },
                colors: ['#00A3E0'], 
                // replace with your color variable or preferred color
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0,
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + " engagements";
                        }
                    }
                }
            };
    
            var chart = new ApexCharts(document.querySelector("#analytics-tab-6"), options);
            chart.render();
        }
    }
    
   
    function session_by_channel() {
        var options = {
            series: [742, 1742, 442, 1242],
            chart: {
                width: "100%",
                type: 'pie',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                colors: ['transparent']
            },
            colors: [colors.info, colors.success, colors.warning, colors.danger],
            labels: ['Email', 'Social Media', 'Referral', 'Organic Search'],
            legend: {
                show: false
            }
        };

        var chart = new ApexCharts(document.querySelector("#session_by_channel"), options);
        chart.render();
    }

    online_users();

    analytics_tab1();

    analytics_tab2();

    analytics_tab3();

    analytics_tab4();

    analytics_tab5();

    analytics_tab6();

    device_session_chart();

    session_by_channel();
});
