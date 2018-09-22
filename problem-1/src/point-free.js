const {
  add,
  always,
  compose,
  converge,
  curry,
  equals,
  flip,
  identity,
  ifElse,
  modulo,
  or,
  range,
  reduce,
  useWith,
  __
} = require('ramda')

/* point free version - with ramda */

const unless = ifElse(__, identity, __)

// :: Number -> Number -> Booleen
const isMultiplesBy = curry(compose(equals(0),flip(modulo)))

// :: Number -> Boolean
const isMultiplesBy3or5 = converge(or, [isMultiplesBy(5), isMultiplesBy(3)])

// :: Number -> Number
const getMultiplesBy3or5 = unless(isMultiplesBy3or5, always(0))

// :: [Number] -> Number
const sum = reduce(useWith(add, [identity, getMultiplesBy3or5]), 0)

// :: Number -> Number
const sumAllMultiplesTo = compose(
  sum,
  range(1)
)

module.exports = sumAllMultiplesTo
