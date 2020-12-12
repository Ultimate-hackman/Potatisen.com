export default function staticDay(date) {

    let totalDays = Math.floor((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
    return totalDays
  }