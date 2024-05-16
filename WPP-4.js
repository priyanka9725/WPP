// WPP_4

// Write a JavaScript program to calculate the days left before Christmas.

today = new Date();

let cmasDay = new Date(today.getFullYear(), 11, 25);

today > cmasDay ? cmasDay.setFullYear(year + 1) : cmasDay;

const theDay = 24 * 60 * 60 * 1000;
const daysLeft = Math.round((cmasDay - today) / theDay);

console.log(`There are ${daysLeft} days left for Christmas`);
