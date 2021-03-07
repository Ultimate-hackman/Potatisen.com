import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

export default function weekFinder(weekday: number, hour: number): number {
  const nowHour: number = new Date().getHours();
  const week = dayjs().isoWeek();
  const day = dayjs().locale("sv");
  return (weekday + (hour / 24) >= day.date() + (nowHour / 24)) ? week : week + 1;
}
