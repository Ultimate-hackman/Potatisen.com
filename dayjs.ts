import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";

dayjs.extend(updateLocale);

dayjs.updateLocale("sv", {
  weekStart: 1,
});
