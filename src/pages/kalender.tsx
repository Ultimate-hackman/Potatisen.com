import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import Select from "react-select";
import Header from "../components/header";
import Title from "../styles/title";
import getStressPoints from "../lib/calendar/getStressPoints";
import GlobalStyle from "../theme/GlobalStyles";
import ClassChart from "../components/calendar/classChart";
import LineChart from "../components/calendar/lineChart";
import Btn from "../styles/btn";
import useTestData from "../lib/calendar/testData";
import Ugg from "../lib/types/Ugg";
import Language from "../lib/types/Language";
import Calendar from "../components/calendar/Calendar";

const uggarOption = [
  { value: "O91", label: "O91" },
  { value: "O92", label: "O92" },
  { value: "O93", label: "O93" },
];

const languageOption = [
  { value: "TY", label: "Tyska" },
  { value: "FR", label: "Franska" },
  { value: "SP", label: "Spanska (AAV)" },
  { value: "SP", label: "Spanska (CTH)" },
  { value: "ASVEN", label: "ASVEN" },
];

const Popup = styled.div`
  display: ${(props) => props.display};
  
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 1px 1px 8px 6px rgba(39, 39, 39, 0.096);
  padding: 1rem;

  
`;

const Selection = styled(Select)`
    width: 20vh;
    margin-left: 1rem ;


`;
const Bar = styled.ul`
    padding-top: 1vh;
    display: flex;
    margin-left: 20vw;
    overflow: visible;

    @media only screen and (max-height: 768px) {
      margin-left: 15vw;
    }
    
`;

const PadButton = styled(Btn)`
margin-top: 1vh;
padding: 1.5vh 1vw;
font-size: 0.75em;
`;

const Array = styled.div`
display: flex;
justify-self: auto;
grid-column-gap: 2vh; 
`;

function labelFind(lan) {
  const list = [languageOption[0].value, languageOption[1].value, languageOption[2].value, languageOption[3].value, languageOption[4].value];
  return list.indexOf(lan);
}
export default function Kalender(): JSX.Element {
  const [multiTest, setMultiTest] = useState("none");

  const [ugg, setUgg] = useState<Ugg>("O91");
  const [language, setLanguage] = useState<Language>("TY");

  // Json! (localStorage)
  const temp_Json = {
    studentValues: {
      ugg,
      language,
    },
  };

  useEffect(() => {
    if (localStorage.getItem("StudentData") !== null) {
      const studentDeserialized = JSON.parse(localStorage.getItem("StudentData")).studentValues;
      setLanguage(studentDeserialized.language);
      setUgg(studentDeserialized.ugg);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("StudentData", JSON.stringify(temp_Json));
  }, [ugg, language]);

  const importTestData = useTestData(ugg, language);

  const stress = getStressPoints(importTestData, dayjs());

  type Emoji = "😎" | "🙂" | "😕" | "😬" | "😟" | "😡" | "🤬";

  function defcon(inputStress: number, base: number, incr: number): Emoji {
    const emojiArray: Emoji[] = ["😎", "🙂", "😕", "😬", "😟", "😡", "🤬"];

    for (let i = 0; i <= emojiArray.length; i += 1) {
      if (inputStress <= (incr * i) + base) {
        return emojiArray[i];
      } if (inputStress >= (incr * emojiArray.length) + base) {
        return emojiArray[emojiArray.length - 1];
      }
    }
  }

  return (
    <>
      <GlobalStyle />

      <Header title="Provschema" />

      <Title top="0vh">
        Provschema
      </Title>
      <Title sub top="0vh">
        Här kan du snabbt kolla kommande prov
        {" "}
        {defcon(stress, 200, 200)}
        {" "}
        (
        {stress}
        )
        {" "}
        <small>beta*🧪</small>
      </Title>

      <Bar>

        <Selection isSearchable={false} options={uggarOption} value={{ label: ugg }} onChange={(prop) => setUgg(prop.value)} />
        <Selection isSearchable={false} options={languageOption} value={{ label: languageOption[labelFind(language)].label }} onChange={(prop) => setLanguage(prop.value)} />
      </Bar>

      <Popup display={multiTest}>
        {" "}
        <Array>
          {" "}
          {multiTest}
        </Array>
        <PadButton onClick={() => setMultiTest("none")}>Stäng</PadButton>
      </Popup>

      <Calendar state={setMultiTest} data={importTestData} days={24} />

      <ClassChart data={importTestData} language={language} />
      <LineChart data={importTestData} span={24} ugg={ugg} language={language} />

    </>
  );
}
