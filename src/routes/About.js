import React from 'react'
import styled from 'styled-components'
import github from '../assets/icons8-github.svg';

function About() {
    return (
        <Container>
            <Card className="fade">
                <Header className="fade">
                    <h1 className='name'>About</h1>
                </Header>
                <CardBody className="fade"> 
                    <p className='card-text'>Coinlens is a cryptocurrency tracker app that displays the 
                    top-100 coins and their statistics.</p>
                    <p className='card-text'>It's built with the React Javascript library and data from the CoinGecko API.</p>
                    <p className='card-text'>See more at the project's Github repository:</p>
                    <a href="https://github.com/eskimojamz/Coinlens"><img src={github}/></a>
                </CardBody>
            </Card>   
        </Container>
    )
}

export default About

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1440px;
    margin: auto;
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    min-width: 0;
    width: 65vw;
    margin: 8em 0em;
    transition: all 0.2s ease-in;
    background: linear-gradient(146.81deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.16) 100%);
    backdrop-filter: blur(5px);
    border-radius: 30px;
    border: 2px solid rgba(255, 255, 255, 0.4);

    @media (max-width: 768px) {
        width: 90vw;
        margin: 6em 0em;
    }
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 4em;
    width: 75%;
    margin-top: 1em;
    margin-bottom: 0em;

    img {
        position: relative;
        padding-left: 1.5em;
        padding-right: 0.75em;
        height: 50px;
        width: 50px;
        border-radius: 45px;
        transition: all 0.2s ease-in;
        
        &:hover {
            box-shadow: 0px 17px 16px -11px rgba(47, 76, 120, 1);
            transform: translateY(3px);
        }
    }
    .name {
        font-weight: 600;
        font-size: 1.85rem;
    }
`
const CardBody = styled.div`
    margin: 1em 0em;
    width: 70%;
    overflow: scroll;
    p {
        margin: 1em 0em;
        font-size: 1.15rem;
        font-weight: 400;
        line-height: 1.4;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;

        &:hover {
            opacity: 0.5;
        }
    }
`
const Github = styled.a`
    
`