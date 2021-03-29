import { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase";
import Language from "../types/Language";
import Subject from "../types/Subject";
import Ugg from "../types/Ugg";
import filterTests from "./filterTests";

export interface Test {
  timestamp: Date;
  ugg?: Ugg;
  language?: Language;
  subject?: Subject;
  title: string;
  bias?: number;
}

export type Tests = Test[];

function useTestData(ugg?: Ugg, language?: Language): Test[] {
  const [totalData, setTotalData] = useState<Test[]>([]);

  useEffect(() => {
    firestore
      .collection("prov")
      .get()

      .then((snapshot) => {
        setTotalData(snapshot.docs.map((doc): Test => {
          const data = doc.data();

          return {
            timestamp: data.timestamp?.toDate(),
            ugg: data.ugg,
            language: data.language,
            title: data.title,
            subject: data.subject,
            bias: data.bias,
          };
        }));
      });
  }, []);

  return totalData.filter((test) => filterTests(test, ugg, language));
}

export default useTestData;
