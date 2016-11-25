"use strict"
class Car{
  constructor(milesPerGallon) {
    this.milesPerGallon = milesPerGallon
  }
  fillGas(gas){
    this.gas = gas
  }
  drive(distance){
    this.gas -= distance/this.milesPerGallon
  }
}

module.exports = Car
