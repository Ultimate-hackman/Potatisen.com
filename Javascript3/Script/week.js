
function weekFinder() {
    let month = new Date().getMonth();
    let day = new Date().getDate();

    let week = Math.ceil(((month * 30.5) + day) / 7) + 1

    return week
}

// finds the week-number of the next week 

document.getElementById("week").innerHTML = 'Veckobrev vecka ' + weekFinder()
