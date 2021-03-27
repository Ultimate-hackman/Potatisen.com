import Link from "next/link";
import dayjs from "dayjs";
import React from "react";
import GlobalStyle from "../theme/GlobalStyles";
import Header from "../components/header";

import InfoPad from "../styles/infoPad";
import Title from "../styles/title";
import Img from "../styles/img";
import Btn from "../styles/btn";

export default function Home(): JSX.Element {
  return (
    <>

      <GlobalStyle />
      <Header title="" />
      <Title>
        Välkommen till Potatisen.com!
      </Title>
      <Img src="https://media.discordapp.net/attachments/688322560957743190/786279776468992071/shrek.png" />

      <Link href="/veckobrev">
        <Btn>Veckobrev</Btn>
      </Link>

      <InfoPad>

        <h1>
          {" "}
          {`${dayjs("apr 2, 2021 00:00:00").diff(dayjs(), "day") + 1} dagar kvar till påsklov 🐤`}
          {" "}
        </h1>

      </InfoPad>

    </>
  );
}
