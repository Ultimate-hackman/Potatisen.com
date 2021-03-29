import dayjs from "dayjs";

function daysLeftText(timestamp: any): string {
  const daysLeft = dayjs(timestamp).diff(dayjs(), "day", true);
  const daysLeftAdapted = daysLeft < 1 ? Math.floor(daysLeft) : Math.ceil(daysLeft);
  if (daysLeftAdapted > -2) {
    switch (daysLeftAdapted) {
      case -2:
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
