const showTime = document.getElementById("time");
const showHours = document.getElementById("hours");
const showMinutes = document.getElementById("minutes");
const showSeconds = document.getElementById("seconds");
const showAMorPM = document.getElementById("am-pm");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(() => {
  const now = new Date();

  // get hours minutes and seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // add leading zero to seconds, minutes, and hours if needed
  showHours.innerText = String(hours).padStart(2, "0");
  showMinutes.innerText = String(minutes).padStart(2, "0");
  showSeconds.innerText = String(seconds).padStart(2, "0");

  //   Determine AM or PM
  if (hours >= 12) {
    showAMorPM.innerText = "PM";
  } else {
    showAMorPM.innerText = "AM";
  }
}, 1000);
