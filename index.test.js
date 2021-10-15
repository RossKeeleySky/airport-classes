const { Bag, Passenger, CrewMember, Plane, Airport } = require("./index.js");

// Bag tests
describe("Bag object", () => {
    test("Bag must have a value assigned", () => {
        expect(typeof bag1.weight).toBe('number');
    })
    test("Bag weight must not exceed weight limit", () => {
        expect(bagWeightLimit - bag1.weight).toBeGreaterThanOrEqual(0);
    })
})

// Passenger tests
describe("Passenger object", () => {
    test("Passenger must have name assigned as a string", () => {
        expect(typeof passenger1.name).toBe("string");
    })
    test(`Passenger must have a passport number assigned as a number`, () => {
        expect(typeof passenger1.passportNum).toBe("number");
    })
    test("Passenger must have a flight number assigned as a string", () => {
        expect(typeof passenger1.flightNum).toBe("string");
    })
    test("Passenger must have a seat number assigned as a string", () => {
        expect(typeof passenger1.seatNum).toBe("string");
    })
})

// Crew Member tests
describe("CrewMember object", () => {
    test("CrewMember must have name assigned as a string", () => {
        expect(typeof crewMember1.name).toBe("string");
    })
    test("CrewMember must have a position assigned as a string", () => {
        expect(typeof crewMember1.position).toBe("string");
    })
    test("CrewMember must have a staff number assigned as a number", () => {
        expect(typeof crewMember1.staffNum).toBe("number");
    })
    test("CrewMember must have a flight number assigned as a string", () => {
        expect(typeof crewMember1.flightNum).toBe("string");
    })
})

// Plane tests
describe("Plane object", () => {
    test("Plane must have company assigned as a string", () => {
        expect(typeof plane1.company).toBe("string");
    })
    test("Plane must have a flight number assigned as a string", () => {
        expect(typeof plane1.flightNum).toBe("string");
    })
    test("Plane must have a crew member capacity assigned as a number", () => {
        expect(typeof plane1.crewMemberCapacity).toBe("number");
    })
    test("Plane must have a passenger capacity assigned as a number", () => {
        expect(typeof plane1.passengerCapacity).toBe("number");
    })
})

// Airport tests
describe("Airport object", () => {
    test("Airport must have name assigned as a string", () => {
        expect(typeof airport1.name).toBe("string");
    })
})
