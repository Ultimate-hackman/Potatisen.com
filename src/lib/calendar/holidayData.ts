import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { firestore } from "../firebase/firebase";

export interface Holiday {
  start: Date;
  end: Date;
}

export type Holidays = Holiday[];

function useHolidayData(): Holiday[] {
  const [totalData, setTotalData] = useState<Holiday[]>([]);

  useEffect(() => {
    firestore
      .collection("holidays")
      .get()

      .then((snapshot) => {
        setTotalData(snapshot.docs.map((doc): Holiday => {
          const data = doc.data();
          console.log("sadaas");

          return {
            start: data.start?.toDate(),
            end: data.end?.toDate(),
          };
        }));
      });
  }, []);
  return totalData;
}

export default useHolidayData;
