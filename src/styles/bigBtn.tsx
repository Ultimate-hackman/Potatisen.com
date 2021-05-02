import styled from "styled-components";
import Btn from "./btn";

const BigBtn = styled(Btn)`
    background-color: rgb(255, 255, 255); /* Black */
    color: black;
    border: none;

    font-size: 2.5em;
    border-radius: 10px;
    
    width: 40%;
    border: 1px solid rgb(0, 0, 0, 0.4 );
    padding: 2vh;

    transition: linear 0.2s;


    &:hover{
      border: 1px solid rgb(0, 0, 0);
    }
    
`;

export default BigBtn;
