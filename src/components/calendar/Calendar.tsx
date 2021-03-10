import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import Hatch from "../../styles/hatch";
import { Test } from "../../lib/calendar/testData";
import colorFinder from "../../lib/calendar/colorFinder";
import Title from "../../styles/title";

const Text = styled(Title)`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  padding-top: 0vh;
`;

const Grid = styled.div`
padding-top: 3vh;
display: grid;
justify-self: auto;
justify-content: center;
        
grid-template-columns: repeat(7, 17vh);
grid-row-gap: 3vh;
`;

export interface CalendarProps {
  data: Test[];
  days: number;
  state
}

const Calendar: FunctionComponent<CalendarProps> = ({
  data,
  days,
  state,
}) => {
  const day = dayjs().locale("sv");

  function monthDay(i: number) {
    const date = day.add(i + 1 - dayjs().day(), "day");
    const localData: Test[] = data.filter((item: Test) => date?.isSame(item.timestamp, "day") && item?.timestamp !== undefined);
    const localTests: JSX.Element[] = localData.map((localTest) => (
      <Hatch color={colorFinder(localTest.subject, 0.5)}>
        {" "}
        <Text size="2vh">
          {dayjs(localTest.timestamp).locale("sv").format("D MMM")}
          {" "}
          {localTest.subject?.toUpperCase()}
          {" "}
        </Text>
        {" "}
        <Text size="2vh">
          {" "}
          {localTest.title}
          {" "}
        </Text>
        {" "}
        <Text size="1vh">{dayjs(localTest.timestamp).format("hh:mm")}</Text>
        {" "}
        <Text size="1vh">
          {" "}
          {`${dayjs(localTest.timestamp).diff(dayjs(), "day")} dagar kvar `}
          {dayjs(localTest.timestamp).locale("sv").format("dddd")}
          {" "}

        </Text>
        {" "}
      </Hatch>
    ));

    const dayLeft = date.diff(dayjs(), "day");

    if (localTests.length > 1) {
      return (
        <Hatch onClick={() => state(localTests)} color={colorFinder("en", 0.5)}>
          {" "}
          <Text size="2vh">
            {date.format("D MMM")}
            {" "}
            {date.isSame(dayjs(), "day") ? "📍" : ""}
            ❗
            {" "}
            <br />
            {" "}
            flera prov
            {" "}
          </Text>
          {" "}
          <Text size="1vh">
            {" "}
            {dayLeft}
            {" "}
            {dayLeft === 1 ? "imorgon" : "dagar kvar"}
            {" "}
            {date.format("dddd")}
            {" "}
          </Text>
          {" "}
        </Hatch>
      );
    }

    if (localTests.length === 1) {
      return localTests;
    }
    return (
      <Hatch color={colorFinder(date.day() === 6 || date.day() === 0 ? "ma" : "NOTEST", 0.5)}>
        {" "}
        <Text size="2vh" weight="normal">
          {date.format("D MMM")}
          {" "}
          {date.isSame(dayjs(), "day") ? "📍" : ""}
        </Text>
        {" "}
        {date.day() === 6 || date.day() === 0 ? (
          <Text size="2vh">
            helg
            <span role="img" aria-label="palm">🌴</span>
          </Text>
        ) : "" }
        {date.format("dddd")}
      </Hatch>
    );
  }

  return <Grid>{[...Array(days)].map((_, i) => monthDay(i))}</Grid>;
};

export default Calendar;
