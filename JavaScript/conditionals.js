if (new Date().getHours() < 10) {
    greeting = "Good morning";
    console.log(greeting);
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

let age = 16;
let country = "USA";
let text = "You can NOT drive";

if (age >= 18) {
    text = "You can drive"
}

if (country == "USA" && age >= 16) {
    text = "You can drive";
}

console.log(text);

let text2 = (age < 18) ? "Minor" : "Adult";

console.log(text2);

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day);