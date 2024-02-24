import { describe, expect, test } from "@jest/globals";

import deepCopy from "../index";

describe("Map, Set의 깊은 복사 테스트", () => {
  test("Map에 객체가 존재할 때", () => {
    /**
     * @Given original Map 생성
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalMap = new Map<string, any>([
      ["a", 1],
      ["b", { c: 1 }],
      ["c", { d: { e: 2 } }],
    ]);

    /**
     * @When 깊은 복사된 Map 생성
     */
    const copiedMap = deepCopy(originalMap);

    /**
     * @Then
     */
    const testCases = [
      originalMap.get("a") === copiedMap.get("a"),
      originalMap.get("b") !== copiedMap.get("b"),
      originalMap.get("c").d !== copiedMap.get("c").d,
    ];
    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });

  test("Map에 배열이 존재할 때", () => {
    /**
     * @Given original 배열 생성
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalMap = new Map<string, any>([
      ["a", 1],
      ["b", [1, 2, 3]],
      ["c", [[1, 2], 3]],
    ]);

    /**
     * @When 깊은 복사된 배열 생성
     */
    const copiedMap = deepCopy(originalMap);

    /**
     * @Then
     */
    const testCases = [
      originalMap.get("a") === copiedMap.get("a"),
      originalMap.get("b") !== copiedMap.get("b"),
      originalMap.get("c")[0] !== copiedMap.get("c")[0],
    ];
    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });

  test("Map에 Set이 존재할 때", () => {
    /**
     * @Given original Map 생성
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalMap = new Map<string, any>([
      ["a", 1],
      ["b", new Set([1, 2, 3])],
    ]);

    /**
     * @When 깊은 복사된 Map 생성
     */
    const copiedMap = deepCopy(originalMap);

    /**
     * @Then
     */
    const testCases = [
      originalMap.get("a") === copiedMap.get("a"),
      originalMap.get("b") !== copiedMap.get("b"),
    ];
    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });
});
