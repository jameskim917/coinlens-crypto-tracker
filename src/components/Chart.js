import React from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';

const chartData = {
    labels: ['a', 'b'],
    datasets: [
        {
            label: 'Title',
            data: [8,9]
        }
    ]
}

class MarketChart extends React.Component {
    componentDidMount() {
        console.log(this.props.id)
        const fetchData = async () => {
            await axios.get(`https://api.coingecko.com/api/v3/coins/${this.props.id}/market_chart?vs_currency=usd&days=180`)
                .then ( response => {
                    for ( let dataObj of response.data ) {
                        chartData.datasets.data.push(dataObj.prices[1]);
                    }
                });
        }
        fetchData();
    }
    render() {
        return( 
            <div className='container'>
                <Line 
                    data={ chartData }
                    width={300}
                    height={300}
                    options={{

                    }}
                /> 
            </div>
        )    
    };
};

export default MarketChart
