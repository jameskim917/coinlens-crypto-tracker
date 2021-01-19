import React, { useState } from 'react'
import styled from 'styled-components'

function Navigation() {
        const[isOpen, setIsOpen] = useState(false)
    return (
        <Nav>
            <Container>
                <Brand href="/">Coinlens</Brand>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                        <MenuLink href="/">Home</MenuLink>
                        <MenuLink href="/about">About</MenuLink>
                        <Button>Get Free Bitcoin</Button>
                    </LinkWrapper>
                </Menu>
            </Container>
        </Nav>
    )
}

export default Navigation

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    padding: 2rem;
`;
const Brand = styled.a`
    text-decoration: none;
    color: whitesmoke;
    font-size: 2rem;
    padding: 0;
    transition: all 0.2s ease-in;
    font-weight: 700;
    
    &:hover {
        transform: translateY(3px);
    }
`
const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: white;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: flex-end; 
        overflow: hidden;
        margin-bottom: 1rem;
        box-shadow: 4px 8px 15px 1 black;
        max-height: ${ ({isOpen}) => (isOpen ? "300px" : "0") };
        width: 100%;
        transition: max-height 0.5s ease-in-out;
    }
`;
const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1.5rem 0;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
        margin-top: 0.5rem;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 1.5rem;
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            -webkit-backdrop-filter: blur(35px);
            backdrop-filter: blur(15px);
            background-color: rgba(255, 255, 255, 0.4);
        }
    }
`;
const MenuLink = styled.a`
    text-decoration: none;
    color: whitesmoke;
    font-size: 1rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 1.5rem;
    font-weight: 500;
    margin-right: 1rem;

    &:hover {
        color: black;
        background: rgba(255, 255, 255, 0.85);
    }

    @media (max-width: 768px) {
        background: rgba(179, 192, 211, 1);
        border-radius: 1.5rem;
        margin-bottom: 0.75rem;
        margin-right: 0;
;
    }
`;
const Button = styled.button`
    font-size: 0.9rem;
    background: rgba(47, 76, 120, 1);
    border: none;
    padding: 0.8rem 1.1rem;
    color: white;
    border-radius: 1.5rem;
    box-shadow: ${ ({isOpen}) => (isOpen ? "0px 13px 24px -7px rgba(47, 76, 120, 1);" : "0") };
    transition: all 0.2s ease-in;
    margin-left: 0.75rem;
    
    cursor: pointer;

    &:hover {
        box-shadow: 0px 17px 16px -11px rgba(47, 76, 120, 1);
        transform: translateY(3px);
    }

    @media (max-width: 678px) {
        margin-left: 0rem;
        margin-top: 0.2rem;
    }
`;