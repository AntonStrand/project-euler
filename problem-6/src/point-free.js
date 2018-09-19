const {
  compose,
  converge,
  curry,
  flip,
  map,
  range,
  subtract,
  sum
} = require('ramda')

/* point free version - with ramda */

// square :: Number -> Number
const square = curry(flip(Math.pow))(2)

// sumOfSquare :: Number -> Number
const sumOfSquare = compose(
  sum,
  map(square),
  range(1)
)

// squareOfSum :: Number -> Number
const squareOfSum = compose(
  square,
  sum,
  range(1)
)

//:: Number -> Number
module.exports = converge(subtract, [squareOfSum, sumOfSquare])
