import './Root.css';
import Navigation from "../../components/navigation/Navigation";
import React from "react";
import {Outlet} from "react-router-dom";

function Root() {

    return (
        <div>
            <Navigation/>
            <header className="App-header">
                <img src={require('../../images/Wojak.png')} className="App-logo" alt="logo"/>
                <p>
                    <code>src/Root.js</code>
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
            <Outlet />
        </div>
    );
}

export default Root;
