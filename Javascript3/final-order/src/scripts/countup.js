export default function countUp() {

  let now = new Date().getTime();
    
  let difference = 1608850800000 - now

  let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  return totalDays
}


