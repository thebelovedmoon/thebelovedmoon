//timer code is based on W3Schools: https://www.w3schools.com/howto/howto_js_countdown.asp
//and stackoverflow answer: https://stackoverflow.com/questions/40263537/javascript-countdown-timer-in-gmt-utc

var countDownDate = new Date("Nov 26, 2022 20:00:00 GMT-05:00").getTime(); //must be 24hr format

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
  var hours = (
    "0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).slice(-2);
  var minutes = (
    "0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).slice(-2);
  var seconds = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

  document.getElementById("suzuTimer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  if (distance <= 0) {
    clearInterval(x);

    document.getElementById("suzuTimer").innerHTML = "00d 00h 00m 00s";

    setTimeout("debut()");
  }
}, 1000);

function debut() {
  window.location = "https://twitch.tv/SuzuPuyotori";
}