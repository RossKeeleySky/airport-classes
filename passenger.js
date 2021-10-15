class Passenger {
    constructor(name, passportNum, flightNum, seatNum) {
        typeof name === 'string' ? this.name = name : new Error ("Passenger name must be a string");
        this.passportNum = passportNum;
        this.flightNum = flightNum
        this.seatNum = seatNum;
        this.bags = [];
    }
    
    addBag(bag) {
        bag.passengerName = this.name;
        this.bags.push(bag);
    }
}

// module.exports = Passenger;