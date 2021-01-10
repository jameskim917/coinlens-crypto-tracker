import React from 'react'
import Proptypes from 'prop-types'
import './Coins.css'
import { Link } from 'react-router-dom'

function Coins({ id, image, symbol, name, rank, price, change24h, cap, high, low, ath, updated }) { 
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <img src={image} className='coins-img'/>
            <div className='card w-100 mx-auto'>
                <div className="card-body text-center"> 
                    <h1 className='coin'>{symbol.toUpperCase()}</h1>
                    <h1 className='coin'>{name}</h1>
                    <h4 className='coin'>#{rank}</h4>
                    <ul class="list-group list-group-flush">
                        <li className='list-group-item'>
                            <small>Current Price</small>
                            <h5>$ {price.toFixed(2)}</h5>
                        </li>
                        <li className='list-group-item'>
                            <small>24h</small>
                            <h5>{parseFloat(change24h).toFixed(2)}%</h5>
                        </li>
                        <li className='list-group-item'>
                            <small>Marketcap Total</small>
                            <h5>$ {(cap/1000000000).toFixed(2)}B</h5>
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
                    <button className="btn btn-primary">More info</button>    
                    </Link>
                </div> 
            </div> 
        </div>
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