import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RenderHome from '../components/RenderHome'
import './HomeSearch.css'
import styled from "styled-components"
import Background from '../components/Background'
import { Container, Col, Jumbotron, Row, FormControl } from 'react-bootstrap'

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
        <Container style={{padding: 0}}>
            
                <Row className="m-0">
                <Col style={{padding: 0}}>
                    <Background/>
                <Jumbotron style={{height: "150px"}}>
                    
                        <FormControl
                            className="form-control mx-auto mt-5 w-75"
                            placeholder="Search"
                            onChange={onChange}
                            value={value}
                        />
                        
                </Jumbotron>
                </Col>
            </Row>
        </Container>
        <Container>
            <RenderHome 
                query={results}
            />
        </Container>
        
        </>
    )
}


export default SearchBar
