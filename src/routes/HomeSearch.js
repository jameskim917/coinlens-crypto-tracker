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
                className="fade"
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
    border-radius: 30px;
    outline: none;
    height: 2em;
    width: 15em;
    padding: 0.15em 1em;
    margin-top: 10em;
    margin-bottom: 1em;
    color: white;
    background: linear-gradient(146.81deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.32) 100%);
    border: 2px solid rgba(255, 255, 255, 0.4);
    transition: all 0.2s ease-in;

    ::placeholder {
        color: white;
    }
    &:hover {
        box-shadow: 0px 17px 16px -11px rgba(47, 76, 120, 1);
        transform: translateY(3px);
    }

    @media (max-width: 768px) {
        margin-top: 7em;
    }
`;

export default SearchBar
