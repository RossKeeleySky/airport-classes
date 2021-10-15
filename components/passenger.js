class Passenger {
    constructor(name, passportNum, flightNum, seatNum) {
        this.name = name;
        this.passportNum = passportNum;
        this.flightNum = flightNum
        this.seatNum = seatNum;
        this.bags = [];
    }
    addBag(bag) {
        if (typeof bag == 'number') { 
            new Error ("Invalid. Please create a bag to add");
        } else {
            bag.passengerName = this.name;
            this.bags.push(bag);
        }
    }
}

module.exports = Passenger;