import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import About from "./routes/About";
import CoinDetail from "./routes/CoinDetail";
import Navigation from "./components/Navigation";
import HomeSearch from './routes/HomeSearch';
import './App.css'
import styled from "styled-components"

function App() {
    return (
        <>
            <BrowserRouter>
                
                <Navigation/>
                <Route path='/' exact={true} component={HomeSearch} />    
                <Route path='/about' component={About} />
                <Route path='/:name' component={CoinDetail} />
            </BrowserRouter>
        </>
    )
}

export default App
