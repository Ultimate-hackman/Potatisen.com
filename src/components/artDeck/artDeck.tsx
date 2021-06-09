import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Img from "../../styles/img";

import Text from "../../styles/text";

const Grid = styled.div`
display: grid;
justify-content: center;
padding-bottom: 5vh;

transition: linear 0.2s;
grid-template-columns: repeat(3, 35em);
@media only screen and (max-height: 768px) {
  grid-template-columns: repeat(3, 1em);
}
`;

const ArtImg = styled(Img) `
padding-bottom: 2vh;
border: solid 1px gray;
`

export interface artDeckProps {
  data: any[],
}
const WeekLetter: FunctionComponent<artDeckProps> = ({
  data,
}) => (

  <Grid>
    {data.map((post) => (
    <div>
      <ArtImg width="75%" src={post?.aurl} />
      <Text size="1.5vh" padding="1vh" weight="normal">{post?.text}</Text>
      </div>
    ))}
  </Grid>

);

export default WeekLetter;
