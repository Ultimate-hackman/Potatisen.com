import dayjs from "dayjs";

function daysLeftText(timestamp: any): string {
  const daysLeft = dayjs(timestamp).set("hour", 24).diff(dayjs(), "day", true);
  const daysLeftAdapted = daysLeft < 0 ? Math.floor(daysLeft) : Math.floor(daysLeft);
  const förrgårCase = -2;
  if (daysLeftAdapted >= förrgårCase) {
    switch (daysLeftAdapted) {
      case förrgårCase:
        return "Förrgår";
      case -1:
        return "Igår";
      case 0:
        return "Idag";
      case 1:
        return "Imorgon";
      case 2:
        return "Övermorgon";
      default:
        return `${daysLeftAdapted} dagar kvar`;
    }
  }
}

export default daysLeftText;
