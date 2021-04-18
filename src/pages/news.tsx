import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyles";
import NewsLetters from "../components/newsLetter/newsLetters";
import Header from "../components/header";
import InfoPad from "../styles/infoPad";
import Img from "../styles/img";
import useData from "../lib/discordAPI/useData";
import BigBtn from "../styles/bigBtn";
const VeckoImg = styled(Img)`
width: 25%;
padding-top: 10vh;
`;


const Bullet = styled.li`
list-style-type:none;
`;

export default function Veckobrev(): JSX.Element {
  const news = useData("/api/news");
  const letters: any[] = useData("/api/letters")


  return (
    <>

      <GlobalStyle />
      <Header title="Veckobrev" />
      <VeckoImg src="https://cdn.discordapp.com/attachments/688322560957743190/786315067352154172/veckobrev.edcc5d03.png" />
      <a href={letters[0]?.url}> 
      <BigBtn>{letters[0]?.title}</BigBtn>
      </a>
      <InfoPad>
      <h1><span role="img" aria-label="note">Nyheter 📰🖊️</span></h1>
        {news.map((item) => (
          <Bullet>
            {" "}
            -
            {item.text}
          </Bullet>
        ))}
      </InfoPad>

      <NewsLetters textLen={200} data={letters.slice(1)} />
    </>
  );
}
