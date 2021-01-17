

import totalMonth from '../time/totalMonth'


export default function stressPT(ugg, language, totalData, day) {
    let time = new Array()
    let totalPt: number = 0
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();


    for (const c in totalData) {

      let testTime = new Date((totalData[c][0] + " ").split(',')[0])

      
        let current: number = day + (currentYear * 365) + totalMonth(currentMonth);

        let target: number = testTime.getDate() + (testTime.getFullYear() * 365) + totalMonth(testTime.getMonth())


        let distance =  target - current


        if (distance >= 0 && (totalData[c][3] === ugg || totalData[c][1] === language || totalData[c][3] === "alla")  && current <= target ) {
            
            time.push(distance) 
            if (100 - distance > 0) {
              totalPt += 100 - distance 
            }
          
        }
        
    }

 
    
    time.sort((a, b) => a- b)

    return [time, totalPt]
    
}