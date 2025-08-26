// Här skapar vi ett objekt som representerar en person med namn, ålder och stad
const person = { name: "Bob", age: 30, city: "Borås" };

console.log(person.name); // Output: Bob
console.log(person["age"]); // Output: 30

const agePlusFive = person.age + 5;
console.log(agePlusFive); // Output: 35

// Här skapar vi en array med arrayer som representerar ett kalkylblad med rader och kolumner
const sheet = [
    ["bill", "bob", "mary"],
    [30, 25, 28],
    ["New York", "Los Angeles", "Chicago"]
 ];

console.log(sheet[0][1]); // Output: bob
console.log(sheet[1][2]); // Output: 28
console.log(sheet[2][0]); // Output: New York

console.log(sheet.length); // Output: 3
console.log(sheet[1][0] + sheet[1][1]); // Output: 55