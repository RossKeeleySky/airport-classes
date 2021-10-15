const Bag = require("./components/bag");
const Passenger = require("./components/passenger");
const CrewMember = require("./components/crewMember");
const Plane = require("./components/plane");
const Airport = require("./components/airport");


// PASSENGERS
const jim = new Passenger("Jim", 12345, "FR12345", "01A");
const p1bag1 = new Bag(20);
const p1bag2 = new Bag(15);
jim.addBag(p1bag1);
jim.addBag(p1bag2);
// console.log(jim);

const john = new Passenger("John", 12345, "FR12345", "01B");
const p2bag1 = new Bag(20);
const p2bag2 = new Bag(15);
john.addBag(p2bag1);
john.addBag(p2bag2);
// console.log(john);

const julie = new Passenger("Julie", 12345, "UK12345", "01A");
const p3bag1 = new Bag(20);
const p3bag2 = new Bag(15);
julie.addBag(p3bag1);
julie.addBag(p3bag2);
// console.log(julie);

const jenny = new Passenger("Jenny", 12345, "FR12345", "01C");
const p4bag1 = new Bag(20);
const p4bag2 = new Bag(15);
jenny.addBag(p4bag1);
jenny.addBag(p4bag2);
// console.log(jenny);

// CREW
const pilotTom = new CrewMember("Tom", "pilot", 12345, "FR12345");
const pilotJulio = new CrewMember("Julio", "pilot", 12345, "UK12345");
const stewardDick = new CrewMember("Dick", "steward", 12345, "FR12345");
const stewardHarry = new CrewMember("Harry", "steward", 12345, "UK12345");

// PLANES
const plane1 = new Plane("ryanair", "FR12345", 2, 3);
plane1.boardCrew(pilotTom);
plane1.boardCrew(stewardDick);
plane1.boardPassenger(jim);
plane1.boardPassenger(john);
plane1.boardPassenger(jenny);
console.log(plane1);
plane1.disembarkPassengerByName("John");
console.log(plane1);

const plane2 = new Plane("aer lingus", "UK12345", 2, 2);
plane2.boardCrew(pilotJulio);
plane2.boardCrew(stewardHarry);
plane2.boardPassenger(julie);
console.log(plane2);

// AIRPORTS
const heathrow = new Airport("heathrow");
// When plane lands, all passengers and crew automatically disembark
heathrow.planeLand(plane1);
console.log(heathrow);

// plane is boarded again
plane1.boardCrew(pilotTom);
plane1.boardCrew(stewardDick);
plane1.boardPassenger(jim);
plane1.boardPassenger(john);
plane1.boardPassenger(jenny);
console.log(heathrow);
console.log(JSON.stringify(heathrow));

const dublin = new Airport("Dublin");
dublin.planeLand(plane2);
// plane is boarded
plane2.boardCrew(pilotJulio);
plane2.boardCrew(stewardHarry);
plane2.boardPassenger(julie);
console.log(dublin);
console.log(JSON.stringify(dublin));


module.exports = { Bag, Passenger, CrewMember, Plane, Airport };
