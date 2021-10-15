class Airport {
    constructor(name) {
        this.name = name;
        this.planes = []
    }
    landPlane(plane) {
        this.planes.push(plane);
    }
    takeOffPlaneByName(planeName) {
        let index = this.planes.map((plane) => { return plane.name; }).indexOf(planeName);
        this.planes.splice(index, 1);
    }
}

module.exports = Airport;