import styled from "styled-components";

const Btn = styled.button`
    background-color: rgba(17, 17, 17); /* black */
    border: none;
    color: white;

    padding: 1.5vh 1vw;
    font-size: 1.5em;
    border-radius: 10px;

    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;

    transition: ease-out 0.2s;

    &:hover {
    color: black;
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid rgb(0, 0, 0);
  }
`

export default Btn