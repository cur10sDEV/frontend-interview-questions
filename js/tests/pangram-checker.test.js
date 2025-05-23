import { strictEqual } from "node:assert";
import { describe, it } from "node:test";
import { isPangram } from "../pangram-checker.js";

describe("Pangram Checker", () => {
  it("should return true for a valid pangram", () => {
    const input = "The quick brown fox jumps over the lazy dog";
    strictEqual(isPangram(input), true);
  });

  it("should return false for a string missing some letters", () => {
    const input = "The quick brown fox jumps over the dog";
    strictEqual(isPangram(input), false);
  });

  it("should return false for an empty string", () => {
    const input = "";
    strictEqual(isPangram(input), false);
  });

  it("should return true for a pangram with mixed case letters", () => {
    const input = "ThE QuIcK BrOwN FoX JuMpS OvEr ThE LaZy DoG";
    strictEqual(isPangram(input), true);
  });

  it("should return true for a pangram with extra characters", () => {
    const input = "The quick brown fox jumps over the lazy dog 123!@#";
    strictEqual(isPangram(input), true);
  });

  it("should return false for a string with only numbers and symbols", () => {
    const input = "1234567890!@#$%^&*()";
    strictEqual(isPangram(input), false);
  });

  it("should return true for a pangram with non-ASCII characters", () => {
    const input = "The quick brown fox jumps over the lazy dog éü";
    strictEqual(isPangram(input), true);
  });
});
