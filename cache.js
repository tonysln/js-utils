/* 
 * JavaScript Cache
 */


const memoize = (fn) => {
  let cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (!cache[key]) {
      cache[key] = fn(...args);
    }

    return cache[key];
  }
};
