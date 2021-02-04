import styled from "styled-components";
import Btn from "./btn";

const BigBtn = styled(Btn)`
    background-color: rgb(255, 255, 255); /* Black */
    color: black;
    border: none;

    font-size: 2.5em;
    border-radius: 10px;
    
    width: 40%;
    border: 1px solid rgb(0, 0, 0);
    padding: 2vh;

    transition: linear 0.2s;
    

    &:hover{
      background-image: linear-gradient(120deg,  rgba(144,0,255,0.7540603248259861), rgba(228,14,14,0.8213457076566125));
      color:white;
    }
    
`;

export default BigBtn;
