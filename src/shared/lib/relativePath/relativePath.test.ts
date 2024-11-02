import { relativePath } from "./relativePath";

describe("relativePath", () => {
  it("empty", () => {
    expect(relativePath()).toBe("/");
  });

  it("without searchParams", () => {
    expect(relativePath("a")).toBe("/a");
    expect(relativePath("a/b")).toBe("/a/b");
    expect(relativePath(["a", "b"])).toBe("/a/b");
    expect(relativePath(["/a/", "b/", "/c"])).toBe("/a/b/c");
  });

  it("with searchParams", () => {
    const searchParams = new URLSearchParams();
    searchParams.append("a", "b");
    expect(relativePath(undefined, searchParams)).toBe("/?a=b");
    expect(relativePath("a", searchParams)).toBe("/a?a=b");
    expect(relativePath(["a", "b"], searchParams)).toBe("/a/b?a=b");
  });
});
