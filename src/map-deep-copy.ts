import deepCopy from "./index";

export default function mapDeepCopy(data: Map<unknown, unknown>) {
  return Array.from(data.entries()).reduce((prevMap, [key, value]) => {
    prevMap.set(key, deepCopy(value));
    return prevMap;
  }, new Map());
}
