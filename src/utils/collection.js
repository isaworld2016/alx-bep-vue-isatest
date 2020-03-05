/**
 * 객체에서 키를 확인하여 필터링하고 리턴한다
 */
export function filterObjectByKey(obj, predicate) {
  return Object.keys(obj)
    .filter(predicate)
    .reduce((_obj, key) => {
      _obj[key] = obj[key];
      return _obj;
    }, {});
}

/**
 * 객체에서 값을 확인하여 필터링하고 리턴한다
 */
export function filterObjectKeyByValue(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(predicate));
}
