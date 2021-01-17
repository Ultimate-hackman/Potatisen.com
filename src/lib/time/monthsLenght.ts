let year: number = new Date().getFullYear()
let monthsLenghts: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) === true) {
    monthsLenghts[1] = 29 
}

export default monthsLenghts