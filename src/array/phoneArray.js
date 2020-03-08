/**
// 给定一个仅包含数字2 - 9的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

export default (numStr) => {
  const CASE = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]

  const cases = numStr.split('').map(element => CASE[element - 2])
  return cases.reduce((a, b) => {
    if (a.length === 0) {
      return b
    }
    const result = []
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        result.push(a[i] + b[j])
      }
    }
    return result
  }, [])
}