import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("Locates the current element in list and return the next element in the list", () => {
    const list = ["a", "b", "c", "d"];
    const value = "b";
    const result = nextElementInList(list, value);
    expect(result).toBe("c");
  });

  describe("when the element is at the end of te list", () => {
    it("it locates next element at the start of the list", () => {
      const list = ["a", "b", "c", "d"];
      const value = "d";
      const result = nextElementInList(list, value);
      expect(result).toBe("a");
    });
  });
});
