import React, { useState, useEffect } from "react";
import styled from "styled-components";
import weekCount from "../lib/time/weekCount";
import { firestore } from "../lib/firebase/firebase";
import useDownloadUrl from "../lib/firebase/useDownloadUrl";

import GlobalStyle from "../theme/GlobalStyles";

import Header from "../components/header";
import NewsPad from "../styles/newsPad";
import Img from "../styles/img";
import BigBtn from "../styles/bigBtn";

const VeckoImg = styled(Img)`
width: 25%;
padding-top: 15vh;
`;

const Bullet = styled.li`
list-style-type:none;
`;

export default function Veckobrev(): JSX.Element {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const array: string[] = [];
    firestore.collection("news").get().then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        array.push(doc.data().name);
      });

      setData(array);
    });
  }, []);

  const url = useDownloadUrl(`veckobrev/${weekCount(4, 17)}, ${new Date().getFullYear()}.pdf`);

  function veckobrevText(data) {
    if (data === undefined) {
      return "Veckobrev vecka ?";
    } if (url !== undefined) {
      return `Veckobrev vecka ${weekCount(4, 17)}`;
    } if (url === undefined) {
      return "hittades inte";
    }
  }

  return (
    <>

      <GlobalStyle />
      <Header title="Veckobrev" />
      <VeckoImg src="https://cdn.discordapp.com/attachments/688322560957743190/786315067352154172/veckobrev.edcc5d03.png" />
      <a href={url}>
        {" "}
        <BigBtn>{veckobrevText(data)}</BigBtn>
        {" "}
      </a>

      <NewsPad>
        <h1><span role="img" aria-label="note">Nyheter 📰🖊️</span></h1>
        {data?.map((dataItem) => (
          <Bullet>
            -
            {dataItem}
          </Bullet>
        ))}
      </NewsPad>
    </>
  );
}
