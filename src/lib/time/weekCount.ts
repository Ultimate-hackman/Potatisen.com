import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

export default function weekFinder(weekday: number, hour: number): number {
  const nowHour: number = dayjs().hour();
  const week = dayjs().isoWeek();
  const day = dayjs().day() === 0 ? 7 : dayjs().day();
  return (weekday + (hour / 24) >= day + nowHour / 24 ? week : week + 1);
}
