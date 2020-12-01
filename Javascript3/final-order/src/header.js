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
                    
                    <Item><Link to="/"><p>Hem</p></Link></Item>
                    
                    
                    <Item><Link to="/veckobrev"><p>Veckobrev</p></Link></Item>
                    

                    
                    <Item><Link to="/about"><p>Om oss</p></Link></Item>
                    

                    
                    <Item><Link to="/Kalender"><p>Kalender<small>🎅</small></p></Link></Item>
                    

                    <p className="potatisen">Potatisen</p>
                </ul>
            </nav>
        </header>
    )
}

