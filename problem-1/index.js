const pointFree = require('./src/point-free')
const recursion = require('./src/recursion')

/**
 * Two solutions for Euler problem 1
 * https://projecteuler.net/problem=1
 *
 * Both of them are reducing the array to only have to iterate through it once.
 *
 * @author Anton Strand
 */

console.log('Point free:', pointFree(1000))
console.log('Recursion :', recursion(1000))
