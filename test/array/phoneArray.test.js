import phoneArray from '../../src/array/phoneArray'

test('push phoneNumber get case', () => {
  expect(phoneArray('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  expect(phoneArray('24')).toEqual(['ag', 'ah', 'ai', 'bg', 'bh', 'bi', 'cg', 'ch', 'ci'])
  expect(phoneArray('234')).toEqual([
    'adg', 'adh', 'adi',
    'aeg', 'aeh', 'aei',
    'afg', 'afh', 'afi',
    'bdg', 'bdh', 'bdi',
    'beg', 'beh', 'bei',
    'bfg', 'bfh', 'bfi',
    'cdg', 'cdh', 'cdi',
    'ceg', 'ceh', 'cei',
    'cfg', 'cfh', 'cfi'
  ])
})
