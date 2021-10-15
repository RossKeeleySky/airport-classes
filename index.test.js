// const { Bag, Passenger, Plane, Airport } = require("./index.js");
const { Bag, Passenger, CrewMember, Plane } = require("./index.js");
const bagWeightLimit = 20;

const passenger1 = new Passenger("Micheal Myers", 12345, "FR12345", "01A");
const bag1 = new Bag(20);
const bag2 = new Bag(15);
// const bag1 = new Bag(25);
passenger1.addBag(bag1);
passenger1.addBag(bag2);
console.log(passenger1);
// passenger1.addBag(30);

const crewMember1 = new CrewMember("Debra Lyons", "Steward", 12345, "FR12345")
console.log(crewMember1);

const plane1 = new Plane("ryanair", "FR12345", 5, 5);


describe("Bag object", () => {
    test("Bag must have a value assigned", () => {
        expect(typeof bag1.weight).toBe('number');
    })
    test("Bag weight must not exceed weight limit", () => {
        expect(bagWeightLimit - bag1.weight).toBeGreaterThanOrEqual(0);
    })
})

describe("Passenger object", () => {
    test("Passenger must have name assigned as a string", () => {
        expect(typeof passenger1.name).toBe("string");
    })
    test("Passenger must have a passport number assigned as a number", () => {
        expect(typeof passenger1.passportNum).toBe("number");
    })
    test("Passenger must have a flight number assigned as a string", () => {
        expect(typeof passenger1.flightNum).toBe("string");
    })
    test("Passenger must have a seat number assigned as a string", () => {
        expect(typeof passenger1.seatNum).toBe("string");
    })
})

describe("CrewMember object", () => {
    test("CrewMember must have name assigned as a string", () => {
        expect(typeof crewMember1.name).toBe("string");
    })
    test("CrewMember must have a passport number assigned as a number", () => {
        expect(typeof crewMember1.position).toBe("string");
    })
    test("CrewMember must have a flight number assigned as a string", () => {
        expect(typeof crewMember1.staffNum).toBe("number");
    })
    test("CrewMember must have a seat number assigned as a string", () => {
        expect(typeof crewMember1.flightNum).toBe("string");
    })
})

describe("Plane object", () => {
    test("Plane must have company assigned as a string", () => {
        expect(typeof plane1.name).toBe("string");
    })
    test("Plane must have a passport number assigned as a number", () => {
        expect(typeof plane1.position).toBe("string");
    })
    test("Plane must have a flight number assigned as a string", () => {
        expect(typeof plane1.staffNum).toBe("number");
    })
    test("Plane must have a seat number assigned as a string", () => {
        expect(typeof Ppane1.flightNum).toBe("string");
    })
})