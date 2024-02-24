import { describe, expect, test } from "@jest/globals";

import deepCopy from "../index";
import typeOf from "../type-of";

describe("배열의 깊은 복사 테스트", () => {
  test("배열이 원소로 존재할 때", () => {
    /**
     * @Given original 배열 생성
     */
    const originalArr = [1, [1, 2, 3], [[4, 5], 6]];

    /**
     * @When 깊은 복사된 배열 생성
     */
    const copiedArr = deepCopy(originalArr);

    /**
     * @Then
     */
    const testCases = [
      typeOf.isArray(copiedArr),

      originalArr[0] === copiedArr[0],

      typeOf.isArray(copiedArr[1]) && originalArr[1] !== copiedArr[1],

      typeOf.isArray(copiedArr[2]) && originalArr[2] !== copiedArr[2],
    ];

    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });

  test("객체 리터럴이 원소로 존재할 때", () => {
    /**
     * @Given original 배열 생성
     */
    const originalArr = [1, { a: 1, b: 2 }, { c: { d: 3 } }] as const;

    /**
     * @When 깊은 복사된 배열 생성
     */
    const copiedArr = deepCopy(originalArr);

    /**
     * @Then
     */
    const testCases = [
      typeOf.isArray(copiedArr),

      originalArr[0] === copiedArr[0],

      originalArr[1] !== copiedArr[1],

      originalArr[2] !== copiedArr[2],
    ];

    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });

  test("Map, Set 이 원소로 존재할 때", () => {
    /**
     * @Given original 배열 생성
     */
    const originalArr = [
      1,
      new Map([
        ["a", 1],
        ["b", 2],
      ]),
      new Set([3, 4, 5]),
    ];

    /**
     * @When 깊은 복사된 배열 생성
     */
    const copiedArr = deepCopy(originalArr);

    /**
     * @Then
     */
    const testCases = [
      typeOf.isArray(copiedArr),

      originalArr[0] === copiedArr[0],

      originalArr[1] !== copiedArr[1],

      originalArr[2] !== copiedArr[2],
    ];

    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });
});
