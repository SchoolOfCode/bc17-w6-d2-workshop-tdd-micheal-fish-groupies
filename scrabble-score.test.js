import { calculateScrabbleScore } from "./scrabble-score";
import { test, expect } from 'vitest'

// testyey test should pass
test('mickeys-fishey-test', () => {
})

// test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`
test('mickeys-fishey-test-a', () => {
    expect(calculateScrabbleScore('A')).toBe(1)
})

// calculateScrabbleScore for word `B`
test('mickeys-fishey-test-b', () => {
    expect(calculateScrabbleScore('B')).toBe(3)
})

//calculateScrabbleScore for word `C`
test('mickeys-fishey-test-c', () => {
    expect(calculateScrabbleScore('C')).toBe(3)
});

// test.each('mickeys-fishey-test-c', () => {
//     expect(calculateScrabbleScore)
// })

test('mickeys-fishey-test-d', () => {
    expect(calculateScrabbleScore('D')).toBe(2)
});