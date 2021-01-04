import React from 'react'
//import MarketChart from '../components/Chart'
import axios from 'axios'
import { Line } from 'react-chartjs-2';

let chartData = {
    labels: [],
    datasets: [
        {
            label: 'Price',
            data: [],
            backgroundColor: 'rgba(21, 61, 239, 0.78)',
            borderColor: 'rgba(21, 61, 239, 1)',
            pointRadius: 0
        }
    ]
}
let options = {
    legend: {
        display: false
    },
    tooltips: {
        mode: "index",
        intersect: false,
        backgroundColor: 'grey'
    },
    scales: {
        xAxes: [
            {
            type: "time",
            time: {
                parser: "MM/DD/YY",
                tooltipFormat: "ll",
                displayFormats: {
                    month: "MMM-YY"
                }
            },
            },
        ],
        yAxes: [
            {
            gridLines: {
                display: false,
            },
            ticks: {
                beginAtZero: true,
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                return '$' + value
                },
            },
            },
        ],
    }
}

class CoinDetail extends React.Component {
    
    componentDidMount() {
        const { location } = this.props
        const fetchData = async () => {
            await axios.get(`https://api.coingecko.com/api/v3/coins/${location.state.id}/market_chart?vs_currency=usd&days=180`)
                .then ( response => {
                    for ( let dataObj of response.data.prices ) {
                        chartData.datasets[0].data.push(parseFloat(dataObj[1]));
                        chartData.labels.push(dataObj[0])
                    }
                });
        }
        fetchData();

    }
    render() {
        const { location } = this.props
        return (
            <div>
                <h1>{location.state.name}</h1>
                <h1>{location.state.symbol}</h1>
                <h1>{location.state.high}</h1>
                <h1>{location.state.low}</h1>
                <h1>Last updated: {location.state.updated.slice(0,10)} {location.state.updated.slice(11,19)}</h1>
                {console.log(chartData)}
                <Line 
                    data={ chartData }
                    options={ options }
                />
            </div>
        )
    }
}

export default CoinDetail
