import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import Hatch from "../../styles/hatch";
import { Test } from "../../lib/calendar/testData";
import colorFinder from "../../lib/calendar/colorFinder";
import Text from "../../styles/text";
import daysLeftText from "../../lib/calendar/daysLeftText";

const Grid = styled.div`
padding-top: 3vh;
display: grid;
justify-self: auto;
justify-content: center;
        
grid-template-columns: repeat(7, 17vh);
grid-row-gap: 3vh;
`;

interface CalendarProps {
  testData: Test[];
  days: number;
  state
}

const Calendar: FunctionComponent<CalendarProps> = ({
  testData: tests,
  days,
  state,
}) => {
  const day = dayjs().locale("sv");

  function monthDay(i: number) {
    const date = day.add(i + 1 - dayjs().day(), "day");
    const isHelg: boolean = date.day() === 6 || date.day() === 0;
    const localData: Test[] = tests.filter((item: Test) => date?.isSame(item.timestamp, "day") && item?.timestamp !== undefined);


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
        <Text size="1vh">{dayjs(localTest.timestamp).format("HH:mm")}</Text>
        {" "}
        <Text size="1vh">
          {" "}
          {daysLeftText(localTest.timestamp)}
          {" "}
          {dayjs(localTest.timestamp).locale("sv").format("dddd")}
          {" "}

        </Text>
        {" "}
      </Hatch>
    ));

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
            {daysLeftText(date)}
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
      <Hatch color={colorFinder(isHelg ? "ma" : "NOTEST", 0.5)}>
        {" "}
        <Text size="2vh" weight="normal">
          {date.format("D MMM")}
          {" "}
          {date.isSame(dayjs(), "day") ? "📍" : ""}
        </Text>
        {" "}
        {isHelg ? (
          <Text size="2vh">
            helg
            <span role="img" aria-label="palm">🌴</span>
          </Text>
        ) : "" }
        <Text size="2vh" weight="normal">{date.format("dddd")}</Text>
      </Hatch>
    );
  }

  return <Grid>{[...Array(days)].map((_, i) => monthDay(i))}</Grid>;
};

export default Calendar;
