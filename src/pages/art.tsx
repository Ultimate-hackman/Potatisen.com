import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyles";
import Header from "../components/header";
import ArtDeck from "../components/artDeck/artDeck";
import useData from "../lib/discordAPI/useData";

import Text from "../styles/text";

const Pad = styled.div`

    background-color: rgb(255, 255, 255);
    border-radius: 50px;
    margin-top: 10px;

    border: 1px solid gray;

    
    
    box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.096);
`;

export default function art(): JSX.Element {
  const news = useData("/api/art");

  return (
    <>

      <GlobalStyle />
      <Header title="" />

        <Text size="5vh">Illustrationer</Text>
        <Text size="2vh" weight="normal">I have chronic insomia okay?</Text>

        <ArtDeck data={news} />

    </>
  );
}