import './Root.css';
import Navigation from "../../components/navigation/Navigation";
import React from "react";
import {Outlet} from "react-router-dom";

function Root() {

    return (
        <div className="root-page">
            <Navigation/>
            <header className="App-header">
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
