var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer",
    "Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];

var messages = ["You will have lots of fun","There is a challenge coming your way","Good things are in your future",
    "Someone in your family is thinking of you", "Great fortune is coming your way soon", "Don't underestimate yourself",
    "You will either need or give help to and from a friend","after minsfortune there is fortune","Don't let the little things get to you",
    "Remember what goes up must come back down","To go forward you must sometimes go back","Don't get ahead of yourself"];

var image = ["images/aquarius.jpg","images/Pisces.jpg", "image/Aries.jpg","images/Taurus.jpg", "images/Gemini.jpg",
    "images/Cancer.jpg","images/Leo.jpg","images/Virgo.jpg","images/Libra.jpg",
    "images/Scorpio.jpg","images/Sagittarius.jpg","images/Capricorn.jpg"];


function start() {

    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    //console.log(month)
    //console.log(day)

    var sign = determineSign(month,day);

    console.log(sign);

    document.getElementById("sign").innerHTML = signs[sign];
    document.getElementById("message").innerHTML = messages[sign];

}

function determineSign (month,day) {

    if(month == 1 && day <  21 ||  18 ) {
        return 0;
    }
    if(month == 2 && day < 19 || 20) {
        return 1;
    }
    if(month == 3 && day < 21 || 19) {
        return 2;
    }
    if(month == 4 && day < 21 || 1) {
        return 3;
    }
    if(month == 5 && day < 21) {
        return 4;
    }
    if(month == 6 && day < 21) {
        return 5;
    }
    if(month == 7 && day < 21) {
        return 6;
    }
    if(month == 8 && day < 21) {
        return 7;
    }
    if(month == 9 && day < 21) {
        return 8;
    }
    if(month == 10 && day < 21) {
        return 9;
    }
    if(month == 11 && day < 21) {
        return 10;
    }
    if(month == 12 && day < 21) {
        return 11;
    }
}

function image() {
    if(month == 1) {
        return "image/aquarius.jpg";
    }
    if(month == 2) {
        return "image/Pisces.jpg";
    }
    if(month == 3) {
        return "image/Aries.jpg";
    }
    if(month == 4) {
        return "image/Taurus.jpg";
    }
    if(month == 5) {
        return "image/Gemini.jpg";
    }
    if(month == 6) {
        return "image/Cancer.jpg";
    }
    if(month == 7) {
        return "image/Leo.jpg";
    }
    if(month == 8) {
        return "image/Virgo.jpg";
    }
    if(month == 9) {
        return "image/Libra.jpg";
    }
    if(month == 10) {
        return "image/Scorpio.jpg";
    }
    if(month == 11) {
        return "image/Sagittarius.jpg";
    }
    if(month == 12) {
        return "image/Capricorn.jpg";
    }
}

//Aquarius January 20 - February 18
//Pisces February 19 - March 20
//Aries March 21 - April 19
//Taurus April 20 - May 20
//Gemini May 21 - June 20
//Cancer June 21 - July 22
//Leo July 23 - August 22
//Virgo August 23 - September 22
//Libra September 23 - October 22
//Scorpio October 23 - November 21
//Sagittarius November 22 - December 21
//Carpricorn December 22 - January 19
