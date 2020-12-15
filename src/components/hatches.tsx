import "firebase/database";
import useDownloadUrl from "../lib/firebase/useDownloadUrl";
import styled from "styled-components";
import Title from '../styles/title'
import { Console } from "console";

const Hatch = styled.div `
box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.096);
border-radius: 10px;
width: 10vw;
text-align: center;
`
const HatchClose = styled(Hatch) `

background-image: linear-gradient(120deg, rgba(214, 22, 8, 0.658) , rgba(187, 6, 30, 0.616));
color: rgba(43, 43, 43, 0.836);

`

const Text = styled(Title) `
  font-size: 1.6vw;
  padding-top: 0vh;
`

const Alert = styled(Text) `
font-size: 1.2vw;
`

const monthsLenght = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const dataSet = [[2020, 12, 24, "NO", "jul"], [2020, 12, 20, "NO", "Xd poop"], [2020, 12, 1, "NO", "Random monkey event"]]


let day = new Date().getDate()
let time = new Date()




function HatchMake({ i }) {

  const monthLenght = monthsLenght[new Date().getMonth()]

  if (i > monthLenght) {
    i -= monthLenght
  }

  let customMessage: string = ""
  

  console.log(new Date().getMonth())


  for (let n = 0; n < dataSet.length; n++) {
    if (i === dataSet[n][2]) {
      customMessage += String(dataSet[n][4])
    } else {
    }
  }
  
    return (
      <Hatch>{i} <Alert> {customMessage}</Alert></Hatch>
    )


}

export default function Hatches() {

  return Array.from({ length: 24 }).map((_, index) => {
    return <HatchMake i={  (index + day) } />;
  });
}

