export function removeEmptyObject(obj) {
  const newObj = obj;
  for (var key in newObj) {
    if (newObj[key] === null || newObj[key] === 0) {
      delete obj[key];
    }
  }
  return newObj;
}
