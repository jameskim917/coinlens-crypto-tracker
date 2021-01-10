import React from 'react'

function About() {
    return (
        <div>
            <div className='col-12 col-md-8 mx-auto mt-5'>
            <div className='card w-75 mx-auto'>
                <div className="card-body text-center"> 
                    <h1 className='card-title'>About</h1>
                    <p className='card-text'>Coinlens is a cryptocurrency tracker app that displays the 
                    top-100 coins and their statistics. It is built with the React Javascript library.</p>
                    <p className='card-text'>See more at the project's Github page:</p>
                    <a href="https://github.com/eskimojamz/Coinlens" class="btn btn-dark">Github</a>
                </div> 
            </div> 
            </div>
        </div>
    )
}

export default About
