import styled from 'styled-components'
import Link from 'next/link'

const Bar = styled.ul `
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;

    display: flex;
    
    
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
    color: rgb(2, 2, 2);
`

export default function header() {
    return (
    <>
    <Bar> 
    <Link href="/"><Item>Hem</Item></Link>
    <Link href="/veckobrev"><Item>Veckobrev</Item></Link>
    <Link href="/about"><Item>Om oss</Item></Link>
    <Link href="/kalendar"><Item>Kalender<small>🎅</small></Item></Link>


    <Potatisen>Potatisen</Potatisen>
    </Bar>
    
        


        
        
    </>    
        )
}