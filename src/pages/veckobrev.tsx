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

export default function veckobrev(): JSX.Element {
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

  let weekMsg: String = new String();
  if (data === undefined) {
    weekMsg += "Veckobrev vecka ?";
  } else if (url !== undefined) {
    weekMsg += `Veckobrev vecka ${weekCount(4, 17)}`;
  } else if (url === undefined) {
    weekMsg += "hittades inte";
  }

  return (
    <>

      <GlobalStyle />
      <Header title="Veckobrev" />
      <VeckoImg src="https://cdn.discordapp.com/attachments/688322560957743190/786315067352154172/veckobrev.edcc5d03.png" />
      <a href={url}>
        {" "}
        <BigBtn>{weekMsg}</BigBtn>
        {" "}
      </a>

      <NewsPad>
        <h1>Nyheter 📰🖊️</h1>
        {data?.map((dataItem) => <Bullet>{dataItem}</Bullet>)}
      </NewsPad>
    </>
  );
}
