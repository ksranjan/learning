const expect = require('chai').expect;

describe('Data types', () => {
  describe('Boolean', () => {
    it('returns type as Boolean for true or false', () => {
      expect(typeof true).to.equal('boolean')
      expect(typeof false).to.equal('boolean')
    })

    it('literals return false for instanceof Boolean', () => {
      expect(true instanceof Boolean).to.be.false
      expect(false instanceof Boolean).to.be.false
    })

    it('typeof behaves differently if it is constructed rather than literal', () => {
      expect(typeof true).to.equal('boolean')
      expect(typeof false).to.equal('boolean')
    })

    it('constructed instances return true for instanceof Boolean', () => {
      expect(new Boolean(true) instanceof Boolean).to.be.true
      expect(new Boolean(false) instanceof Boolean).to.be.true
    })

    it('negated by unary operator !', () => {
      expect(!true).to.be.false
      expect(!false).to.be.true
    })

    it('typecasts values to Boolean', () => {
      expect(Boolean('true')).to.equal(true)
      expect(Boolean(1)).to.be.true
      expect(Boolean(0)).to.be.false
      expect(Boolean(undefined)).to.be.false
      expect(Boolean(undefined)).to.be.false
    })
  })

  describe('Null', () => {
    it('returns type as Object for null', () => {
      expect(typeof null).to.equal('object')
    })

    it('has no corresponding constructor', () => {
      expect(() => {
        new Null()
      }).to.throw(ReferenceError)
    })
  })

  describe('undefined', () => {
    it('returns type as undefined for undefined', () => {
      expect(typeof undefined).to.equal('undefined')
    })

    it('has no corresponding constructor', () => {
      expect(() => {
        new Undefined()
      }).to.throw(ReferenceError)
    })
  })

  describe('Number', () => {
    it('returns type as Number for true or false', () => {
      expect(typeof 13).to.equal('number')
    })

    it('literals return false for instanceof Number', () => {
      expect(13 instanceof Number).to.be.false
    })

    it('typeof behaves differently if it is constructed rather than literal', () => {
      expect(typeof new Number("13")).to.equal('object')
    })

    it('constructed instances return true for instanceof Number', () => {
      expect(new Number("13") instanceof Number).to.be.true
    })

    it('typecasts values to Number', () => {
      expect(Number('true')).to.be.NaN
      expect(Number(undefined)).to.be.NaN
      expect(Number("101238")).to.equal(101238)
      expect(Number(0)).to.equal(0)
    })
  })

  describe('String', () => {
    it('returns type as String for true or false', () => {
      expect(typeof "").to.equal('string')
    })

    it('literals return false for instanceof String', () => {
      expect("" instanceof String).to.be.false
    })

    it('typeof behaves differently if it is constructed rather than literal', () => {
      expect(typeof new String("")).to.equal('object')
    })

    it('constructed instances return true for instanceof String', () => {
      expect(new String("") instanceof String).to.be.true
    })
  })

  describe('Object', () => {
    it('is a reference type', () => {
      const a = [1,2,3]
      const b = a
      a[2] = 10

      expect(b[2]).to.equal(10)
    })

    it('returns type as Object for true or false', () => {
      expect(typeof {}).to.equal('object')
    })

    it('literals return true for instanceof Object', () => {
      expect({} instanceof Object).to.be.true
    })

    it('typeof behaves differently if it is constructed rather than literal', () => {
      expect(typeof new Object()).to.equal('object')
    })

    it('constructed instances return true for instanceof Object', () => {
      expect(new Object() instanceof Object).to.be.true
    })
  })

  describe('Symbol', () => {
    it('cannot be constructed (and has no literal syntax)', () => {
      expect(() => { new Symbol("foo") }).to.throw(TypeError)
    })

    it('returns Symbol for typeof', () => {
      expect(typeof Symbol("hi")).to.equal('symbol')
    })

    it('returns false for instanceof Symbol because it is a primitive type', () => {
      expect(Symbol("hi") instanceof Symbol).to.be.false
    })
  })
})
