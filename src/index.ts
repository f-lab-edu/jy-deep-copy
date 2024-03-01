import arrayDeepCopy from "./array-deep-copy";
import mapDeepCopy from "./map-deep-copy";
import objectDeepCopy from "./object-deep-copy";
import setDeepCopy from "./set-deep-copy";
import typeOf from "./type-of";

export default function deepCopy<T>(value: T): T {
  if (typeOf.isObject(value)) {
    return objectDeepCopy(value) as T;
  } else if (typeOf.isArray(value)) {
    return arrayDeepCopy(value) as T;
  } else if (typeOf.isMap(value)) {
    return mapDeepCopy(value) as T;
  } else if (typeOf.isSet(value)) {
    return setDeepCopy(value) as T;
  }
  return value;
}
