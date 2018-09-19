const compose = (...fns) => arg => fns.reduceRight((f, g) => g(f), arg)

// square :: Number -> Number
const square = x => Math.pow(x, 2)

// id :: a -> a
const id = x => x

// rangeMapReduce :: (Number -> Number) -> Number -> Number
const rangeMapReduce = fn => (from, acc = 0) =>
  from > 0 ? rangeMapReduce(fn)(from - 1, acc + fn(from)) : acc

// sumOfSquare :: Number -> Number
const sumOfSquare = rangeMapReduce(square)

// squareOfSum :: Number -> Number
const squareOfSum = compose(
  square,
  rangeMapReduce(id)
)

// :: Number -> Number
module.exports = x => squareOfSum(x) - sumOfSquare(x)
