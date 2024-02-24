import dayjs from "dayjs";

export default function getDate(date) {
  return dayjs(date).fromNow();
}
