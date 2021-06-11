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

`;

const ArtImg = styled(Img)`
padding-bottom: 2vh;
border: solid 1px gray;
cursor: pointer;
transition: linear 0.3s;

&:hover {
  border: solid 1px black;
  }
`;

export interface artDeckProps {
  data: any[],
}
const WeekLetter: FunctionComponent<artDeckProps> = ({
  data,
}) => (

  <Grid>
    {data.map((post) => (
      <div>
        <ArtImg onClick={() => window.open("https://www.instagram.com/david_hoskinq/")} width="75%" src={post?.aurl} />
        <Text size="1.5vh" padding="1vh" weight="normal">{post?.text}</Text>
      </div>
    ))}
  </Grid>

);

export default WeekLetter;
