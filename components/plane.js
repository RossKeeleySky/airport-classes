class Plane {
    constructor(company, flightNum, crewMemberCapacity, passengerCapacity) {
        this.company = company;
        this.flightNum = flightNum;
        // this.crewMemberCapacity = crewMemberCapacity;
        // this.passengerCapacity = passengerCapacity;
        this.crewMembers = [];
        this.passengers = [];
        this.crewCapacityRemaining = crewMemberCapacity - this.crewMembers.length;
        this.passengerCapacityRemaining = passengerCapacityRemaining - this.passengers.length;
    }

    // Crew members are boarded in to seperate array to passengers
    boardCrew(crewMember) {
        // Checks the crew member flight num matches the plane flight num
        if (crewMember.flightNum !== this.flightNum) { 
            throw new Error (`Crew member flight number ${crewMember.flightNum} does not match plane flight number ${this.flightNum}. Please check boarding pass`);
        // Checks the plane's crew member capacity has not been reached before boarding
        } else if (this.crewCapacityRemaining = 0) { 
             throw new Error (`${this.company} plane with flight number ${this.flightNum} crew member capacity has already been reached`); 
        } else { this.crewMembers.push(crewMember); }
    }
    boardPassenger(passenger) {
        // Checks the passenger flight num matches the plane flight num
        if (passenger.flightNum !== this.flightNum) { 
            throw new Error (`Passenger flight number ${passenger.flightNum} does not match plane flight number ${this.flightNum}. Please check boarding pass`);
        // Checks the plane's passenger capacity has not been reached before boarding
        } else if (this.passengerCapacityRemaining = 0) { 
             throw new Error (`${this.company} plane with flight number ${this.flightNum} passenger capacity has already been reached`); 
        } else { this.passengers.push(passenger); }
    }
    // disembark specific passenger by their name attribute
    disembarkPassengerByName(passengerName) {
        this.passengers.filter((passenger) => passenger.name == passengerName);
    }
    // performed automatically when plane lands at airport
    disembarkAll() {
        this.crewMembers = [];
        this.passengers = [];
    }
}

module.exports = Plane;