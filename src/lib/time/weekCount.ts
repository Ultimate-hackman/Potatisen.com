import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

export default function weekFinder(weekday: number, hour: number): number {
  const nowHour: number = dayjs().hour();
  const week = dayjs().isoWeek();
  const day = dayjs().day() === 0 ? 7 : 8
  return (weekday + (hour / 24) >= day + nowHour ? week : week + 1);
}
