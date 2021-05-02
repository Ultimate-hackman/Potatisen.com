import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Text from "../../styles/text";
import useData from "../../lib/discordAPI/useData";

const Grid = styled.div`
padding-top: 3vh;
margin: auto;
display: grid;
width: 50%;
justify-content: center;

transition: linear 0.2s;

background-image: linear-gradient(to bottom, #630303);
grid-template-columns: repeat(4, 15em);

@media only screen and (max-height: 768px) {
  grid-template-columns: repeat(3, 15em);
}
grid-column-gap: 2em;
grid-row-gap: 2em;
`;

const LetterBox = styled.div`
cursor: pointer;
border-radius: 10px;
height:10em;
overflow: hidden;
transition: linear 0.2s;


border: 1px solid rgba(0, 0, 0, 0.137);
&:hover {
  border: 1px solid rgb(0, 0, 0);
}
`;

export interface WeekLetterProps {
  data: any[],
  textLen: number,
  active: boolean,
}

const WeekLetter: FunctionComponent<WeekLetterProps> = ({
  data,
  textLen,
}) => (
  <Grid>
    {data.map((letter: any) => (
      <a href={letter.url}>
        <LetterBox href={letter.url}>
          {" "}
          <Text size="1em" deep={0.9}>
            {letter.title}
          </Text>
          <Text size="1em" weight="normal" deep={0.6}>
          {letter.text.substring(0, textLen)}
          </Text>
          {" "}
        </LetterBox>
      </a>
    ))}
  </Grid>
);

export default WeekLetter;
