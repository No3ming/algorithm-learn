/**
 * 一句话先写出数学模型
 * 11001100
 * 1 1001100
 * 11 001100
 * 110 01100
 * 1100 1100
 * 11001 100
 * 110011 00
 * 1100110 0
 */
export default (str) => {
  const result = []
  const match = (str) => {
    const str1 = str.match(/^(0+|1+)/)[0]
    const str2 = (str1[0] ^ 1).toString().repeat(str1.length)
    return str1 + str2 === str.slice(str1 * 2) ? '' : str1 + str2
  }
  for (let i = 0; i < str.length - 1; i++) {
    const sub = match(str.slice(i))
    if (sub) {
      result.push(sub)
    }
  }
  return result.length
}
