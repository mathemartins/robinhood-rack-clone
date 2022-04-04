import React from 'react';
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto'


const randomNumber = function(){
    let data = []
    for (let i = 0; i < 9; i++) {
        let randomNum = Math.floor(Math.random() * 100)
        data = [...data, randomNum]
    }
    return data;
}

const data = {
    labels: [
        'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan',
    ],
    datasets: [
        {
            fill: false,
            lineTension: 0.01,
            backgroundColor: '#00ff1a',
            borderColor: '#00ff1a',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#00ff1a',
            pointBackgroundColor: '#00ff1a',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#00ff1a',
            pointHoverBorderColor: '#00ff1a',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: randomNumber()
        }
    ]
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}


export default function PortfolioChart() {
    return (
        <div></div>
    )
}