import React from 'react'
//import SearchPage from './Components/SearchPage.js';
import axios from 'axios'
import Coins from '../components/Coins.js';

class Home extends React.Component {
    state = {
        isLoading: true,
        coins: []
    };
    getCoins = async () => {
        const {data: coins} = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        this.setState({ coins, isLoading: false })
    }
    componentDidMount() {
        this.getCoins();    
    }
    render() {
        const { isLoading, coins } = this.state;
        return (
            <section className='container'>
            {isLoading ? (
                <div className='loader'>
                    <span className='loader__text'>'Loading...'</span>
                </div>
            ) : (
                <div className='row'>
                    {coins.map(coin => (
                        <Coins 
                            id = {coin.id}
                            image = {coin.image} 
                            symbol = {coin.symbol}
                            name = {coin.name}
                            rank = {coin.market_cap_rank}
                            price = {coin.current_price}
                            change24h = {coin.price_change_percentage_24h}
                            cap = {coin.market_cap}
                            high = {coin.high_24h}
                            low = {coin.low_24h}
                            ath = {coin.ath}
                            updated = {coin.last_updated}
                        />
                    ))}    
                </div>
                )}
            </section>
        );
    }
}

export default Home;