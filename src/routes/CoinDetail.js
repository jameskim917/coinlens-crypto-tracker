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
                return '$' + (value/1000) + 'k'
                },
            },
            },
        ],
    }
}
const CoinDetail = ({location, history, id}) => {
    const [state] = useState(location.state)
    console.log(id)
    const [data, setData] = useState({})
    const fetchData = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${state.id}/market_chart?vs_currency=usd&days=180`)
            .then ( response => {
                let chartData = []
                for ( let dataObj of response.data.prices ) {
                    let newChartData = {
                        x: dataObj[0],
                        y: parseFloat(dataObj[1]).toFixed(2)
                    }
                    chartData.push(newChartData)
                }
                setData(chartData)
            });
    }
    useEffect(fetchData, [])
        return (
                <div className='card text-center'>
                    <img src={location.state.image} className='detail-img card-img-top mx-auto mt-3 mb-1'/>
                    <div className="card-body">     
                        <h1 className='card-title'>{location.state.symbol.toUpperCase()}</h1>
                        <h1 className='card-title'>{location.state.name}</h1>
                        <h4>#{location.state.rank}</h4>
                        <ul className="list-group list-group-flush">
                            <li className='list-group-item'>
                                <small>Current Price</small>
                                <h5>$ {location.state.price.toFixed(2)}</h5>
                            </li>
                            <li className='list-group-item'>
                                <small>24h</small>
                                <h5>{parseFloat(location.state.change24h).toFixed(2)}%</h5>
                            </li>
                            <li className='list-group-item'>
                                <small>Marketcap Total</small>
                                <h5>$ {(location.state.cap/1000000000).toFixed(2)}B</h5>
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
