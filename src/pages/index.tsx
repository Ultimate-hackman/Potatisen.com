import Link from "next/link";
import dayjs from "dayjs";

import React from "react";
import GlobalStyle from "../theme/GlobalStyles";
import Header from "../components/header";
import pluralCheck from "../lib/time/pluralCheck";
import InfoPad from "../styles/infoPad";
import Title from "../styles/title";
import Img from "../styles/img";
import Btn from "../styles/btn";

import Text from "../styles/text"
export default function Home(): JSX.Element {
  const dayDiff = dayjs("2021-06-11T12:00:00+02:00").diff(dayjs(), "day");
  const bruuh = ">;";

  return (
    <>

      <GlobalStyle />
      <Header title="" />
      <Title>
        End of an era
        {bruuh}
      </Title>

      <Text size="2vh" weight="normal">
        Skolan är snart över. <br></br> Hemsidan får ett nytt syfte senare. <br></br> Time to die. 💀
      </Text>
      <Img src="https://media.discordapp.net/attachments/782333556704673822/851868693553741874/sad3.png?width=1365&height=1365" />

      <Link href="/veckobrev">
        <Btn>Veckobrev</Btn>
      </Link>

      <InfoPad>

        <h1>
          {" "}
          {`${dayDiff} ${pluralCheck(dayDiff, undefined, undefined, undefined)[0]} kvar till skolavslutningen 🌴`}
          {" "}
        </h1>

      </InfoPad>

    </>
  );
}
