class Airport {
    static airports = []

    constructor(name) {
        this.name = name;
        this.planes = []
        this.constructor.airports.push(this);
    }
    planeLand(plane) {
        this.planes.push(plane);
        plane.disembarkAll();
    }
    planeTakeOff(planeFlightNum) {
        this.planes.filter((plane) => plane.flightNum == planeFlightNum);
    }
}

// this.planes = this.planes.filter(
//     (planeElement) => planeElement.planeID != plane.planeID
//   );

module.exports = Airport;