import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import About from "./routes/About";
import CoinDetail from "./routes/CoinDetail";
import Navigation from "./components/Navigation";
import HomeSearch from './routes/HomeSearch';
import './App.css'
import styled, { keyframes } from "styled-components"
import WaveA from "./assets/WaveA.svg"
import WaveB from "./assets/WaveB.svg"
import WaveC from "./assets/WaveC.svg"
import WaveD from "./assets/WaveD.svg"

function App() {
    return (
        <Container>
            <Wrapper>
                <Wave2
                src={WaveD}
                style={{ top: "24em" }}
                />
                <Wave1
                src={WaveA}
                style={{ top: "20.625em" }}
                />
                <Wave2
                src={WaveB}
                style={{ top: "15.125em" }}
                />
                <Wave2
                src={WaveC}
                style={{ top: "20.625em" }}
                />
                <Navigation className="fade"/>
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
    display: flex;
    justify-content: center;
    align-items: center;
`;

const fade = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const Wrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
  /* margin: 2rem; */
`;

const Wave1 = styled.img`
    position: fixed;
    width: 100%;
    z-index: 0;
    animation: ${fade} 1s ease-in;
    
`;
const Wave2 = styled.img`
    position: fixed;
    width: 100%;
    z-index: 0;
    animation: ${fade} 1s ease-in;
    
`;

