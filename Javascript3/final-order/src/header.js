import React from 'react';
import './assets/Stylesheet.css'
import { Link } from 'react-router-dom';



 function List() {

    

    return (
        <header>
            <nav class="nav-box" >
                <ul class="list">
                    <Link to="/">
                    <li><a>Hem </a></li>
                    </Link>
                    <Link to="/veckobrev">
                    <li><a>Veckobrev </a></li>
                    </Link>

                    <Link to="/about">
                    <li><a>Om oss</a></li>
                    </Link>

                    <Link to="/Kalender">
                    <li><a>Kalender <small>🎅</small></a></li>
                    </Link>

                    <p class="potatisen"> Potatisen</p>
                </ul>
            </nav>
        </header>
    )
}

export default List