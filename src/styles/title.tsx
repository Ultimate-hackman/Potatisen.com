
import styled from "styled-components";

const Title = styled.h1 `
    padding-top: ${props => props.sub ? "0vh" : props.top};
    text-align: center;
    font-size: ${props => props.sub ? "1.5em" : "4em"};
    font-weight: ${props => props.sub ? "normal" : "bold"};
`

export default Title