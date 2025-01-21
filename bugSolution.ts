function greeter(person: string): string {
  return "Hello, " + person;
}

function greetArray(people: string[]): string {
  return people.map(person => greeter(person)).join(', ');
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Correct: Accessing the first element
console.log(greetArray(user)); // Correct: Handling the array directly