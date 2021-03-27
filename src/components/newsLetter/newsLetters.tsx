import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import Hatch from "../../styles/hatch";
import UseDownloadUrl from "../../lib/firebase/useDownloadUrl";
import Text from "../../styles/text";

const Grid = styled.div`
padding-top: 3vh;
display: grid;

justify-content: center;
        
grid-template-columns: repeat(4, 17vh);
grid-row-gap: 3vh;
`;

const LetterBox = styled(Hatch)`
cursor: pointer;
border: 1px solid rgba(0, 0, 0, 0.137);
&:hover {
  border: 1px solid rgb(0, 0, 0);
}
`;

export interface WeekLetterProps {
  letterWeek: number,
}

function weekBox(i: number, letterWeek: number): JSX.Element {
  const week = letterWeek - 1 - i;
  const url = UseDownloadUrl(`veckobrev/${week}, ${new Date().getFullYear()}.pdf`);
  const box = (
    <a href={url}>
      <LetterBox>
        {" "}
        <Text size="2vh" deep={0.9}>
          Vecka
          {" "}
          {week}
        </Text>
        {" "}
      </LetterBox>
    </a>
  );

  if (url !== undefined) {
    return box;
  }
}

const distance = dayjs().isoWeek();
const WeekLetter: FunctionComponent<WeekLetterProps> = ({
  letterWeek,
}) => (
  <Grid>
    {[...Array(distance)].map((_, i) => (
      weekBox(i, letterWeek)
    ))}
  </Grid>
);

export default WeekLetter;
