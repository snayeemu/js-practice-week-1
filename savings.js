const calcSavings = (payments, cost) => {
  if (!Array.isArray(payments) || typeof cost != "number") {
    console.log("invalid inputs");
    return;
  }
  payments = payments.map((payment) => {
    if (payment >= 3000) return payment - (20 * payment) / 100;
    else return payment;
  });
  total = payments.reduce((a, b) => a + b, 0);
  console.log(total > cost ? total - cost : "earn more");
};

calcSavings([3000], 300);

