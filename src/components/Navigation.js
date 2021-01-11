import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation() {
    return (
        <Navbar bg="transparent" expand="lg" className="px-3">
            <Navbar.Brand href="/" className="text-white pt-3"><h1><strong>Coinlens</strong></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about"><h5>About</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
