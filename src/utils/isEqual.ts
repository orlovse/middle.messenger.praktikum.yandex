type PlainObject<T = any> = {
  [k in string]: T;
};

const isPlainObject = (value: any): boolean => {
  return (
    value &&
    typeof value === "object" &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
};

const isArray = (value: any): boolean => {
  return Array.isArray(value);
};

const isArrayOrObject = (value: any): boolean => {
  return isPlainObject(value) || isArray(value);
};

export const isEqual = (lhs: PlainObject, rhs: PlainObject): boolean => {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
};
