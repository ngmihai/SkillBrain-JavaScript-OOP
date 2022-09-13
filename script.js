const person = {
  name: "Mihai",
  age: 25,
};

console.log(person);
person.sports = ["fotbal", "baschet"];
console.log(person);

class Person {
  name;
  age;

  constructor(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }

  printNameAndAge = () => {
    console.log(this.name, this.age);
  };

  map = () => {};
}

const newPerson = new Person("Mihai 3", 27);
const newPerson1 = new Person("Mihai 4", 27);
const newPerson2 = new Person("Mihai 5", 27);
const newPerson3 = new Person("Mihai 6", 27);
const newPerson4 = new Person("Mihai 7", 27);

newPerson.printNameAndAge();
newPerson1.printNameAndAge();
newPerson2.printNameAndAge();
newPerson3.printNameAndAge();
newPerson4.printNameAndAge();

// const carSimple1 = {
//   model: "",
//   year: 0,
//   color: "",
// };
// const carSimple2 = {
//   model: "",
//   year: 0,
//   color: "",
// };
// const carSimple3 = {
//   model: "",
//   year: 0,
//   color: "",
// };
// const carSimple4 = {
//   model: "",
//   year: 0,
//   color: "",
// };

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Car {
  position = new Position(0, 0);
  leasing = false;

  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }

  move = (x, y) => {
    this.position.x += x;
    this.position.y += y;
  };
}

const car1 = new Car("Audi", 2017, "red");
console.log(car1.model, car1.year, car1.color, car1.position);
car1.move(4, 5);
console.log(car1.model, car1.year, car1.color, car1.position);
car1.move(4, 5);
console.log(car1.model, car1.year, car1.color, car1.position);
const { position } = car1;
console.log(position);
console.log(car1);

// Mostenire

class Animal {
  position = new Position(0, 0);

  constructor(nume, varsta) {
    this.nume = nume;
    this.varsta = varsta;
  }

  miscare = (x, y) => {
    this.position.x += x;
    this.position.y += y;
  };

  toString = () => {
    return `${this.nume} are ${this.varsta} ani`;
  };
}

class Caine extends Animal {
  constructor(nume, varsta, rasa) {
    super(nume, varsta);
    this.rasa = rasa;
  }

  latra = () => {
    console.log("Ham Ham");
  };
}

class Pisica extends Animal {
  miauna = () => {
    console.log("Miau Miau");
  };
}

const caine1 = new Caine("Rex", 2, "ciobanesc");
console.log(caine1.toString());
caine1.latra();
console.log(caine1.rasa);
const pisica1 = new Pisica("Pisi", 3);
console.log(pisica1.toString());
pisica1.miauna();
console.log(pisica1.rasa);
