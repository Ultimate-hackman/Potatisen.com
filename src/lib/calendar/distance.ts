import totalMonth from '../time/totalMonth'

function distanceGen(year, month, day, orgin, i) {
   let target = (year * 365) + totalMonth(month) + day
   let current = (orgin.getFullYear() * 365) + totalMonth(orgin.getMonth()) + i

    return target - current


}
export default distanceGen