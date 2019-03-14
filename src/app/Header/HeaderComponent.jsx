import React from 'react';
import { Link } from 'react-router-dom';
import SwitchComponent from '../routes';
import { navBar, theadDesign } from '../util/constant-class';

const HeaderComponent = () => (
    <div>
        <nav className="navbar" style={navBar}>
            <ul className="nav navbar-nav" style={theadDesign}>
                <li style={{ "display": "inline-block" }}>
                    <Link to="/" style={{ "color": "white" }}>Home</Link>
                </li>
                <li style={{ "display": "inline-block", "marginLeft": "15px" }}>
                    <Link to="/search" style={{ "color": "white" }}>Search</Link>
                </li>
            </ul>
        </nav>
        {SwitchComponent}
    </div>
);

export default HeaderComponent;