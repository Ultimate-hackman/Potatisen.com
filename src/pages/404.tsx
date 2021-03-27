import styled from "styled-components";
import Link from "next/link";
import React from "react";
import GlobalStyle from "../theme/GlobalStyles";
import Header from "../components/header";
import InfoPad from "../styles/infoPad";
import Title from "../styles/title";
import Img from "../styles/img";
import Btn from "../styles/btn";

const QuestionImg = styled(Img)`
width: 15%;
`;

export default function Home(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header title="404" />
      <Title>
        404
      </Title>
      <Title sub>
        Sidan gick inte att hitta
      </Title>
      <QuestionImg src="https://media.discordapp.net/attachments/688322560957743190/788822693277335552/question.png" />

      <Link href="/">
        <Btn>Hem</Btn>
      </Link>

      <InfoPad>
        <h1>Sidan gick inte att hitta </h1>
      </InfoPad>
    </>
  );
}
