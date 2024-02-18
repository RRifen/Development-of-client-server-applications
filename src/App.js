import './App.css';
import Navigation from "./components/navigation/Navigation";
import React from "react";
import ProductsContainer from "./components/products/ProductsContainer";

function App() {

    return (
        <div>
            <Navigation/>
            <header className="App-header">
                <img src={require('./images/Wojak.png')} className="App-logo" alt="logo"/>
                <p>
                    Отредактировал <code>src/App.js</code> и сохранил.
                </p>
                <a
                    className="App-link"
                    href="https://github.com/RRifen/Development-of-client-server-applications"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github с практиками
                </a>
            </header>
            <ProductsContainer />
        </div>
    );
}

export default App;
