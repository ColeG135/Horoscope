var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer",
    "Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];

var messages = ["You will have lots of fun","There is a challenge coming your way","Good things are in your future",
    "Someone in your family is thinking of you", "Great fortune is coming your way soon", "Don't underestimate yourself",
    "You will either need or give help to and from a friend","after minsfortune there is fortune","Don't let the little things get to you",
    "Remember what goes up must come back down","To go forward you must sometimes go back","Don't get ahead of yourself"];

var images = ["images/aquarius.jpg","images/Pisces.jpg", "images/Pisces.jpg",
    "image/Aries.jpg","images/Aries.jpg","images/Taurus.jpg", "images/Gemini.jpg",
    "images/Cancer.jpg","images/leo.jpg","images/Virgo.jpg","images/Libra.jpg",
    "images/Scorpio.jpg","images/Sagittarius","images/Capricorn.jpg"];

function start() {

    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    //console.log(month)
    //console.log(day)

    var sign = determineSign(month,day);

    console.log(sign);

    document.getElementById("sign").innerHTML = signs[sign];
    document.getElementByid("message").innerHTML = messages[sign];

}

function determineSign (month,day) {

    if((month == 0 && day <  21)) {
        return 0;
    }
}
