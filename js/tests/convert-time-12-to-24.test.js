import { strictEqual } from "node:assert";
import { describe, it } from "node:test";
import { convert12To24 } from "../convert-time-12-to-24.js";

describe("convert12To24", () => {
  it('should convert "12:00 AM" to "00:00"', () => {
    strictEqual(convert12To24("12:00 AM"), "00:00");
  });

  it('should convert "12:00 PM" to "12:00"', () => {
    strictEqual(convert12To24("12:00 PM"), "12:00");
  });

  it('should convert "01:05 AM" to "01:05"', () => {
    strictEqual(convert12To24("01:05 AM"), "01:05");
  });

  it('should convert "01:05 PM" to "13:05"', () => {
    strictEqual(convert12To24("01:05 PM"), "13:05");
  });

  it('should convert "11:59 PM" to "23:59"', () => {
    strictEqual(convert12To24("11:59 PM"), "23:59");
  });

  it('should convert "12:59 PM" to "12:59"', () => {
    strictEqual(convert12To24("12:59 PM"), "12:59");
  });

  it('should convert "12:59:59 AM" to "00:59:59"', () => {
    strictEqual(convert12To24("12:59:59 AM"), "00:59:59");
  });

  it('should convert "07:15:30 PM" to "19:15:30"', () => {
    strictEqual(convert12To24("07:15:30 PM"), "19:15:30");
  });

  it('should convert "09:08:07 AM" to "09:08:07"', () => {
    strictEqual(convert12To24("09:08:07 AM"), "09:08:07");
  });
});
