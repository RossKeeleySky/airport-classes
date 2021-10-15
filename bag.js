class Bag {
    constructor(weight, passengerName) {
        if (weight > bagWeightLimit) {
            throw new Error (`Bag weight exceeds weight limit by ${weight - bagWeightLimit}kg`)
        } else {
            this.weight = weight;
        }
        this.passengerName = passengerName;
    }
}

module.exports = Bag;