import React from "react";
import styled from "styled-components";
import weekCount from "../lib/time/weekCount";
import useDownloadUrl from "../lib/firebase/useDownloadUrl";

import GlobalStyle from "../theme/GlobalStyles";
import NewsLetters from "../components/newsLetter/newsLetters";
import Header from "../components/header";
import InfoPad from "../styles/infoPad";
import Img from "../styles/img";
import BigBtn from "../styles/bigBtn";
import bullets from "../lib/newsletter/bullets";

const VeckoImg = styled(Img)`
width: 25%;
padding-top: 10vh;
`;

const NewsPad = styled(InfoPad)`
margin-top: -35%;


`;
const Bullet = styled.li`
list-style-type:none;
`;

export default function Veckobrev(): JSX.Element {
  const letterWeek = weekCount(4, 17);
  const url = useDownloadUrl(`veckobrev/${letterWeek}, ${new Date().getFullYear()}.pdf`);

  function veckobrevText(data: string): string {
    if (data === undefined) {
      return "Veckobrev vecka ?";
    } if (url !== undefined) {
      return `Veckobrev vecka ${letterWeek}`;
    }
    return "hittades inte";
  }

  return (
    <>

      <GlobalStyle />
      <Header title="Veckobrev" />
      <VeckoImg src="https://cdn.discordapp.com/attachments/688322560957743190/786315067352154172/veckobrev.edcc5d03.png" />
      <a href={url}>
        {" "}
        <BigBtn>{veckobrevText(url)}</BigBtn>
        {" "}
      </a>

      <NewsLetters letterWeek={letterWeek} />

      <NewsPad>
        <h1><span role="img" aria-label="note">Nyheter 📰🖊️</span></h1>
        {bullets().map((dataItem) => (
          <Bullet>
            {dataItem}
          </Bullet>
        ))}
      </NewsPad>
    </>
  );
}
