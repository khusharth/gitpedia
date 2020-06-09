import React from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import LanguageContext from "../contexts/LanguageContext";

// Different Colors used in Charts
const bgColor = [
    "rgb(123, 13, 255)",
    "rgb(171, 36, 247)",
    "rgba(155, 110, 243, 1)",
    "rgb(198, 128, 250)",
    "rgb(117, 221, 221)",
    "rgb(36, 196, 207)",
    "rgba(0, 146, 203, 1)",
    "rgba(104, 106, 253, 1)",
    "rgba(155, 110, 243, 1)",
    "rgba(209,188,249,1)",
];

export const DoughnutChart = () => {
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
                            },
                        }}
                    />
                );
            }}
        </LanguageContext.Consumer>
    );
};

export const PieChart = ({ starData }) => {
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
                    },
                }}
            />
        </>
    );
};


export const BarChart = ({ sizeData }) => {
    const data = {
        labels: [],
        datasets: [
            {
                label: "a",
                data: [],
                backgroundColor: bgColor,
            },
        ],
    };
    data.labels = sizeData.label;
    data.datasets[0].data = sizeData.data;

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
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    fontFamily: "'Roboto', sans-serif",
                                    fontSize: 12,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    fontFamily: "'Roboto', sans-serif",
                                    fontSize: 12,
                                },
                            },
                        ],
                    }
                }}

            />
        </>
    );
};