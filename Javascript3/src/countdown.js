function wencesAttack(date) {
    let target = new Date(date).getTime(); 

    setInterval(function() {
        let now = new Date().getTime();

        let difference = now - target

        totalHour = Math.floor(difference / (1000 * 60 * 60));
        totalMinutes = Math.floor((difference / 1000) / 60);

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((((difference / 1000) / 60) / 60) - days * 24);
        let minutes = Math.floor(((difference / 1000) / 60) - totalHour * 60);
        let seconds = Math.floor((difference / 1000) - totalMinutes * 60);
      

         document.getElementById("countdown").innerHTML = 'Online sedan: ' + String(days) + ' dagar, ' + String(hours) + ' timmar, ' + String(minutes) + ' minuter, '+ String(seconds) + ' sekunder' 
    }, 1000)


}

wencesAttack("sep 13, 2020 17:37:25")

