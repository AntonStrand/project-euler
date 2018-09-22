const fs = require('fs')
const future = require('fluture')
const {
  compose,
  inc,
  multiply,
  replace,
  split,
  sum,
  trim,
  useWith
} = require('ramda')

/**
 * Solving problem 22 using Fluture and Ramda
 * https://projecteuler.net/problem=22
 *
 * Reason to why I did my own sort and map functions.
 * Ramda's sort doesn't sort alphabetical by default
 * Ramda's map doesn't send in the index of the element.
 *
 * @author Anton Strand
 */

// readFile :: String -> Fluture Error a
const readFile = path =>
  new future((reject, resolve) =>
    fs.readFile(path, 'utf8', (err, res) => (err ? reject(err) : resolve(res)))
  )

// sort :: [a] -> [a]
const sort = xs => Array.prototype.sort.call(xs)

// map :: (a -> b) -> [a] -> [b]
const map = fn => xs => Array.prototype.map.call(xs, fn)

// charValue :: Char -> Number
const charValue = x => x.charCodeAt(0) - 64

// namesToSortedArray :: String -> [String]
const namesToSortedArray = compose(
  sort,
  map(trim),
  map(replace(/"/g, '')),
  split(',')
)

// sumNameValue :: String -> Number
const sumNameValue = compose(
  sum,
  map(charValue),
  split('')
)

// nameValue :: Number -> Number -> Number
const nameValue = useWith(multiply, [sumNameValue, inc])

// Reads file and logs out result
readFile('p022_names.txt')
  .map(namesToSortedArray)
  .map(map(nameValue))
  .map(sum)
  .fork(console.error, console.log)
