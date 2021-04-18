import styled from "styled-components";

const InfoPad = styled.div`
    position: fixed;
    left: 80%;
    top: 30%;

    width: 20%;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.096);



    @media all and (max-width: 736px) {
        display: none;
    }
`;

export default InfoPad;
