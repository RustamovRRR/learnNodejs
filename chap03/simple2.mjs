let count = 0;

export function next() {
  return ++count;
}

function suqared() {
  return Math.pow(count, 2);
}

export function hello() {
  return `Hello World`;
}

export default function () {
  return count;
}

export const meaning = 42;
export let nocount = -1;

export { suqared };
