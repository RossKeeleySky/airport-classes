const bagWeightLimit = 20;
// Instance of bag is created with weight and associated passenger name
// can be assigned manually here, or automatically using the Passenger addBag() method

// If bag weight exceeds bag weight limit, an error is thrown

class Bag {
    constructor(weight, passengerName) {
        if (weight > bagWeightLimit) {
            throw new Error (`Bag weight exceeds weight limit by ${weight - bagWeightLimit}kg`)
        } else {
            this.weight = weight;
            this.passengerName = null;
        }
    }
}

module.exports = Bag;