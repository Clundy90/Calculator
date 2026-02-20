import { expect, test, describe } from "vitest";
import { add, subtract, multiply, divide, market } from "./math";
import { vi } from "vitest";

const marketSpy = vi.spyOn(market, "getApples");
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
  test("if it is not a number", () => {
    expect(multiply(Number("text"), "")).toEqual(
      "You need to enter a valid number",
    );
  });

  test("calls apple", () => {
    expect(multiply(1, 2)).toEqual(2);
    expect(marketSpy).toBeCalledTimes(5);
    const mocker = marketSpy.mockImplementation();
    expect(mocker(2)).toEqual(102);
  });
});
