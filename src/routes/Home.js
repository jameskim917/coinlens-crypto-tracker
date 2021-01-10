import React, { useState, useEffect } from 'react'
//import SearchPage from './Components/SearchPage.js';
import axios from 'axios'
import Coins from '../components/Coins.js';
import SearchBar from '../components/Searchbar'

const Home = ({ query }) => {
    console.log(query)
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true) 
    const getCoins = async () => {
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        setCoins(data)
        setIsLoading(false)
    }
    console.log(coins)
    useEffect(() => {
        getCoins()
    }, []) // on mount 
    const renderElement = () => {
        if(isLoading === true) {
            return(
            <div className='loader'>
                <span className='loader__text'>'Loading...'</span>
            </div>
            )
        } else if (query.length > 0){
            let queryCoins = []
            let coinsData = coins.data
            coinsData.map(coin => {
                query.map(q => {
                    if (coin.name === q) {
                        queryCoins.push(coin)
                    }
                })
            })
            return(
            <div className='row'>
                {queryCoins.map(coin => (
                    <Coins 
                        id = {coin.id}
                        image = {coin.image} 
                        symbol = {coin.symbol}
                        name = {coin.name}
                        rank = {coin.market_cap_rank}
                        price = {coin.current_price}
                        change24h = {coin.price_change_percentage_24h}
                        cap = {coin.market_cap}
                        updated = {coin.last_updated}
                    />
                ))}    
            </div>
            )
        } else {
            return(
            <div className='row'>
                {coins.data.map(coin => (
                    <Coins 
                        id = {coin.id}
                        image = {coin.image} 
                        symbol = {coin.symbol}
                        name = {coin.name}
                        rank = {coin.market_cap_rank}
                        price = {coin.current_price}
                        change24h = {coin.price_change_percentage_24h}
                        cap = {coin.market_cap}
                        updated = {coin.last_updated}
                    />
                ))}    
            </div>
            )
        }
    }
    useEffect(()=> {
        renderElement()
    }, [query])
    return (
            <>{renderElement()}</>
    );
}

export default Home;