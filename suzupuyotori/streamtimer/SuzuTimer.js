//timer code is based on W3Schools: https://www.w3schools.com/howto/howto_js_countdown.asp
//and stackoverflow answer: https://stackoverflow.com/questions/40263537/javascript-countdown-timer-in-gmt-utc

//stackoverflow abt just hh:mm:ss timer: https://stackoverflow.com/questions/55135423/i-need-only-hours-minutes-and-seconds-for-countdown

var countDownDate = new Date("Nov 26, 2022 20:00:00 GMT-05:00").getTime(); //must be 24hr format

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-1);
  var hours = ("0" + Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24)).slice(-2);
  var minutes = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var seconds = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

  document.getElementById("suzuHrs").innerHTML = hours;
  document.getElementById("suzuMinsSecs").innerHTML = minutes + " : " + seconds;

  if (distance <= 0) {

    clearInterval(x);

    document.getElementById("suzuHrs").innerHTML = "00";
    document.getElementById("suzuMinsSecs").innerHTML = "00 : 00";
    
  }
}, 1000);