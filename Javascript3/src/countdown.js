function wencesAttack(date) {
    let past = new Date(date).getTime(); 

    setInterval(function() {
        let now = new Date().getTime();

        let difference = now - past

        totalHour = Math.floor(difference / (1000 * 60 * 60));
        totalMinutes = Math.floor((difference / 1000) / 60);

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((((difference / 1000) / 60) / 60) - days * 24);
        let minutes = Math.floor(((difference / 1000) / 60) - totalHour * 60);
        let seconds = Math.floor((difference / 1000) - totalMinutes * 60);
      

         document.getElementById("countdown").innerHTML = 'Online sedan: ' + days + ' dagar, ' + hours + ' timmar, ' + minutes + ' minuter, '+ seconds + ' sekunder' 
    }, 1000)


}

wencesAttack("sep 13, 2020 18:27:30")

