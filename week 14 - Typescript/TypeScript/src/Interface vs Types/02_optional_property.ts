//==========================================
//! OPTIONAL PROPERTIES
//==========================================

//# Sometimes, not all properties are required
//# Both interfaces and types support optional properties using ?

//==========================================
//! Interface with Optional Property
//==========================================

interface Car {
  brand: string;
  model: string;
  year?: number; // Optional property - can be omitted
}

let car1: Car = {
  brand: "BMW",
  model: "7 Series",
  year: 2025,
};

let car2: Car = {
  brand: "Rolls Royce",
  model: "Phantom",
  // year is optional, so we can skip it
};

console.log(car1);
console.log(car2);
console.log(`=============================`);

//? What's happening?

/*
The year property is optional (year?), so objects can skip it 
without errors. Both interfaces and types handle optional 
properties the same way.
*/

//==========================================
//! Type with Optional Property
//==========================================

type Cars = {
  brand: string;
  model: string;
  price?: number; // Optional property - can be omitted
};

let carType1: Cars = {
  brand: "Audi",
  model: "Q7",
  // price is optional, so we can skip it
};

console.log(carType1);

//==========================================
// Key Points about Optional Properties
//==========================================
/*
1. Use ? after property name to make it optional
2. Optional properties can be:
   - Included with a value
   - Omitted entirely
   - Set to undefined explicitly
3. Works the same in both interfaces and types
4. Useful when some data might not always be available

Example:
year?: number means:
✓ year: 2025        (provided)
✓ (no year field)   (omitted)
✓ year: undefined   (explicit undefined)
❌ year: null       (null is different from optional)
*/