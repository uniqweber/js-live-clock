const showTime = document.getElementById("time");
const showHours = document.getElementById("hours");
const showMinutes = document.getElementById("minutes");
const showSeconds = document.getElementById("seconds");
const showAMorPM = document.getElementById("am-pm");
const showDate = document.getElementById("date");
const showDay = document.getElementById("day");
const showMonth = document.getElementById("month");
const showYear = document.getElementById("year");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

  //   date, day, month year
  showDate.innerText = String(now.getDate()).padStart(2, "0");
  showDay.innerText = daysOfWeek[now.getDay()];
  showMonth.innerText = months[now.getMonth()];
  showYear.innerText = String(now.getFullYear());

  //   Determine AM or PM
  if (hours >= 12) {
    showAMorPM.innerText = "PM";
  } else {
    showAMorPM.innerText = "AM";
  }
}, 1000);
