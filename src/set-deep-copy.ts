import deepCopy from "./index";

export default function setDeepCopy(data: Set<unknown>) {
  return Array.from(data.entries()).reduce((prevState, [key]) => {
    prevState.add(deepCopy(key));
    return prevState;
  }, new Set());
}
