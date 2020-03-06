import readStr from '../../src/string/lesson2'

test('get subString count', () => {
  expect(readStr('00110011')).toBe(6)
})
