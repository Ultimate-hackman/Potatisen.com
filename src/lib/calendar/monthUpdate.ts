import dayjs from "dayjs";

export default function monthUpdate(i, currentMonth) {
  const array = [];

  if (i > dayjs(new Date()).daysInMonth()) {
    array.push(i -= dayjs(new Date()).daysInMonth());

    if (currentMonth === 11) {
      array.push(currentMonth -= 11);
    }

    if (currentMonth != 11) {
      array.push(currentMonth += 1);
    }
  }

  if (i <= dayjs(new Date()).daysInMonth() && i > 0) {
    array.push(i);
    array.push(currentMonth);
  }

  if (i <= 0) {
    array.push(dayjs(new Date()).daysInMonth() + i);
    if (currentMonth === 0) {
      array.push(currentMonth + 11);
    } else {
      array.push(currentMonth - 1);
    }
  }

  return array;
}
