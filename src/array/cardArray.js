/**
 * from https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * 给定一副牌，每张牌上都写着一个整数。
    此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
    每组都有X张牌。
    组内所有的牌上都写着相同的整数。
    仅当你可选的X >= 2时返回true。

    示例 1：

    输入：[1,2,3,4,4,3,2,1]
    输出：true
    解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 求公约数
export function gcb (a, b) {
  if (b === 0) {
    return a
  } else {
    return gcb(b, a % b)
  }
}
export default (arr) => {
  const newArr = arr.sort((a, b) => a - b).join('')
  // 正则 （\d)\1+ 表示模版匹配， | \d表示匹配只有一个牌的时候
  const groud = newArr.match(/(\d)\1+|\d/g)

  if ((groud.length === 1 && groud[0].length === 1) || groud.length === 0) {
    return false
  }
  return groud.map(item => item.length).sort((a, b) => a - b).reduce((a, b, index) => {
    if (index === 0) {
      return b
    }
    return gcb(b, a)
  }, 0) !== 1
}
