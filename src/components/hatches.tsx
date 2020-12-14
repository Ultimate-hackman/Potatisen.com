import "firebase/database";
import countUp from "../lib/time/staticDayCount";
import useDownloadUrl from "../lib/firebase/useDownloadUrl";
import styled from "styled-components";
import Title from '../styles/title'

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
  padding-top: 0.1vh;
`

function HatchMake({ i }) {

  const src = useDownloadUrl(`kalender/${i}.jpg`);
  
  let day = 24 - countUp("dec 25, 2020 00:00:00");

  day += 1

  let emoji: string = "";
  let alert: string = "";

  let array = [15, 16, 17]

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

  if(i> 14 && i<18 && i >= day) {
    emoji += "📡";
    alert += "distansundervisning"
  }

  let msg = (  
  <>
    <Text>
      Dag {i} {emoji} 
    </Text>
    <small>{alert}</small>
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

