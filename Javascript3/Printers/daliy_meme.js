let citat = "hunt or be hunted" 
let transition_citat = "Hey boss!"


let today = new Date();
let date = today.getDate();
let countDownDate = (date += -1)


if (date == countDownDate) {
    meddelande =  "<h1>" + "DAGENS CITAT = " + transition_citat.toUpperCase(); + "</h1>"
    document.write(meddelande);
    console.log("not base")

}  else {
    meddelande =  "<h1>" + "DAGENS CITAT = " + citat.toUpperCase(); + "</h1>"
    console.log("base date")
    document.write(meddelande);
}

