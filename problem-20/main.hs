-- Solving problem 20 using Haskell
-- https://projecteuler.net/problem=20

-- @author Anton Strand

factorial :: (Eq a, Num a) => a -> a
factorial 0 = 1
factorial n = n * factorial(n-1)

toDigits :: Integral a => a -> [a]
toDigits 0 = []
toDigits n = toDigits(n `div` 10) ++ [n `mod` 10]

digitSum :: Integer -> Integer
digitSum = sum . toDigits . factorial