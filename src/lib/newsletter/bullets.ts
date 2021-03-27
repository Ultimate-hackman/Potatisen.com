import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { firestore } from "../firebase/firebase";

export interface Bullet {
  terminate: Date;
  bullet: string;
}

function useBulletData(): string[] {
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    firestore
      .collection("news")
      .get()

      .then((snapshot) => {
        setTotalData(snapshot.docs.map((doc): string => {
          const data = doc.data();

          if (dayjs().isBefore(data.terminate) || data.terminate === undefined) {
            return `-${data.name}`;
          }
          return undefined;
        }));
      });
  }, []);

  return totalData;
}

export default useBulletData;
