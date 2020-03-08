import cardArray from '../../src/array/cardArray'

test('card ok', () => {
  expect(cardArray([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true)
  expect(cardArray([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false)
  expect(cardArray([1])).toBe(false)
  expect(cardArray([1, 1])).toBe(true)
  expect(cardArray([1, 1, 2, 2, 2])).toBe(false)
})
