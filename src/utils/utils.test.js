import { convertNumberToCurrency } from "./convertNumberToCurrency";
import { valuesToArray } from "./valuesToArray";
import { removeEmptyObject } from "./removeEmptyList";

describe("convertNumberToCurrency", () => {
  it("should convert a number to currenry real", () => {
    const result = convertNumberToCurrency(10.0, "BRL");

    expect(result.toString()).toBe("R$\xa010,00");
  });

  it("should return when someone number passed", () => {
    const result = convertNumberToCurrency(undefined, "BRL");

    expect(result.toString()).toBe("R$\xa00,00");
  });
});

describe("valuesToArray", () => {
  it("should convert obj in array", () => {
    const result = valuesToArray({ nome: "foo" });

    expect(result).toEqual(["foo"]);
  });
});

describe("removeEmptyObject", () => {
  it("should remove Empty Object", () => {
    const result = removeEmptyObject({ nome: 0, last: "foo" });

    expect(result).toEqual({ last: "foo" });
  });
});
