import deepCopy from "./index";

export default function arrayDeepCopy(data: Array<unknown>) {
  return data.map((element) => deepCopy(element));
}
