import React from 'react';
import './assets/Stylesheet.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Item = styled.li`
    display: inline-block;
    padding-left: 1.5vw;

    font-size: 1.3em;

    color: rgba(5, 5, 5, 0.7);
`

export default function List() {
    

    return (
        <header>
            <nav className="nav-box" >
                <ul className="list">
                    <Link to="/">
                    <Item><p>Hem</p></Item>
                    </Link>
                    <Link to="/veckobrev">
                    <Item><p>Veckobrev</p></Item>
                    </Link>

                    <Link to="/about">
                    <Item><p>Om oss</p></Item>
                    </Link>

                    <Link to="/Kalender">
                    <Item><p>Kalender<small>🎅</small></p></Item>
                    </Link>

                    <p className="potatisen">Potatisen</p>
                </ul>
            </nav>
        </header>
    )
}

