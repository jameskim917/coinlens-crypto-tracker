import React, { useState, useEffect } from 'react'
//import SearchPage from './Components/SearchPage.js';
import axios from 'axios'
import Coins from './Coins.js';
import styled from 'styled-components'
import { PointSpreadLoading } from 'react-loadingg';

const RenderHome = ({ query }) => {
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
            <Container>
                <Loading>
                    <PointSpreadLoading
                        color="white"
                        size="small"
                    />
                </Loading>
            </Container>
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
            <Container className='col'>
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
            </Container>
            )
        } else {
            return(
            <Container className='col'>
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
            </Container>
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

export default RenderHome;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1440px;
    margin: auto;
`;
const Loading = styled.div`
    margin-top: 15em;
`