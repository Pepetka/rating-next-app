import { classnames } from "./classnames";

const testPrimitives = ["a", undefined, "b", null, "", "c"];
const testArray = ["d", undefined, "e", null, "f"];
const testObject = {
  a: false,
  b: undefined,
  c: null,
  g: true,
  h: true,
  i: true,
};
const expected = "a b c";
const expectedArray = "d e f";
const expectedObject = "g h i";

describe("classnames", () => {
  it("empty", () => {
    expect(classnames()).toBe("");
  });

  it("primitive values", () => {
    expect(classnames(...testPrimitives)).toBe(expected);
  });

  it("array values", () => {
    expect(classnames(testArray)).toBe(expectedArray);
  });

  it("object values", () => {
    expect(classnames(testObject)).toBe(expectedObject);
  });

  it("combines", () => {
    expect(classnames(...testPrimitives, testArray, testObject)).toBe(
      `${expected} ${expectedArray} ${expectedObject}`,
    );
  });
});
