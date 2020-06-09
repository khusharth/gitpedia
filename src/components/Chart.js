import React, { useContext } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { ThemeContext } from "styled-components";
import LanguageContext from "../contexts/LanguageContext";

// Different Colors used in Charts
const bgColor = [
    "rgba(123, 13, 255, 0.7)",
    "rgba(171, 36, 247, 0.7)",
    "rgba(155, 110, 243, 0.4)",
    "rgba(198, 128, 250, 0.6)",
    "rgba(117, 221, 221, 0.8)",
    "rgba(36, 196, 207, 0.8)",
    "rgba(0, 146, 203, 0.8)",
    "rgba(104, 106, 253, 1)",
    "rgba(155, 110, 243, 1)",
    "rgba(209,188,249,1)",
];


export const DoughnutChart = () => {
    const themeContext = useContext(ThemeContext);

    const data = {
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                backgroundColor: bgColor,
                borderWidth: 0,
            },
        ],
    };

    return (
        <LanguageContext.Consumer>
            {(context) => {
                const LIMIT = 10;
                let labels = context.map((obj) => obj.label);

                // If more than LIMIT languages then reduce it to the limit
                if (labels.length >= LIMIT) {
                    labels = labels.slice(0, LIMIT);
                }
                const value = context.map((obj) => obj.value).slice(0, LIMIT);
                data.labels = labels;
                data.datasets[0].data = value;

                return (
                    <Doughnut
                        data={data}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            title: {
                                display: false,
                            },
                            legend: {
                                // display: false,
                                position: "bottom",
                                labels: {
                                    fontColor: themeContext.textColor,
                                }
                            },
                        }}
                    />
                );
            }}
        </LanguageContext.Consumer>
    );
};

export const PieChart = ({ starData }) => {
    const themeContext = useContext(ThemeContext);

    let data = {};

    if (starData.data) {

        // Only display chart if there is at least 1 star available
        let sum = starData.data.reduce((a, b) => a + b, 0);
        if (sum > 0) {
            data = {
                labels: starData.label,
                datasets: [
                    {
                        label: "",
                        data: starData.data,
                        backgroundColor: bgColor,
                        borderWidth: 0,
                    },
                ],
            };
        }
    }

    return (
        <>
            <Pie
                data={data}
                // height={300}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    aspectRatio: 1,
                    title: {
                        display: false,
                    },
                    legend: {
                        // display: false,
                        position: "bottom",
                        labels: {
                            fontColor: themeContext.textColor,
                        }
                    },
                }}
            />
        </>
    );
};


export const BarChart = ({ sizeData }) => {
    const themeContext = useContext(ThemeContext);

    const data = {
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                backgroundColor: bgColor,
            },
        ],
    };
    data.labels = sizeData.label;
    data.datasets[0].data = sizeData.data;

    const scales = {
        xAxes: [
            {
                ticks: {
                    fontColor: themeContext.textColor,
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12,
                },
            },
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: themeContext.textColor,
                    beginAtZero: true,
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 12,
                },
            },
        ],
    };

    return (
        <>
            <Bar
                data={data}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: false,
                        text: "Biggest Repos in Size (kb)",
                        fontSize: 25,
                    },
                    legend: {
                        display: false,
                        position: "right",
                    },
                    scales: scales
                }}

            />
        </>
    );
};