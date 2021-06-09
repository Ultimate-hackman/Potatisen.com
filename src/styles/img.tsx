import styled from "styled-components";

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    width: ${(props) => props.width};
    border-radius: 20px;

    @media screen and (max-height: 768px) {
        width: 35%;    
    }
`;

export default Img;
