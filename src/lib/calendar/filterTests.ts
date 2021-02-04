import Language from "../types/Language";
import Ugg from "../types/Ugg";
import { Tests } from "./testData";

export default function filterTests(tests: Tests, ugg: Ugg, language: Language): Tests {
  return tests.filter((test) => {
    if (test.ugg && test.ugg !== ugg) {
      return false;
    }

    if (test.language && test.language !== language) {
      return false;
    }

    return true;

    // if (totalData[c][3] === ugg || totalData[c][1] === language || totalData[c][3] === "alla")
  });
}

    