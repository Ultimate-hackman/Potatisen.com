
import distanceGen from './distance'

export default function stressPT(ugg, language, totalData, day) {
    let time = new Array()
    let totalPt: number = 0


    for (const c in totalData) {

      let testTime = new Date((totalData[c][0] + " ").split(',')[0])


      let distance = distanceGen(testTime.getFullYear(), testTime.getMonth(),testTime.getDate(), new Date(), day)

        if (distance >= 0 && (totalData[c][3] === ugg || totalData[c][1] === language || totalData[c][3] === "alla")) {
            
            time.push(distance) 
            if (100 - distance >= 0) {
              totalPt += (100 - distance) 
            }
          
        }
        
    }
    
    time.sort((a, b) => a- b)

    return [time, totalPt]
    
}
