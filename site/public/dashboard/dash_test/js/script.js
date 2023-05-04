const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");
const img = document.querySelector("#Logo");
const sidebar = body.querySelector("nav");
const sidebarToggle = body.querySelector(".sidebar-toggle");

// Modo dark
modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        if (sidebar.classList.contains("close")) {
            img.src = 'assets/easy-ware-logotipo-close.png'
        } else {
            img.src = 'assets/easy-ware-logotipo-light.png'
        }
    } else {
        localStorage.setItem("mode", "light");
        if (sidebar.classList.contains("close")) {
            img.src = 'assets/easy-ware-logotipo-close-dark.png'
        } else {
            img.src = 'assets/easy-ware-logotipo-dark.png'
        }
    }
});

// Fechar e abrir navbar
sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
        if (body.classList.contains("dark")) {
            img.src = 'assets/easy-ware-logotipo-close.png'
        } else {
            img.src = 'assets/easy-ware-logotipo-close-dark.png'
        }
    } else {
        localStorage.setItem("status", "open");
        if (body.classList.contains("dark")) {
            img.src = 'assets/easy-ware-logotipo-light.png'
        } else {
            img.src = 'assets/easy-ware-logotipo-dark.png'
        }
    }
})

// KPI da CPU
function getChartColor(value) {
    if (value >= 80) {
        return "#de1a1a"; // vermelho
    } else if (value >= 50) {
        return "#f8f32b"; // laranja
    } else {
        return "#1175d1"; // verde (cor original)
    }
}

var options = {
    chart: {
        offsetY: 0,
        offsetX: 0,
        height: 160,
        type: "radialBar",
    },
    series: [50],
    colors: [getChartColor(50)],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "60%",
            },
            track: {
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    blur: 4,
                    opacity: 0.15
                }
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 8,
                    color: "#f1f1f1",
                    fontSize: "20px",
                    show: true,
                    fontFamily: "Montserrat"
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Progress"]
};

new ApexCharts(document.querySelector("#kpi_chart_cpu"), options).render();

const barraDeTemperatura = document.getElementById("barra-de-temperatura-cpu");
let valorAtual1 = 0;

setInterval(() => {
    valorAtual1 += 10;
    barraDeTemperatura.value = valorAtual1;

    if (valorAtual1 === 100) {
        clearInterval(intervalId);
    }
}, 1000);

const barraDeClock = document.getElementById("barra-de-clock-cpu");
let valorAtual2 = 0;

setInterval(() => {
    valorAtual2 += 10;
    barraDeClock.value = valorAtual2;

    if (valorAtual2 === 100) {
        clearInterval(intervalId);
    }
}, 1000);

// KPI da RAM
var options3 = {
    chart: {
        offsetY: 0,
        offsetX: 0,
        height: 160,
        type: "radialBar",
    },
    series: [10],
    colors: [getChartColor(10)],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "60%",
            },
            track: {
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    blur: 4,
                    opacity: 0.15
                }
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 8,
                    color: "#f1f1f1",
                    fontSize: "20px",
                    show: true,
                    fontFamily: "Montserrat"
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Progress"]
};

new ApexCharts(document.querySelector("#kpi_chart_ram"), options3).render();

// KPI do disco
var options4 = {
    chart: {
        offsetY: 0,
        offsetX: 0,
        height: 160,
        type: "radialBar",
    },
    series: [10],
    colors: [getChartColor(10)],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "60%",
            },
            track: {
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    blur: 4,
                    opacity: 0.15
                }
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: 8,
                    color: "#f1f1f1",
                    fontSize: "20px",
                    show: true,
                    fontFamily: "Montserrat"
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Progress"]
};

new ApexCharts(document.querySelector("#kpi_chart_disco"), options4).render();

//Gráfico CPU
var options4 = {
    chart: {
        height: 200,
        width: "100%",
        type: "area",
        animations: {
            initialAnimation: {
                enabled: false
            }
        }
    },
    series: [
        {
            name: "Series 1",
            data: [
                [1486684800000, 34],
                [1486771200000, 43],
                [1486857600000, 31],
                [1486944000000, 43],
                [1487030400000, 33],
                [1487116800000, 52]
            ]
        }
    ],
    xaxis: {
        type: 'datetime'
    }
};

var chart = new ApexCharts(document.querySelector("#chart_cpu"), options4);

chart.render();