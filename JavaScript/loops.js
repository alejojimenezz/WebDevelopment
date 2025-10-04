let text = "";

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "\n";
}

console.log(text);

let text2 = "";

let i = 0;
while (i < 10) {
    text2 += "The number is " + i + "\n";
    i++;
}

console.log(text2);

text3 = "";
i = 0;
do {
    text3 += "The number is " + i + "\n";
    i++;
}
while (i < 10);

console.log(text3);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

text = "";
for (i = 0; i < len; i++) {
    text += cars[i] + "\n";
}

console.log(text);