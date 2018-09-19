/**
 * Even Fibonacci numbers
 * https://projecteuler.net/problem=2
 *
 * @author Anton Strand
 */

// last :: [a] -> a
const last = xs => xs[xs.length - 1]

// fibonacci :: Number -> [Number]
const fibonacci = (maxTerm, current = 2, acc = [1]) =>
  current < maxTerm
    ? fibonacci(maxTerm, current + last(acc), [...acc, current])
    : acc

// evenOrZero :: Number -> Number
const evenOrZero = x => (x % 2 === 0 ? x : 0)

// sumEven :: [Number] -> Number
const sumEven = ([x, ...xs], acc = 0) =>
  x !== undefined ? sumEven(xs, acc + evenOrZero(x)) : acc

// RESULT
console.log(sumEven(fibonacci(4000000)))
