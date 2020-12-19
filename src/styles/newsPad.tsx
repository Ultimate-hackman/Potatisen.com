import styled from 'styled-components'

const NewsPad = styled.div `
    width: 20%;
    background-color: rgba(255, 255, 255, 0.048);
    border-radius: 10px;
    margin-left: auto;
    margin-top: -25%;
    padding: 20px;
    box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.096);

    @media only screen and (max-width: 1024px) {
        margin-top: -35%;        
    }

    @media only screen and (max-width: 736px) {
        display: none;
    }
`

export default NewsPad  