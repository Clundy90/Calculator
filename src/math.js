export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => {
  // console.log("a", a);
  // console.log("b", b);
  market.getApples();
  if (isNaN(a) || isNaN(b)) {
    return "You need to enter a valid number";
  }
  market.getApples();
  return a * b;
};

export const divide = (a, b) => {
  if (b === 0) return "Error: You cannot divide by 0";
  return a / b;
};

export const market = {
  getApples: (count) => 100 + count,
};
