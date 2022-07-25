export function valuesToArray(obj) {
  let result = [];
  for (var key in obj) {
    if (obj[key]) {
      result.push(obj[key]);
    }
  }
  return result;
}
