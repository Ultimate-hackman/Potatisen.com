import React from 'react';
import './assets/Stylesheet.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Bar = styled.ul `
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;

    display: flex;
    
    position: fixed;
    width: 100%;

    backdrop-filter: blur(4px);

    top: 0px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const Item = styled.li`
    display: inline-block;
    padding-left: 1.5vw;
    font-size: 1.7em;

    color: rgba(5, 5, 5, 0.7);

    transition: ease-out 0.2s;


    &:hover {
        color: rgb(2, 2, 2);
    }
`

const Potatisen = styled(Item) `

    margin-left: auto;
    padding-right: 8vh;
`



export default function List() {
    

    return (
                <Bar>
                    
                    <Link to="/"><Item>Hem</Item></Link>
                    <Link to="/veckobrev"><Item>Veckobrev</Item></Link>
                    <Link to="/about"><Item>Om oss</Item></Link>
                    <Link to="/Kalender"><Item>Kalender<small>🎅</small></Item></Link>

                    <Potatisen>Potatisen</Potatisen>
                </Bar>

    )
}

