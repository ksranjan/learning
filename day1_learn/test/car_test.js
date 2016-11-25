//Create a Car constructor function. Instances of Car should be able to:
//
//    Be constructed with a milesPerGallon value
//    Be filled with gas
//    drive a given distance and have the amount of gas decrease according to the milesPerGallon value and distance provided.
//    Note: If you are outside of the United States the following substitutions may be helpful: kilometers for miles, litres for gallons, petrol for gas.

const expect = require('chai').expect
const Car = require('../src/car.js')

describe("car constructor function", () => {
  it('creates a car with milesPerGallon value', () => {
    const car = new Car(15)
    expect(car instanceof Car).to.be.true
    expect(car.milesPerGallon).to.be.equal(15)
  })

  it('fills gas into car',() => {
    const car = new Car(15)
    car.fillGas(10)
    expect(car.gas).to.equal(10)
  })

  it('drives a distance and gas is decreased accordingly', () => {
    const car = new Car(10)
    car.fillGas(15)
    car.drive(50)
    expect(car.gas).to.equal(10)
  })
})
