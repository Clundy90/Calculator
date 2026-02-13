import { expect, test, describe } from "vitest";
import { add, subtract, multiply, divide } from "./math";

describe("Calculator Logic", () => {
  test("adds 10 + 5 to equal 15", () => {
    expect(add(10, 5)).toBe(15);
  });

  test("subtracts 10 - 5 to equal 5", () => {
    expect(subtract(10, 5)).toBe(5);
  });

  test("multiplies 10 * 5 to equal 50", () => {
    expect(multiply(10, 5)).toEqual(50);
  });

  test("divides 10/2 to equal 5", () => {
    expect(divide(10, 2)).toEqual(5);
  });
  test("returns an error message when dividing by zero", () => {
    expect(divide(10, 0)).toBe("Error: You cannot divide by 0");
  });
});
