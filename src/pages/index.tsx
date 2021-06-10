import Link from "next/link";
import dayjs from "dayjs";
import ArtDeck from "../components/artDeck/artDeck"
import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyles";
import Header from "../components/header";
import pluralCheck from "../lib/time/pluralCheck";
import InfoPad from "../styles/infoPad";
import Title from "../styles/title";
import Img from "../styles/img";
import Btn from "../styles/btn";
import useData from "../lib/discordAPI/useData";

import Text from "../styles/text";



export default function Home(): JSX.Element {
  const dayDiff = dayjs("2021-06-11T12:00:00+02:00").diff(dayjs(), "day");

  const news = useData("/api/art");

  return (
    <>

      <GlobalStyle />
      <Header title="" />
      <Title>
        Slutet är nära
      </Title>

      <Text size="2vh" weight="normal">
        Skolan är snart över.
        {" "}
        <br />
        {" "}
        Hemsidan kanske får ett nytt syfte senare.
        {" "}
        <br />
        {" "}
        Hejdå
      </Text>
      <Img src="https://cdn.discordapp.com/attachments/782333556704673822/851884467785957386/sad4.png" width="25%" />

      <InfoPad>

        <h1>
          {" "}
          {`${dayDiff} ${pluralCheck(dayDiff, undefined, undefined, undefined)[0]} kvar till skolavslutningen 🌴`}
          {" "}
        </h1>

      </InfoPad>
      <Link href="/veckobrev">
        <Btn>Veckobrev</Btn>
      </Link>

      <Text size="5vh">Illustrationer</Text>
      <Text size="2vh" weight="normal">I have chronic insomia okay?</Text>

      <ArtDeck data={news} />


    </>
  );
}
