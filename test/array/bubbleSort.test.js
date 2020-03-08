import bubbleSort from '../../src/array/bubbleSort'

test('bubbleSort', () => {
  expect(bubbleSort([2, 3, 1, 4, 6, 5])).toBe('1,2,3,4,5,6')
})
