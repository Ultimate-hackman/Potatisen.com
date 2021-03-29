import Language from "../types/Language";
import Ugg from "../types/Ugg";

export interface Test {
  ugg?: Ugg;
  language?: Language;
  title: string;
}

export default function filterTests(test: Test, ugg: Ugg, language: Language): boolean {
  if (test.ugg && test.ugg !== ugg) {
    return false;
  }

  if (test.language && test.language !== language) {
    return false;
  }

  return true;
}
