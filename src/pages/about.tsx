import Link from "next/link";
import React from "react";
import styled from "styled-components";
import pluralCheck from "../lib/time/pluralCheck";
import countDown from "../lib/time/countDown";
import Btn from "../styles/btn";
import GlobalStyle from "../theme/GlobalStyles";
import Header from "../components/header";
import Img from "../styles/img";

export default function About(): JSX.Element {
  const Container = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3vh;

    @media only screen and (max-height: 768px) {
        width: 75%;     
    }
    `;
  const time = countDown("sep 13, 2020 18:27:00", true);
  const plural = pluralCheck(time[0], time[1], time[2], time[3]);

  const AboutImg = styled(Img)`
    width: 50%;

    @media all and (max-width: 768px) {
        width: 60%;     
    }
    `;
  return (

    <>

      <GlobalStyle />
      <Header title="Om oss" />
      <Container>
        <AboutImg src="https://cdn.discordapp.com/attachments/688322560957743190/786656997482823680/om-oss.png" className="om-oss-img" alt="om-oss" />
        <p> Potatisen.com grundades i september 2020 med målet att hjälpa samtliga elever på södermalmsskolan genom att skapa användbara funktioner som löser problem. Mer kommer komma. Ingen reklam sedan 2020.</p>
        {" "}
        Online sedan:
        {" "}
        {time[0]}
        {" "}
        {plural[0]}
        ,
        {" "}
        {time[1]}
        {" "}
        {plural[1]}
        ,
        {" "}
        {time[2]}
        {" "}
        {plural[2]}
        ,
        {" "}
        {time[3]}
        {" "}
        {plural[3]}
        <Link href="/">
          <Btn>Hem</Btn>
        </Link>

      </Container>
    </>
  );
}
