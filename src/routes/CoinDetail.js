import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';

const options = {
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
const CoinDetail = ({location}) => {
    const [coinId] = useState(location.state.id)
    const [data, setData] = useState({})
    const fetchData = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=180`)
            .then ( response => {
                let chartData = []
                for ( let dataObj of response.data.prices ) {
                    let newChartData = {
                        x: dataObj[0],
                        y: parseFloat(dataObj[1])
                    }
                    chartData.push(newChartData)
                }
                setData(chartData)
            });
    }
    useEffect(fetchData)
        return (
                <div className='card w-100 mx-auto'>
                    <img src={location.state.image} class='card-img-top mx-auto mb-auto' />
                    <div className="card-body text-center mt-auto">     
                        <h1 className='coin'>{location.state.symbol.toUpperCase()}</h1>
                        <h1 className='coin'>{location.state.name}</h1>
                        <h4 className='coin'>#{location.state.rank}</h4>
                        <ul class="list-group list-group-flush">
                            <li className='list-group-item'>
                                <small>Current Price</small>
                                <h5>$ {location.state.price}</h5>
                            </li>
                            <li className='list-group-item'>
                                <small>24h</small>
                                <h5>{location.state.change24h}%</h5>
                            </li>
                            <li className='list-group-item'>
                                <small>Marketcap Total</small>
                                <h5>$ {location.state.cap/1000000000}B</h5>
                            </li>
                        </ul>
                        {data?.length > 0 && (
                            <Line 
                                data={{ 
                                    datasets: [
                                        {
                                            label: 'Price',
                                            backgroundColor: 'rgba(21, 61, 239, 0.78)',
                                            borderColor: 'rgba(21, 61, 239, 1)',
                                            pointRadius: 0,
                                            data: data
                                        }
                                    ] 
                                }}
                                options={ options }
                            />
                        )}
                        <small>Last updated: {location.state.updated.slice(0,10)} {location.state.updated.slice(11,19)}</small>
                    </div>
                </div>
        )
}

export default CoinDetail
