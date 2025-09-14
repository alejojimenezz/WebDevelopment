const car = {type:"Fiat", model:"500", color:"white"};
// Good practice to declare objects with const

const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

const person2 = {};
person2.firstName = "Jane";
person2.lastName = "Smith";
person2.age = 61;
person2.eyeColor = "brown";

let text = person.firstName + "," + person.age + "," + person.eyeColor;

console.log(text);

function Human(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Human("John", "Doe", 50, "blue");
const myMother = new Human("Sally", "Rally", 48, "green");
const mySister = new Human("Anna", "Rally", 18, "green");

const mySelf = new Human("Johnny", "Rally", 22, "green");