import Link from "next/link";
import dayjs from "dayjs";

import React, { useState, useEffect } from "react";
import GlobalStyle from "../theme/GlobalStyles";
import Header from "../components/header";
import pluralCheck from "../lib/time/pluralCheck";
import InfoPad from "../styles/infoPad";
import Title from "../styles/title";
import Img from "../styles/img";
import Btn from "../styles/btn";

export default function Home(): JSX.Element {
  const dayDiff = dayjs("juni 11, 2021 12:00:00").diff(dayjs(), "day");
  const [text, setText] = useState("");

  return (
    <>

      <GlobalStyle />
      <Header title="" />
      <Title>
        Välkommen till Potatisen.com!
      </Title>
      <Img src="https://media.discordapp.net/attachments/688322560957743190/786279776468992071/shrek.png" />

      <Link href="/news">
        <Btn>Veckobrev</Btn>
      </Link>

      <InfoPad>

        <h1>
          {" "}
          {`${dayDiff} ${pluralCheck(dayDiff, undefined, undefined, undefined)[0]} kvar till skolavslutningen 🌴 ${text}`}
          {" "}
        </h1>

      </InfoPad>

    </>
  );
}
