function myFunction(p1, p2) {
    return p1 * p2;
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

function greet(name, age) {
    return "Hello " + name + "! You are " + age + " years old.";
}

console.log(myFunction(5, 2));
console.log(toCelsius(27));
console.log(greet("Tito", 27));