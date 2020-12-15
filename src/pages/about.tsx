
import pluralCheck from '../lib/time/pluralCheck'
import countDown from '../lib/time/countDown'
import Btn from '../styles/button'
import GlobalStyle from "../theme/GlobalStyles"
import Header from '../components/header'
import Link from 'next/link'
import styled from "styled-components";
import Img from '../styles/img'
export default function About() {

    const Container = styled.div `
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3vh;

    @media only screen and (max-width: 768px) {
        width: 75%;     
    }
    `
    let time = countDown("sep 13, 2020 18:27:00", true)
    let plural = pluralCheck(time[0], time[1], time[2], time[3])
    

    const AboutImg = styled(Img) `
    width: 50%;

    @media all and (max-width: 768px) {
        width: 60%;     
    }
    ` 
    return (
      
      <>
      <GlobalStyle/>
      <Header />
      <Container>
      <AboutImg src='https://cdn.discordapp.com/attachments/688322560957743190/786656997482823680/om-oss.png' className="om-oss-img" alt="om-oss"></AboutImg>
      <p>Potatisen.com grundades i september 2020 av mig, David H, med målet att hjälpa samtliga elever på södermalmsskolan genom att skapa användbara funktioner som löser problem. Det enda nuvarande exemplet av detta är att jag delar veckobrevet, men det kan räknas med att jag tillägger mer funktioner i kommande tid. Ingen reklam sedan 2020.</p> Online sedan: {time[0]} {plural[0]}, {time[1]} {plural[1]}, {time[2]} {plural[2]}, {time[3]} {plural[3]}
      <Link href="/"><Btn>Hem</Btn></Link>
  
      </Container>
      </>
    )
  
  }
  
  