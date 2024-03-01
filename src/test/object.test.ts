import { describe, expect, test } from "@jest/globals";

import deepCopy from "../index";
import typeOf from "../type-of";

describe("객체 리터럴의 깊은 복사 테스트", () => {
  test("객체 리터럴이 프로퍼티로 중첩되었을 때", () => {
    /**
     * @Given original 객체 리터럴 생성
     */
    const originalObj = {
      a: 1,
      b: { innerA: 2, innerB: 3 },
      c: { innerC: { innerD: 4, innerF: 5 } },
    };

    /**
     * @When 깊은 복사된 객체 리터럴 생성
     */
    const copiedObj = deepCopy(originalObj);

    /**
     * @Then
     */
    const testCases = [
      originalObj.a === copiedObj.a,

      originalObj.b !== copiedObj.b,

      originalObj.c.innerC !== copiedObj.c.innerC,
    ];

    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });

  test("배열이 프로퍼티로 중첩되었을 때", () => {
    /**
     * @Given original 객체 리터럴 생성
     */
    const originalObj = { a: 1, b: [1, 2, 3], c: [[1, 2], 3] };

    /**
     * @When 깊은 복사된 객체 리터럴 생성
     */
    const copiedObj = deepCopy(originalObj);

    /**
     * @Then
     */
    const testCases = [
      originalObj.a === copiedObj.a,

      typeOf.isArray(copiedObj.b) && originalObj.b !== copiedObj.b,

      typeOf.isArray(copiedObj.c[0]) && originalObj.c[0] !== copiedObj.c[0],
    ];

    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });

  test("Map, Set 이 프로퍼티로 중첩되었을 때", () => {
    /**
     * @Given original 객체 리터럴 생성
     */
    const originalObj = {
      a: 1,
      b: new Map([
        ["innerA", 1],
        ["innerB", 2],
      ]),
      c: new Set([1, 2, 3]),
    };

    /**
     * @When 깊은 복사된 객체 리터럴 생성
     */
    const copiedObj = deepCopy(originalObj);

    /**
     * @Then
     */
    const testCases = [
      originalObj.a === copiedObj.a,

      typeOf.isMap(copiedObj.b) && originalObj.b !== copiedObj.b,

      typeOf.isSet(copiedObj.c) && originalObj.c !== copiedObj.c,
    ];

    expect(testCases).toEqual(
      Array.from({ length: testCases.length }, () => true),
    );
  });
});
