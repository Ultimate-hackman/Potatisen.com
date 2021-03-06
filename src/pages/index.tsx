import Link from "next/link";
import dayjs from "dayjs";
import React from "react";
import GlobalStyle from "../theme/GlobalStyles";
import Header from "../components/header";

import NewsPad from "../styles/newsPad";
import Title from "../styles/title";
import Img from "../styles/img";
import Btn from "../styles/btn";

export default function Home(): JSX.Element {
  return (
    <>

      <GlobalStyle />
      <Header />
      <Title>
        Välkommen till Potatisen.com!
      </Title>
      <Img src="https://media.discordapp.net/attachments/688322560957743190/786279776468992071/shrek.png" />

      <Link href="/veckobrev">
        <Btn>Veckobrev</Btn>
      </Link>

      <NewsPad>

        <h1>
          {" "}
          {`${dayjs("apr 6, 2021 00:00:00").diff(dayjs(), "day")} dagar kvar till påsklov 🐤`}
          {" "}
        </h1>

      </NewsPad>

    </>
  );
}
