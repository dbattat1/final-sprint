import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';

export function Navbar() {
    return (
    <nav>
        <ul className="navbar">
            <li><NavLink exact to='/'>Home</NavLink></li> 
            <li><NavLink exact to='/login'><PersonIcon></PersonIcon></NavLink></li> 
        </ul>
    </nav>
    )
}