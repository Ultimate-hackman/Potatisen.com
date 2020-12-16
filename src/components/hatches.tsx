import "firebase/database";
import useDownloadUrl from "../lib/firebase/useDownloadUrl";
import styled from "styled-components";
import Title from '../styles/title'

import mainTime from '../lib/time/mainTime'

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

function HatchMake({ i }) {

  const src = useDownloadUrl(`kalender/${i}.jpg`);
  
  let day = mainTime().getDate()


  let emoji: string = "";
  let alert: string = "";

  switch (i) {
    case 18:
      emoji += "🏫";
      alert += "skolavslutning"
      break;
    case 24:
      emoji += "🎄";
      alert += "Julafton"
      break;
  }

  if(i>= 14 && i<18 && i >= day) {
    emoji += "📡";
    alert += "distans"
  }

  let msg = (  
  <>
    <Text>
      Dag {i} {emoji} 
    </Text>
    <Alert>{alert}</Alert>
    </>
  );

  if (i <= day) {

    return (
      
      <Hatch onClick={() => window.open(src)}key={src}>
          {msg}    
      </Hatch>
      
    );
  } else {
    return (
      <HatchClose key={i}>
        {msg} 
      </HatchClose>
    );
  }
}

export default function Hatches() {

  return Array.from({ length: 24 }).map((_, index) => {
    return <HatchMake i={index + 1} />;
     });
}

