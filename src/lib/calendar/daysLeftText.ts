import dayjs from "dayjs";

function daysLeftText(timestamp: any): string {
  const daysLeft = dayjs(timestamp).set("hour", 24).diff(dayjs(), "day", true);
  const daysLeftAdapted = daysLeft < 1 ? Math.floor(daysLeft) : Math.ceil(daysLeft);
  const förrgårCase = -2;
  if (daysLeftAdapted > förrgårCase) {
    switch (daysLeftAdapted) {
      case förrgårCase:
        return "förrgår";
      case -1:
        return "igår";
      case 0:
        return "idag";
      case 1:
        return "imorgon";
      case 2:
        return "övermorgon";
      default:
        return `${daysLeftAdapted} dagar kvar`;
    }
  }
}

export default daysLeftText;
