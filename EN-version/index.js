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

function setCurrentTime() {
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
  var sixHour = document.querySelector(".six-hour");
  var sevenHour = document.querySelector(".seven-hour");
  var eightHour = document.querySelector(".eight-hour");
  var nineHour = document.querySelector(".nine-hour");
  var tenHour = document.querySelector(".ten-hour");
  var elevenHour = document.querySelector(".eleven-hour");
  var twelveHour = document.querySelector(".twelve-hour");

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

  var eFn = document.querySelector(".eleven-fifteen-nineteen");
  var twS = document.querySelector(".twleve-sixteen");
  var thS = document.querySelector(".thirteen-seventeen");
  var foE = document.querySelector(".fourteen-eighteen");

  var firstDigitHour = currentTime.charAt(0);
  var secondDigitHour = currentTime.charAt(1);
  var currentHour = firstDigitHour + secondDigitHour;

  var firstDigitMinute = currentTime.charAt(3);
  var secondDigitMinute = currentTime.charAt(4);
  var currentMinute = firstDigitMinute + secondDigitMinute;

  // timeDOM.textContent = currentTime;
  dayColor();
  hourColor();
  minuteColor();

  function dayColor() {
    if (currentTime.charAt(9) === "p") {
      night.setAttribute("style", "color: #B29DD9;");
    } else {
      day.setAttribute("style", "color: #FDFD98;");
    }
  }

  function hourColor() {
    switch (currentHour) {
      case "01":
        tenHour.removeAttribute("style");
        twoHour.removeAttribute("style");
        oneHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "02":
        oneHour.removeAttribute("style");
        twoHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "03":
        twoHour.removeAttribute("style");
        threeHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "04":
        threeHour.removeAttribute("style");
        fourHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "05":
        fourHour.removeAttribute("style");
        fiveHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "06":
        fiveHour.removeAttribute("style");
        sixHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "07":
        sixHour.removeAttribute("style");
        sevenHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "08":
        sevenHour.removeAttribute("style");
        eightHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "09":
        eightHour.removeAttribute("style");
        nineHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "10":
        nineHour.removeAttribute("style");
        tenHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "11":
        tenHour.removeAttribute("style");
        elevenHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
      case "12":
        elevenHour.removeAttribute("style");
        twelveHour.setAttribute("style", "color: #FFB9C4;");
        hour.setAttribute("style", "color: #FFB9C4;");
        break;
    }
  }

  function minuteColor() {
    switch (firstDigitMinute) {
      case "0":
        fiftyMinute.removeAttribute("style");
        break;
      case "1":
        tenMinute.setAttribute("style", "color: #FECE76;");
        break;
      case "2":
        tenMinute.removeAttribute("style");
        eFn.removeAttribute("style");
        twentyMinute.setAttribute("style", "color: #FECE76;");
        break;
      case "3":
        twentyMinute.removeAttribute("style");
        thiryMinute.setAttribute("style", "color: #FECE76;");
        break;
      case "4":
        thiryMinute.removeAttribute("style");
        fourtyMinute.setAttribute("style", "color: #FECE76;");
        break;
      case "5":
        fourtyMinute.removeAttribute("style");
        fiftyMinute.setAttribute("style", "color: #FECE76;");
        break;
    }

    switch (secondDigitMinute) {
      case "0":
        minuteNine.removeAttribute("style");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "1":
        minuteOne.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "2":
        minuteOne.removeAttribute("style");
        minuteTwo.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "3":
        minuteTwo.removeAttribute("style");
        minuteThree.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "4":
        minuteThree.removeAttribute("style");
        minuteFour.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "5":
        minuteFour.removeAttribute("style");
        minuteFive.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "6":
        minuteFive.removeAttribute("style");
        minuteSix.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "7":
        minuteSix.removeAttribute("style");
        minuteSeven.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "8":
        minuteSeven.removeAttribute("style");
        minuteEight.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
      case "9":
        minuteEight.removeAttribute("style");
        minuteNine.setAttribute("style", "color: #6caa91;");
        minute.setAttribute("style", "color: #6caa91;");
        break;
    }

    if (firstDigitMinute === "0" && secondDigitMinute === "0") {
      minute.removeAttribute("style");
    } 

    if (firstDigitMinute === "1" && secondDigitMinute === "1") {
      tenMinute.removeAttribute("style");
      minuteOne.removeAttribute("style");
      eFn.textContent = "Eleven";
      eFn.setAttribute("style", "color: #6caa91; ");
    }

    if (firstDigitMinute === "1" && secondDigitMinute === "2") {
      tenMinute.removeAttribute("style");
      minuteTwo.removeAttribute("style");
      eFn.removeAttribute("style");
      twS.textContent = "Twelve";
      twS.setAttribute("style", "color: #6caa91; ");
    }

    if (firstDigitMinute === "1" && secondDigitMinute === "3") {
      tenMinute.removeAttribute("style");
      minuteThree.removeAttribute("style");
      twS.removeAttribute("style");
      thS.textContent = "Thirteen";
      thS.setAttribute("style", "color: #6caa91; ");
    }

    if (firstDigitMinute === "1" && secondDigitMinute === "4") {
      tenMinute.removeAttribute("style");
      minuteFour.removeAttribute("style");
      eFn.removeAttribute("style");
      thS.textContent = "Fourteen";
      foE.setAttribute("style", "color: #6caa91; ");
    }

    if (firstDigitMinute === "1" && secondDigitMinute === "5") {
      tenMinute.removeAttribute("style");
      minuteFive.removeAttribute("style");
      foE.removeAttribute("style");
      eFn.textContent = "Fifteen";
      eFn.setAttribute("style", "color: #6caa91; ");
    }

    if (firstDigitMinute === "1" && secondDigitMinute === "6") {
      tenMinute.removeAttribute("style");
      minuteSix.removeAttribute("style");
      eFn.removeAttribute("style");
      twS.textContent = "Sixteen";
      twS.setAttribute("style", "color: #6caa91; ");
    }

    if (firstDigitMinute === "1" && secondDigitMinute === "7") {
      tenMinute.removeAttribute("style");
      minuteSeven.removeAttribute("style");
      twS.removeAttribute("style");
      thS.textContent = "Seventeen";
      thS.setAttribute("style", "color: #6caa91; ");
    }

    if (firstDigitMinute === "1" && secondDigitMinute === "8") {
      tenMinute.removeAttribute("style");
      minuteEight.removeAttribute("style");
      thS.removeAttribute("style");
      foE.textContent = "Eighteen";
      foE.setAttribute("style", "color: #6caa91; ");
    }

    if (firstDigitMinute === "1" && secondDigitMinute === "9") {
      tenMinute.removeAttribute("style");
      minuteNine.removeAttribute("style");
      foE.removeAttribute("style");
      eFn.textContent = "Nineteen";
      eFn.setAttribute("style", "color: #6caa91; ");
    }

  }
}

var clockUpdate = setInterval(function () {
  setCurrentTime();
}, 1000);

setInterval(clockUpdate, 1000);
