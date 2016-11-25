//Write a function, reverseString, which takes a String and returns a new String that
// is the reversed characters of the input String.
//
//    Hint: Instead of exporting a class with module.exports export just a function.

const expect = require('chai').expect
const reverseString = require('../src/reverse_string')

describe('reverseString function', () => {
  it('reverses a string', () => {
    expect(reverseString('ab')).to.equal('ba')
  })
  it('reverses another string', () => {
    expect(reverseString('anjesh')).to.equal('hsejna')
  })
})
