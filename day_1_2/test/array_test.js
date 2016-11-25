
// in test/array_test.js
"use strict";

const expect = require('chai').expect

describe('Array', () => {
  it('is a 0-indexed, ordered list', () => {
    const array = [1,2];

    expect(array[0]).to.equal(1);
    expect(array[1]).to.equal(2);
  })

  it('dynamically allocates additional space for elements, filling with undefined', () => {
    const array = [1,2];

    array[2] = 10
    array[20] = 12

    expect(array[2]).to.equal(10)
    expect(array[13]).to.be.undefined
    expect(array[20]).to.equal(12)
  })

  it('returns undefined for non-existent indices', () => {
    const array = [1,2];

    expect(array[100]).to.be.undefined
    expect(array[-1]).to.be.undefined
  })

  it('allows for mixing types (note: only for informational purposes; do not do this)', () => {
    expect(() => {
      const foolish = ["Arrays", 1, "can", {really: 'be'}, "silly"]
      const alsoFoolish = new Array("Arrays", 1, "can", {really: 'be'}, "silly")
    }).to.not.throw(Error)
  })

  it('literal and constructed versions use same constructor and are objects', () => {
    const array = []
    const obj = new Array()

    expect(array.constructor).to.equal(Array.prototype.constructor)
    expect(obj.constructor).to.equal(Array.prototype.constructor)
  })

  it("are of type Object", () => {
    const array = []

    expect(typeof array).to.equal('object')
  })
})
