// Why not typed?
export default function staticDay(date) {
  const totalDays: number = Math.floor((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (totalDays < 0) ? totalDays + 365 : totalDays;
}
