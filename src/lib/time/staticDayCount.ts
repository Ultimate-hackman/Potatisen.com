import mainTime from './mainTime'

export default function staticDay(date) {

    let totalDays: number = Math.floor((new Date(date).getTime() - mainTime().getTime()) / (1000 * 60 * 60 * 24));

    if (totalDays < 0) {
      return totalDays + 365
    } else {
      return totalDays
    }
  }