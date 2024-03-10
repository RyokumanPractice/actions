import { factorial } from "../src";

describe("Factorial function", () => {
  test("correctly computes factorial of a positive integer number", () => {
    expect(() => {
      factorial(3).toEaqual(6);
    });
  });

  test("throws an error if a negative input is provided", () => {
    expect(() => {
      factorial(-1);
    }).toThrow("input needs to be bigger than 0");
  });
});
