var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
dp = {};

numbers = numbers.filter((num) => {
  if (dp[num]) return false;
  else {
    dp[num] = num;
    return true;
  }
});
console.log(numbers);
