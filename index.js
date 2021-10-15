const Bag = require("./components/bag");
const Passenger = require("./components/passenger");
const CrewMember = require("./components/crewMember");
const Plane = require("./components/plane");
const Airport = require("./components/airport");


// PASSENGERS
const passenger1 = new Passenger("Jim", 12345, "FR12345", "01A");
const p1bag1 = new Bag(20);
const p1bag2 = new Bag(15);
passenger1.addBag(p1bag1);
passenger1.addBag(p1bag2);
// console.log(passenger1);

const passenger2 = new Passenger("John", 12345, "FR12345", "01B");
const p2bag1 = new Bag(20);
const p2bag2 = new Bag(15);
passenger2.addBag(p2bag1);
passenger2.addBag(p2bag2);
// console.log(passenger2);

const passenger3 = new Passenger("Julie", 12345, "UK12345", "01A");
const p3bag1 = new Bag(20);
const p3bag2 = new Bag(15);
passenger3.addBag(p3bag1);
passenger3.addBag(p3bag2);
// console.log(passenger3);

const passenger4 = new Passenger("Jenny", 12345, "FR12345", "01C");
const p4bag1 = new Bag(20);
const p4bag2 = new Bag(15);
passenger4.addBag(p4bag1);
passenger4.addBag(p4bag2);
// console.log(passenger4);

// CREW
const crew1 = new CrewMember("Tom", "pilot", 12345, "FR12345");
const crew2 = new CrewMember("Julio", "pilot", 12345, "UK12345");
const crew3 = new CrewMember("Dick", "steward", 12345, "FR12345");
const crew4 = new CrewMember("Harry", "steward", 12345, "UK12345");

// PLANES
const plane1 = new Plane("ryanair", "FR12345", 2, 3);
plane1.boardCrew(crew1);
plane1.boardCrew(crew3);
plane1.boardPassenger(passenger1);
plane1.boardPassenger(passenger2);
plane1.boardPassenger(passenger4);
console.log(plane1);

const plane2 = new Plane("aer lingus", "UK12345", 2, 2);
plane2.boardCrew(crew2);
plane2.boardCrew(crew4);
plane2.boardPassenger(passenger3);
console.log(plane2);

// AIRPORTS
const airport1 = new Airport("heathrow");
// When plane lands, all passengers and crew automatically disembark
airport1.planeLand(plane1);
console.log(airport1);

// plane is boarded again
plane1.boardCrew(crew1);
plane1.boardCrew(crew3);
plane1.boardPassenger(passenger1);
plane1.boardPassenger(passenger2);
plane1.boardPassenger(passenger4);
console.log(JSON.stringify(airport1));



module.exports = { Bag, Passenger, CrewMember, Plane, Airport };
