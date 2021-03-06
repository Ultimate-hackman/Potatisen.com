import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

export default function weekFinder(weekday: number, hour: number): number {
  const nowHour: number = new Date().getHours();
  const week = dayjs().isoWeek();

  return (weekday + (hour / 24) >= new Date().getDay() + (nowHour / 24)) ? week : week + 1;
}
