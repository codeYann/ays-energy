import React from "react";
import { Link } from 'react-router-dom';

import './style.css'

export default function Navbar(){
    return(
        <nav className="navbar">
            <div id="logo">
                <p>AysEnergy</p>
            </div>

            <div>
            <i class="fa-solid fa-magnifying-glass"></i><input type="text" id="search" placeholder="Pesquisar..." />
            </div>

            <div>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/create">Publicar</Link>
            </div>
        </nav>
    );
}