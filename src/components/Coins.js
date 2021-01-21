import React from 'react'
import Proptypes from 'prop-types'
import './Coins.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Coins({ id, image, symbol, name, rank, price, change24h, cap, high, low, ath, updated }) { 
    return (
                    
                    <Card className="card fade"> 
                        <Image className="fade">
                            <img src={image} />
                        </Image>
                        <CardText className="fade">
                                <h1 className='rank'>#{rank}</h1>
                                <h1 className='symbol'>{symbol.toUpperCase()}</h1>
                                <h1 className='name'>{name}</h1>
                            <ul class="list-group list-group-flush">
                                <li className='list-group-item'>
                                    <p>Current Price</p>
                                    <h2>$ {price.toFixed(2)}</h2>
                                </li>
                                <li className='list-group-item'>
                                    <p>24h Change</p>
                                    <h2>{parseFloat(change24h).toFixed(2)}%</h2>
                                </li>
                                <li className='list-group-item'>
                                    <p>Marketcap Total</p>
                                    <h2>$ {(cap/1000000000).toFixed(2)}B</h2>
                                </li>
                            </ul>
                            <Link 
                                to={{
                                    pathname: `/:${name}`,
                                    state: {
                                        id,
                                        image, 
                                        symbol, 
                                        name, 
                                        rank, 
                                        price, 
                                        change24h, 
                                        cap, 
                                        high, 
                                        low, 
                                        ath, 
                                        updated 
                                    }
                                }}
                            >    
                            <button className="fade">More info</button>    
                            </Link>
                        </CardText>
                    </Card> 
        );
};

Coins.propTypes = {
    id: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
    symbol: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    market_cap_rank: Proptypes.number.isRequired,
    current_price: Proptypes.number.isRequired,
    price_change_percentage_24h: Proptypes.number.isRequired,
    market_cap: Proptypes.number.isRequired
};

export default Coins

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 20rem;
    height: 100%;
    overflow: auto;
    margin: 2rem 2rem;
    transition: all 0.2s ease-in;
    background: linear-gradient(146.81deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(5px);
    border-radius: 30px;
    border: 2px solid rgba(255, 255, 255, 0.4);
`;
const Image = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5em;
    width: 100%;

    img {
        transition: all 0.2s ease-in;
        position: relative;
        padding: 0;
        height: 50px;
        width: 50px;
        border-radius: 45px;

        &:hover {
            box-shadow: 0px 17px 16px -11px rgba(47, 76, 120, 1);
            transform: translateY(3px);
        }
    }
`
const CardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1em;
    .rank {
        font-size: 1.5em;
        font-weight: 400;
        padding: 0.1rem;
    }
    .symbol {
        font-size: 1.75em;
        font-weight: 600;
        padding: 0.1rem;
    }
    .name {
        font-size: 2em;
        font-weight: 700;
        padding: 0.1rem;
    }
    ul {
        list-style-type: none;
        text-align: center;
        padding: 1rem;
    }
    li {
        padding: 0.1rem;
    }
    p {
        font-size: 0.85em;
        font-weight: 400;
        color: white;
        padding: 0.1rem;
    }
    h2 {
        font-weight: 600;
    }
    button {
        border-radius: 45px;
        border: none;
        outline: none;
        height: 2rem;
        width: 7rem;
        padding: 0.1rem;
        color: white;
        background: linear-gradient(146.81deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 100%);
        backdrop-filter: blur(5px);
        border-radius: 30px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        transition: all 0.2s ease-in;

        &:hover {
            box-shadow: 0px 17px 16px -11px rgba(47, 76, 120, 1);
            transform: translateY(1px);
        }
    }
`