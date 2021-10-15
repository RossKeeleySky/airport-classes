class Airport {
    constructor(name) {
        this.name = name;
        this.planes = []
    }
    planeLand(plane) {
        this.planes.push(plane);
        plane.disembarkAll();
    }
    planeTakeOff(planeFlightNum) {
        let index = this.planes.map((plane) => { return plane.flightNum; }).indexOf(planeFlightNum);
        this.planes.splice(index, 1);
    }
}

// this.planes = this.planes.filter(
//     (planeElement) => planeElement.planeID != plane.planeID
//   );

module.exports = Airport;