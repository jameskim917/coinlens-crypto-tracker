import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from "./routes/Home";
import About from "./routes/About";
import CoinDetail from "./routes/CoinDetail";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Route path='/' exact={true} component={Home} />    
                <Route path='/about' component={About} />
                <Route path='/:id' component={CoinDetail} />
            </BrowserRouter>
        </div>
    )
}

export default App
