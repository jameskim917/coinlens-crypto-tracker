import React from 'react'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                </a>
                <ul className="navbar-nav mr-auto">
                    <li class="nav-item mr-auto">
                        <a className="nav-link primary" href="/about">About</a>
                    </li>
                </ul>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                        
                    </ul>
                </div> */}
            </div>
        </nav>
        </>
    )
}

export default Navbar
