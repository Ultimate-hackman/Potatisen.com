import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import React, { FunctionComponent } from "react";

const Bar = styled.ul`
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    display: flex;
    position: sticky;
    backdrop-filter: blur(4px);

    top: 0px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    z-index: 1;
`;

const Item = styled.a`
    display: inline-block;

    font-size: 1.7em;
    margin-left: 1vw;

    color: rgba(5, 5, 5, 0.7);

    transition: ease-out 0.2s;
    cursor: pointer;
    &:hover {
        color: rgb(2, 2, 2);
    }
`;

const Potatisen = styled(Item)`
    cursor: default;
    margin-left: auto;
    padding-right: 8vh;
    color: rgb(2, 2, 2);
`;

export interface HeaderProps {
  title: string
}

const Header:FunctionComponent<HeaderProps> = (props) => {
  const {
    title,
  } = props;
  return (
    <>
      <Head>
        <title>
          {title ? `${title} • Potatisen.com` : "Potatisen.com"}
        </title>
      </Head>
      <Bar>
        <Link href="/"><Item>Hem</Item></Link>
        <Link href="/veckobrev"><Item>Veckobrev</Item></Link>
        <Link href="/om"><Item>Om oss</Item></Link>
        <Link href="/provschema">
          <Item>
            Provschema
            <span role="img" aria-label="clock">🕒</span>
          </Item>
        </Link>

        <Potatisen>Potatisen</Potatisen>
      </Bar>

    </>
  );
};

export default Header;
