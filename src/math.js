export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) return "Error: You cannot divide by 0";
  return a / b;
};
