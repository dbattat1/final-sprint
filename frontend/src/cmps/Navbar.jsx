import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
    <nav>
        <ul className="navbar">
            <li><NavLink exact to='/'>Home</NavLink></li> 
        </ul>
    </nav>
    )
}