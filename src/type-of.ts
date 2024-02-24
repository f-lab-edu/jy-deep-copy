const typeRegex = /(\b\w+\b)(?=\])/;

const typeOf = {
  isObject(value: unknown): value is object {
    return (
      !!value &&
      typeof value === "object" &&
      Object.prototype.toString.call(value).match(typeRegex)?.[0] ===
        "Object" &&
      Object.getPrototypeOf(value).constructor === Object
    );
  },
  isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
  },
  isMap(value: unknown): value is Map<unknown, unknown> {
    return value instanceof Map;
  },
  isSet(value: unknown): value is Set<unknown> {
    return value instanceof Set;
  },
};

export default typeOf;
