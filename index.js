// new Date() creates a Date object representing current date/time
// new Date().valueOf() returns number of milliseconds since midnight 01 January, 1970 UTC
// new Date().getTime() Functionally equivalent to new Date().valueOf()
// Date.now() Functionally equivalent to the 2 methods above

// new Date() - creates a Date object representing the current date/time
// Date.now() - returns the number of milliseconds since midnight 01 January, 1970 UTC

// console.log(Date.now().toString());
// var d = new Date();
// var n = d.toString();
// console.log(d);
// console.log(n);

var localTime = moment.utc().toDate();
var currentTime = moment(localTime).format("hh:mm:ss a MM/DD/YY dddd");
var timeDOM = document.querySelector(".current-time");
var night = document.querySelector(".night");
var day = document.querySelector(".day");
var minute = document.querySelector(".minute-stamp");
var hour = document.querySelector(".hour-stamp");

var oneHour = document.querySelector(".one-hour");
var twoHour = document.querySelector(".two-hour");
var threeHour = document.querySelector(".three-hour");
var fourHour = document.querySelector(".four-hour");
var fiveHour = document.querySelector(".five-hour");
var sevenHour = document.querySelector(".seven-hour");
var eightHour = document.querySelector(".eight-hour");
var nineHour = document.querySelector(".nine-hour");
var tenHour = document.querySelector(".ten-hour");

var mixOneHour = document.querySelector(".six-eight-hour");
var mixTwoHour = document.querySelector(".five-six-hour");

var tenMinute = document.querySelector(".ten-minute");
var twentyMinute = document.querySelector(".twenty-minute");
var thiryMinute = document.querySelector(".thirty-minute");
var fourtyMinute = document.querySelector(".fourty-minute");
var fiftyMinute = document.querySelector(".fifty-minute");

var minuteOne = document.querySelector(".minute-one");
var minuteTwo = document.querySelector(".minute-two");
var minuteThree = document.querySelector(".minute-three");
var minuteFour = document.querySelector(".minute-four");
var minuteFive = document.querySelector(".minute-five");
var minuteSix = document.querySelector(".minute-six");
var minuteSeven = document.querySelector(".minute-seven");
var minuteEight = document.querySelector(".minute-eight");
var minuteNine = document.querySelector(".minute-nine");

var firstDigitHour = currentTime.charAt(0);
var secondDigitHour = currentTime.charAt(1);
var currentHour = firstDigitHour + secondDigitHour;

var firstDigitMinute = currentTime.charAt(3);
var secondDigitMinute = currentTime.charAt(4);
var currentMinute = firstDigitMinute + secondDigitMinute;

// function setCurrentTime() {
//   timeDOM.textContent = currentTime;
// }

function dayColor() {
  if (currentTime.indexOf("pm")) {
    night.setAttribute("style", "color: #B29DD9;");
  } else {
    day.setAttribute("style", "color: #FDFD98;");
  }
}

function hourColor() {
  switch (currentHour) {
    case "01":
      oneHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "02":
      twoHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "03":
      threeHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "04":
      fourHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "05":
      fiveHour.setAttribute("style", "color: #FFB9C4;");
      mixTwoHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "06":
      mixTwoHour.setAttribute("style", "color: #FFB9C4;");
      mixOneHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "07":
      sevenHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "08":
      mixOneHour.setAttribute("style", "color: #FFB9C4;");
      eightHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "09":
      nineHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "10":
      tenHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "11":
      tenHour.setAttribute("style", "color: #FFB9C4;");
      oneHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
    case "12":
      tenHour.setAttribute("style", "color: #FFB9C4;");
      twoHour.setAttribute("style", "color: #FFB9C4;");
      hour.setAttribute("style", "color: #FFB9C4;");
      break;
  }
}

function minuteColor() {
  switch (firstDigitMinute) {
    case "1":
      tenMinute.setAttribute("style", "color: #FECE76;");
      break;
    case "2":
      twentyMinute.setAttribute("style", "color: #FECE76;");
      tenMinute.setAttribute("style", "color: #FECE76;");
      break;
    case "3":
      thiryMinute.setAttribute("style", "color: #FECE76;");
      tenMinute.setAttribute("style", "color: #FECE76;");
      break;
    case "4":
      fourtyMinute.setAttribute("style", "color: #FECE76;");
      tenMinute.setAttribute("style", "color: #FECE76;");
      break;
    case "5":
      fiftyMinute.setAttribute("style", "color: #FECE76;");
      tenMinute.setAttribute("style", "color: #FECE76;");
      break;
  }

  switch (secondDigitMinute) {
    case "0":
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "1":
      minuteOne.setAttribute("style", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "2":
      minuteTwo.setAttribute("style", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "3":
      minuteThree.setAttribute("style", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "4":
      minuteFour.setAttribute("style", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "5":
      minuteFive.setAttribute("style", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "6":
      minuteSix.setAttribute("style", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "7":
      minuteSeven.setAttribute("style", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "8":
      minuteEight.setAttribute("style", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
    case "9":
      minuteNine.setAttribute("sytle", "color: #6caa91;");
      minute.setAttribute("style", "color: #6caa91;");
      break;
  }
}

var clockUpdate = setInterval(function () {
//   setCurrentTime();
  dayColor();
  hourColor();
  minuteColor();
}, 1000);

setInterval(clockUpdate, 10000);