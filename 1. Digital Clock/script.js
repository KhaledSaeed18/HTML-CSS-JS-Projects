var hourEl = document.getElementById('hour');
var minutesEl = document.getElementById('minute');
var secondsEl = document.getElementById('second');
var ampmEl = document.getElementById('ampm');
var dayEl = document.getElementById('day');
var monthEl = document.getElementById('month');
var yearEl = document.getElementById('year');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? ("0" + h) : h;
    m = m < 10 ? ("0" + m) : m;
    s = s < 10 ? ("0" + s) : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}

function updateDate() {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    day = day < 10 ? ("0" + day) : day;
    month = month < 10 ? ("0" + month) : month;

    dayEl.innerText = day;
    monthEl.innerText = month;
    yearEl.innerText = year;
}

updateClock();
updateDate();


