import Head from 'next/head'
import styled from "styled-components";

import Title from '../styles/title'
import GlobalStyle from '../theme/GlobalStyles'
import Header from '../components/header'

export default function Home() {
  return (
    <>
        <GlobalStyle/>
        <Header/>
        <Title>
          Potatisen.com
        </Title>
    </>
  )
}
