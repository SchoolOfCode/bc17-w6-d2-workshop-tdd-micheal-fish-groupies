import { calculateScrabbleScore } from "./scrabble-score";
import { test, expect } from 'vitest'

// testyey test should pass
test('mickeys-fishey-test', () => {
})

// test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`
test('mickeys-fishey-test', () => {
    expect(calculateScrabbleScore('A')).toBe(1)
})

// calculateScrabbleScore for word `B`
test('mickeys-fishey-test', () => {
    expect(calculateScrabbleScore('B')).toBe(3)
})
