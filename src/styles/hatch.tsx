import styled  from "styled-components";

const Hatch = styled.div `
  box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.096);
  border-radius: 2.5vh;
  width: 15vh;
  min-height: 10vh;
  text-align: center;
  background-color: rgba(${(props) => props.color});
  cursor: ${props => props.cursor ? props.cursor : "default"};
`

export default Hatch