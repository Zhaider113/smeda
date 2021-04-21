"use strict";
$(document).ready(function(){
    /*Doughnut chart*/
    var ctx = document.getElementById("myChart");
    var data = {
        labels: [
            "A", "B", "C", "D "
        ],
        datasets: [{
            data: [40, 10, 40, 10],
            backgroundColor: [
                "#1ABC9C",
                "#FCC9BA",
                "#B8EDF0",
                "#B4C1D7"
            ],
            borderWidth: [
                "0px",
                "0px",
                "0px",
                "0px"
            ],
            borderColor: [
                "#1ABC9C",
                "#FCC9BA",
                "#B8EDF0",
                "#B4C1D7"

            ]
        }]
    };

    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data
    });


    /*Bar chart*/
    var data1 = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(95, 190, 170, 0.99)',
                'rgba(95, 190, 170, 0.99)',
                'rgba(95, 190, 170, 0.99)',
                'rgba(95, 190, 170, 0.99)',
                'rgba(95, 190, 170, 0.99)',
                'rgba(95, 190, 170, 0.99)',
                'rgba(95, 190, 170, 0.99)'
            ],
            hoverBackgroundColor: [
                'rgba(26, 188, 156, 0.88)',
                'rgba(26, 188, 156, 0.88)',
                'rgba(26, 188, 156, 0.88)',
                'rgba(26, 188, 156, 0.88)',
                'rgba(26, 188, 156, 0.88)',
                'rgba(26, 188, 156, 0.88)',
                'rgba(26, 188, 156, 0.88)'
            ],
            data: [65, 59, 80, 81, 56, 55, 50],
        }, {
            label: "My second dataset",
            backgroundColor: [
                'rgba(93, 156, 236, 0.93)',
                'rgba(93, 156, 236, 0.93)',
                'rgba(93, 156, 236, 0.93)',
                'rgba(93, 156, 236, 0.93)',
                'rgba(93, 156, 236, 0.93)',
                'rgba(93, 156, 236, 0.93)',
                'rgba(93, 156, 236, 0.93)'
            ],
            hoverBackgroundColor: [
                'rgba(103, 162, 237, 0.82)',
                'rgba(103, 162, 237, 0.82)',
                'rgba(103, 162, 237, 0.82)',
                'rgba(103, 162, 237, 0.82)',
                'rgba(103, 162, 237, 0.82)',
                'rgba(103, 162, 237, 0.82)',
                'rgba(103, 162, 237, 0.82)'
            ],
            data: [60, 69, 85, 91, 58, 50, 45],
        }]
    };

    var bar = document.getElementById("barChart").getContext('2d');
    var myBarChart = new Chart(bar, {
        type: 'bar',
        data: data1,
        options: {
            barValueSpacing: 20
        }
    });

    // line chart
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
          datasets: [{ 
              data: [86,114,106,106,107,111,133,221,783,2478],
              label: "Africa",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: [282,350,411,502,635,809,947,1402,3700,5267],
              label: "Asia",
              borderColor: "#8e5ea2",
              fill: false
            }, { 
              data: [168,170,178,190,203,276,408,547,675,734],
              label: "Europe",
              borderColor: "#3cba9f",
              fill: false
            }, { 
              data: [40,20,10,16,24,38,74,167,508,784],
              label: "Latin America",
              borderColor: "#e8c3b9",
              fill: false
            }, { 
              data: [6,3,2,2,7,26,82,172,312,433],
              label: "North America",
              borderColor: "#c45850",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'World population per region (in millions)'
          }
        }
      });

    /* Polar chart */
    new Chart(document.getElementById("polar-chart"), {
        type: 'polarArea',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2478,5267,734,784,433]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });

    /*Radar chart*/
    var radarElem = document.getElementById("radarChart");

    var data2 = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: "rgba(100, 221, 187, 0.52)",
            borderColor: "rgba(72, 206, 168, 0.88)",
            pointBackgroundColor: "rgba(51, 175, 140, 0.88)",
            pointBorderColor: "rgba(44, 130, 105, 0.88)",
            pointHoverBackgroundColor: "rgba(44, 130, 105, 0.88)",
            pointHoverBorderColor: "rgba(107, 226, 193, 0.98)",
            data: [65, 59, 90, 81, 56, 55, 40]
        }, {
            label: "My Second dataset",
            backgroundColor: "rgba(255, 204, 189, 0.95)",
            borderColor: "rgba(255, 165, 138, 0.95)",
            pointBackgroundColor: "rgba(255, 116, 22, 0.94)",
            pointBorderColor: "rgba(251, 142, 109, 0.95)",
            pointHoverBackgroundColor: "rgba(251, 142, 109, 0.95)",
            pointHoverBorderColor: "rgba(255, 165, 138, 0.95)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }]
    };
    var myRadarChart = new Chart(radarElem, {
        type: 'radar',
        data: data2,
        options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

    /*Polar chart*/
    var polarElem = document.getElementById("polarChart");

    var data3 = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#7E81CB",
                "#1ABC9C",
                "#B8EDF0",
                "#B4C1D7",
                "#01C0C8"
            ],
            hoverBackgroundColor: [
                "#a1a4ec",
                "#2adab7",
                "#a7e7ea",
                "#a5b0c3",
                "#10e6ef"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Blue",
            "Green",
            "Light Blue",
            "grey",
            "Sea Green"
        ]
    };

    new Chart(polarElem, {
        data: data3,
        type: 'polarArea',
        options: {
            elements: {
                arc: {
                    borderColor: ""
                }
            }
        }
    });

    /*Pie chart*/
    var pieElem = document.getElementById("pieChart");
    var data4 = {
        labels: [
            "Blue",
            "Orange",
            "Sea Green"
        ],
        datasets: [{
            data: [30, 30, 40],
            backgroundColor: [
                "#25A6F7",
                "#FB9A7D",
                "#01C0C8"
            ],
            hoverBackgroundColor: [
                "#6cc4fb",
                "#ffb59f",
                "#0dedf7"
            ]
        }]
    };

    var myPieChart = new Chart(pieElem, {
        type: 'pie',
        data: data4
    });

    //bubble chart
    var bubblechart = document.getElementById("bubblechart");
    var data = {
        datasets: [{
            label: 'First Dataset',
            data: [{
                x: 20,
                y: 15,
                r: 15
            }, {
                x: 10,
                y: 15,
                r: 10
            }, {
                x: 25,
                y: 11,
                r: 8
            }, {
                x: 15,
                y: 13,
                r: 8
            }, {
                x: 35,
                y: 18,
                r: 6
            }, {
                x: 40,
                y: 10,
                r: 10
            }],
            backgroundColor: "#FF6384",
            hoverBackgroundColor: "#FF6384"
        }]
    };
    var myBubbleChart = new Chart(bubblechart, {
        type: 'bubble',
        data: data,
        options: {
            elements: {
                points: {
                    borderWidth: 1,
                    borderColor: 'rgb(0, 0, 0)'
                }
            }
        }
    });

    //Scales chart
    var stancechart = document.getElementById("stancechart");
    var chartInstance = new Chart(stancechart, {
        type: 'line',
        data: data,
        options: {
            scales: {
                xAxes: [{
                    type: 'logarithmic',
                    position: 'bottom',
                    ticks: {
                        min: 1,
                        max: 1000
                    }
                }]
            }
        }
    });
    //Time Scale
    var timescalechart = document.getElementById("timescalechart");
    var chartInstance1 = new Chart(timescalechart, {
        type: 'line',
        data: data,
        options: {
            scales: {
                yAxes: [{
                    time: {
                        unit: 'day'
                    }
                }]
            }
        }
    })

});
