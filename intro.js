// const student = {
//   name: "Adeoti",
//   age: 20,
//   favoriteProgrammingLanguage: "JavaScript",
// };
// console.log(student);

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers!");
  }
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
module.exports = { add, subtract };
