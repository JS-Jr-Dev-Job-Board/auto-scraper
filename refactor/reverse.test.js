const reverseSentence = require('./reverse.js')

describe('reverse string', () => {
  it('reverses a sentence without punctuation', () => {
    expect(reverseSentence('yawa dna pu pu')).toBe('Up up and away.')
  })
  it('revese string with a period', () => {
    expect(reverseSentence('.yawa dna pu pu')).toBe('Up up and away.')
  })
  it('capitalizes and returns singe char with perdion', () => {
    expect(reverseSentence('a')).toBe('A.')
  })
})
