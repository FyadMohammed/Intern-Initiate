const matches = (obj, src) =>
  Object.keys(src).every(key =>
    Object.prototype.hasOwnProperty.call(obj, key) &&
    obj[key] === src[key]
  );

console.log(matches(
    { age: 25, hair: 'long', beard: true }, 
    { hair: 'long', beard: true })); // true
console.log(matches(
    { hair: 'long', beard: true }, 
    { age: 25, hair: 'long', beard: true })); // false
console.log(matches(
    { hair: 'long', beard: true }, 
    { age: 26, hair: 'long', beard: true })); // false
  /**
   * Object.keys({ a: 1, b: 2 }) // => ['a', 'b']
   * [1,2,3].every(n => n > 0) // => true
   * .every(callbackFunction)
   * callbackFunction = function (param) {
   * }
   */