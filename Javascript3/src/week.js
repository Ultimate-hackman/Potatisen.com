
function weekFinder() {
    let month = new Date().getMonth();
    let day = new Date().getDate(); 

    day -= 3.3

    day += 0

    let week = Math.ceil(((month * 30.5) + day) / 7) 


    return week + 1 // + 1 so next week
}

// finds the week-number of the next week 

document.getElementById("week").innerHTML = 'Veckobrev vecka ' + weekFinder()

