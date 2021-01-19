import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RenderHome from '../components/RenderHome'
import './HomeSearch.css'
import styled from 'styled-components'

function SearchBar() {
    const [items, setItems] = useState([])
    const [value, setValue] = useState()
    const [results, setResults] = useState([])

    const fetchCoins = async() => {
        let coinList = []
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        data.data.map(coin => {
            coinList.push(coin.name)
        })
        setItems(coinList)
    }
    useEffect(() => {
        fetchCoins()
    }, []) // on mount

    const onChange = (e) => {
        const value = e.target.value
        setValue(value)
        let results = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            results = items.sort().filter(v => regex.test(v))
        }
        setResults(results)
    }

    return (
        <>
        <Hero>
            <form>
                <Input
                type="text"
                className="search"
                placeholder="Search"
                onChange={onChange}
                value={value}
                />
            </form>
        </Hero>                
        <Render>        
            <RenderHome 
                query={results}
            />
        </Render>
        </>
    )
}

const Hero = styled.div`
    max-width: 1400px;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
`;
const Render = styled.div`
    max-width: 1400px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
`;
const Input = styled.input`
    border-radius: 45px;
    border: none;
    outline: none;
    height: 2rem;
    width: 15rem;
    padding: 0.15rem 1rem;
    margin-top: 50%;
    transition: all 0.2s ease-in;

    &:hover {
        box-shadow: 0px 17px 16px -11px rgba(47, 76, 120, 1);
        transform: translateY(3px);
    }
`;

export default SearchBar
