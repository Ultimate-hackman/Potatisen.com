import styled from "styled-components";
import Title from "./title";

const Text = styled(Title)`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  padding-top: 0vh;
  text-decoration: none;

  color: rgba(5, 5, 5, ${(props) => props.deep});
`;

export default Text;
