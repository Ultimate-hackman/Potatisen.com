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


  const news = useData("/api/art");

  return (
    <>

      <GlobalStyle />
      <Header title="" />
      <Title>
        Slutet är här
      </Title>

      <Text size="2vh" weight="normal">
        Skolan är över.
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
          {`Lycka till! 🙏`}
          {" "}
        </h1>

      </InfoPad>
      <Link href="/veckobrev">
        <Btn>Veckobrev</Btn>
      </Link>

      <Text size="5vh">Illustrationer</Text>
      <Text size="2vh" weight="normal">I am an insomniac with 3d software okay?</Text>

      <ArtDeck data={news} />


    </>
  );
}
