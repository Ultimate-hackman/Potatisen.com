export default function colorFinder(subject: string, opacity: number): string {
  const choiceLanguage = `rgba(225, 200, 0, ${opacity})`;

  switch (subject?.toUpperCase()) {
    case "NO":
      return `rgba(21, 231, 21, ${opacity})`;
    case "TK":
      return `rgba(38, 166, 91, ${opacity})`;
    case "SO":
      return `rgba(29, 27, 27, ${opacity})`;
    case "MA":
      return `rgba(0, 120, 255, ${opacity})`;
    case "SV":
      return `rgba(255, 255, 51, ${opacity})`;
    case "EN":
      return `rgba(225, 0, 0, ${opacity})`;
    case "BI":
      return `rgba(102, 51, 153, ${opacity})`;
    case "TY":
      return choiceLanguage;
    case "SP":
      return choiceLanguage;
    case "FR":
      return choiceLanguage;
    case "NOTEST":
      return "rgba(0, 0, 0, 0)";
    default:
      return "rgba(255, 200, 0)";
  }
}
