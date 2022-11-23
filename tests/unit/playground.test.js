import { EvenOdd } from "@/Playground.js";

describe("Basic Math", () => {
  it("addition", () => {
    expect(1 + 1).toBe(2);
  });
  it("substraction", () => {
    expect(1 - 1).toBe(0);
  });

  describe("EvenOdd", () => {
    describe("when the number is even", () => {
      it("indicates the number is even", () => {
        expect(EvenOdd(2)).toBe("Even");
      });
    });

    describe("when the number is odd", () => {
      it("indicates the number is odd", () => {
        expect(EvenOdd(5)).toBe("Odd");
      });
    });
  });
});
