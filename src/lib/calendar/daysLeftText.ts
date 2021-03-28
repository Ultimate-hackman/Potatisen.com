import dayjs from "dayjs";

function daysLeftText(timestamp: any): string {
  const daysLeft = Math.ceil(dayjs(timestamp).diff(dayjs(), "day", true));
  if (daysLeft > -2) {
    switch (daysLeft) {
      case -2:
        return "förrgår";
        break;
      case -1:
        return "igår";
        break;
      case 0:
        return "idag";
        break;
      case 1:
        return "imorgon";
        break;
      case 2:
        return "övermorgon";
        break;
      default:
        return `${daysLeft} dagar kvar`;
        break;
    }
  }
}

export default daysLeftText;
