const checkLeap = (year) =>
  console.log(year % 400 == 0
    ? "Leap Year"
    : year % 100 == 0
    ? "Not Leap year"
    : year % 4 == 0
    ? "Leap Year"
    : "Not Leap Year");

checkLeap(2025);