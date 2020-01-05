//==========DATES & TIMES===================
//Dates are a type of an object

// const now = new Date();

// console.log(now);
// console.log(typeof now);

// // year, months, day, times
// console.log("getFullYear:", now.getFullYear());
// console.log("getMonth:", now.getMonth());
// console.log("getDate:", now.getDate());
// console.log("getDay:", now.getDay());
// console.log("getHours:", now.getHours());
// console.log("getMinutes:", now.getMinutes());
// console.log("getSeconds:", now.getSeconds());

// //Timestamps

// console.log("Timestamp:", now.getTime());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

//========== TIME STAMPS ==========

// const before = new Date("February 1 2019 7:30:59");
// const now = new Date();

// console.log(now.getTime(), before.getTime())

// const diff = now.getTime() - before.getTime();

// console.log(diff);

// const minutes = Math.round(diff / 1000 / 60);
// const hours = Math.round(diff / 1000 / 60 / 60);
// const days = Math.round(diff / 1000 / 60 / 60 / 24);

// console.log(minutes, hours, days)

// //==========Converting Timestamps to Date Objects=========
// const timestamp = 1438532934557;
// console.log(new Date(timestamp));

//==========CREATING A CLOCK================

// const clockDiv = document.querySelector(".clock");

// const tick = () => {

//     const now = new Date();

//     const h = now.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2});
//     const m = now.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
//     const s = now.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});

//     const html = `Time ${h}:${m}:${s}`

//     clockDiv.innerHTML = html;
//     clockDiv.style.fontSize = "32px"

// }

// setInterval(tick, 1000);

//==============DATE FNS ====================
// const now = new Date();

// console.log(dateFns.isToday(now));

// //Format Dates

// console.log(dateFns.format(now,"D MMMM YYYY"))

// //Compare Dates
// const before = new Date("February 1 2019 12:00:00");

// console.log(dateFns.distanceInWords(now, before))

