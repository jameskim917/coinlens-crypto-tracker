import React from 'react'
import { HashRouter, Route} from 'react-router-dom'
import Home from "./routes/Home";
import About from "./routes/About";
import CoinDetail from "./routes/CoinDetail";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <HashRouter>
                <Navbar />
                <Route path='/' exact={true} component={Home} />    
                <Route path='/about' component={About} />
                <Route path='/:id' component={CoinDetail} />
            </HashRouter>
        </div>
    )
}

export default App
