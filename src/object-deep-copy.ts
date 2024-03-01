import deepCopy from "./index";

export default function objectDeepCopy(data: object) {
  return Object.entries(data).reduce<Record<string, unknown>>(
    (prevObject, [key, value]) => {
      prevObject[key] = deepCopy(value);
      return prevObject;
    },
    {},
  );
}
