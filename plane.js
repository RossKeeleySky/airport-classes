class Plane {
    constructor(name) {
        this.name = name;
        this.passengers = [];
    }
    boardPassenger(passenger) {
        this.passengers.push(passenger);
    }
    disembarkPassengerByName(passengerName) {
        let index = this.passengers.map((passenger) => { return passenger.name; }).indexOf(passengerName);
        this.passengers.splice(index, 1);
    }
}

module.exports = Plane;