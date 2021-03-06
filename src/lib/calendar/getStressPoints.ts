import { Dayjs } from "dayjs";
import { Test } from "./testData";

export function stressPointsByDistance(distance: number): number {
  const x = 100 - distance;

  const y = (10 * x + 1.09 ** x) / 10;

  return Math.max(y, 0); // Never less than 0
}

export default function getStressPoints(tests: Test[], day: Dayjs): number {
  return tests.reduce((totalStressPoints, test) => {
    const distance = -day.diff(test.timestamp, "day");
    if (distance >= 0 && test.timestamp !== undefined) {
      return totalStressPoints + Math.round(stressPointsByDistance(distance));
    }

    return totalStressPoints;
  }, 0);
}
