import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import About from "./routes/About";
import CoinDetail from "./routes/CoinDetail";
import Navigation from "./components/Navigation";
import HomeSearch from './routes/HomeSearch';
import './App.css'
import styled from "styled-components"
import bg from './assets/bg.jpg'

function App() {
    return (
        <Container>
            <Wrapper>
                <Navigation/>
            <BrowserRouter>
                
                <Route path='/' exact={true} component={HomeSearch} />    
                <Route path='/about' component={About} />
                <Route path='/:name' component={CoinDetail} />
            </BrowserRouter>
            </Wrapper>
        </Container>
    )
}

export default App

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #98A9C4 4.93%, #677EA0 10.59%, #2F4C78 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(15px);
    background-color: rgba(136, 159, 194, 0.5);
  }
`;
