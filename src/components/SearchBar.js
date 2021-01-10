import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Home from '../routes/Home'
import './Searchbar.css'

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
        <section className='container'>
            <div>
                <h1 className="text-center mt-5">Coinlens</h1>
            </div>
            <div className='mx-auto mt-5 w-75'>
                <form className="form-inline">
                    <input 
                        className="form-control mx-sm-2"
                        type="search" 
                        placeholder="Search"
                        onChange={onChange}
                        value={value}
                    />
                <Home 
                    query={results}
                />
                </form>
            </div>
        </section>
    )
}

export default SearchBar
