const bagWeightLimit = 20;

class Bag {
    constructor(weight, passengerName) {
        weight > bagWeightLimit ? new Error (`Bag weight exceeds weight limit by ${weight - bagWeightLimit}kg`) : this.weight = weight;
        this.passengerName = passengerName;
    }
}

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

class CrewMember {
    constructor(name, position, staffNum, flightNum) {
        this.name = name;
        this.position = position;
        this.staffNum = staffNum;
        this.flightNum = flightNum;
    }
}

class Plane {
    constructor(company, flightNum, crewMemberCapacity, passengerCapacity) {
        this.company = company;
        this.flightNum = flightNum;
        this.crewMemberCapacity = crewMemberCapacity;
        this.passengerCapacity = passengerCapacity;
        this.crewMembers = [];
        this.passengers = [];
    }
    boardCrew(crewMember) {
        (crewMember.flightNum == this.flightNum && this.crewMembers.length < crewMemberCapacity) ? 
        this.crewMembers.push(crewMember) : new Error ("Flight numbers do not match. Please check boarding pass");
    }
    boardPassenger(passenger) {
        (passenger.flightNum == this.flightNum && this.passengers.length < passengerCapacity) ? 
        this.passengers.push(passenger) : new Error ("Flight numbers do not match. Please check boarding pass");
    }
    disembarkPassengerByName(passengerName) {
        let index = this.passengers.map((passenger) => { return passenger.name; }).indexOf(passengerName);
        this.passengers.splice(index, 1);
    }
}

class Airport {
    constructor(name) {
        this.name = name;
        this.planes = []
    }
    planeLand(plane) {
        this.planes.push(plane);
    }
    planeTakeOff(planeFlightNum) {
        let index = this.planes.map((plane) => { return plane.flightNum; }).indexOf(planeFlightNum);
        this.planes.splice(index, 1);
    }
}

this.planes = this.planes.filter(
    (planeElement) => planeElement.planeID != plane.planeID
  );


// let passenger1 = new Passenger("Timothy Winters", 1234567, "FR12345", "01A");
// let bag1 = new Bag(20);
// let bag2 = new Bag(30);
// console.log(bag2);
// passenger1.addBag(bag1);
// passenger1.addBag(bag2);
// passenger1.addBag(15);
// passenger1.addBag(25);
// passenger1.addBag(bag2);
// console.log(passenger1);

// let plane1 = new Plane("ryanair");
// plane1.boardPassenger(passenger1);
// console.log(plane1)

// let airport1 = new Airport("heathrow");
// airport1.landPlane(plane1);

// console.log(airport1);

// plane1.disembarkPassengerByName("Timothy Winters");
// console.log(plane1);
// airport1.takeOffPlaneByName(plane1);
// console.log(airport1);


// const MichaelMyers = new Passenger("Micheal Myers");
// const Suitcase = new Bag(20);

// module.exports = { Bag };
module.exports = { Bag, Passenger, CrewMember, Plane };
// module.exports = { Plane };
// module.exports = { Airport };