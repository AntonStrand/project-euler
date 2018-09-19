/* without ramda - using recursion */

const compose = (...fns) => arg => fns.reduceRight((f, g) => g(f), arg)

// :: Number -> (Number, (acc?)) -> [Number]
const range = from => (to, acc = []) =>
  from === to ? acc : range(from + 1)(to, [...acc, from])

// :: (Number, Number) -> Booleen
const isMulti = (x, base) => x % base === 0

// :: Number -> Number
const getMulti = x => (isMulti(x, 3) || isMulti(x, 5) ? x : 0)

// :: [Number] -> Number
const sum = ([x, ...xs], acc = 0) =>
  x === undefined ? acc : sum(xs, acc + getMulti(x))

module.exports = compose(
  sum,
  range(1)
)
