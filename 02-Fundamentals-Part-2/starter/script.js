'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive. :D`);
 */
// const interface = 'Audio';
// const private = 1234;
// const if = 12;

// Functions:

/* function logger() {
    console.log('My name is Jonas.');
}
// calling-invoking-running a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

function calcAge1(birthYear) {
    return 2025 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}
// Forma #1
console.log(calcAge2(1999));

// Forma #2
const age2 = calcAge2(1999);
console.log(age2); */

/* // Arrow Function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const yearsUntilRetirement = 65 - age;
    // return yearsUntilRetirement;
    return `${firstName} retires in ${yearsUntilRetirement} years old.`;
}

const calculation = yearsUntilRetirement(1999, "Gerardo");
console.log(calculation); */

/* const cutPieces = fruit => fruit * 2;

const fruitProcessor = (apples, oranges) => {
    const juice = `Juice with ${cutPieces(apples)} pieces of apples and ${cutPieces(oranges)} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(10, 6)); */

// Arrow Function
/* const calcAge3 = birthYear => 2025 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const yearsLeft = 65 - age;

    if (yearsLeft > 0) {
        return `${firstName} retires in ${yearsLeft} years. `;
    } else {
        return `${firstName} has already retired.`;
    }
}

console.log(yearsUntilRetirement(1999, 'Gerardo')); */

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
*/

/* const calcAverage = (firstMatch, secondMatch, thirdMatch) => {
    const averageScore = (firstMatch + secondMatch + thirdMatch) / 3;
    return averageScore;
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins);
console.log(scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `No team wins...`
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas)); */

/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1994, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

// Para saber la ultima posicion del array
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 2789 - 1782, friends];

console.log(jonas);
console.log(jonas.length);


function calcAge(birthYear) {
    return 2025 - birthYear;
}

const year = [1999, 1967, 2002, 2010, 2018];

const result1 = calcAge(year[0]);
const result2 = calcAge(year[1]);
const result3 = calcAge(year[year.length - 1]);

console.log(result1, result2, result3);


const ages = [2789 - 1782] */


/* const friends = ['Michael', 'Steven', 'Peter'];

//Agrega elementos al array
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

//Agregar elementos al array pero de primero
friends.unshift('John');
console.log(friends);

//Elimina el ultimo elemento del array
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);

//Remueve el primer elemento del array
friends.shift();
console.log(friends);

//Localiza donde se encuentra indexado el elemento basado en el array.
console.log(friends.indexOf('Steven'));


console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Peter.');
} else {
    console.log(`Doesn't have a friend with that name :(.`);
} */


/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/


/* const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const result = calcTip(40)
console.log(result);

const bills = [125, 555, 44];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[bills.length - 1])
];

console.log(bills);
console.log(tips); */

/* const calcDiscount = amount =>
    amount >= 100 && amount <= 300
        ? amount * 0.10
        : amount > 300
            ? amount * 0.20
            : 0;


const purchases = [50, 150, 350];


const discounts = [
    calcDiscount(purchases[0]),
    calcDiscount(purchases[1]),
    calcDiscount(purchases[2])
]

const finalTotals = [
    purchases[0] - discounts[0],
    purchases[1] - discounts[1],
    purchases[2] - discounts[2]
]

console.log(`Purchase: ${purchases[0]}, Discount: ${discounts[0]}, Final: ${finalTotals[0]}`);
console.log(`Purchase: ${purchases[1]}, Discount: ${discounts[1]}, Final: ${finalTotals[1]}`);
console.log(`Purchase: ${purchases[2]}, Discount: ${discounts[2]}, Final: ${finalTotals[2]}`); */


/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2025 - 1999,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
//Llamamos a todo el objeto.
console.log(jonas);

//Llamamos al objeto por separado.
console.log(jonas.firstName);
console.log(jonas.friends);

const interested = prompt('What do you want to know about Jonas?')

if (jonas[interested]) {
    console.log(jonas[interested]);
} else {
    console.log('Wrong request. Choose again.');
}

jonas.location = 'Costa Rica';
jonas['twitter'] = '@jonasschmedtman'

console.log(jonas);


//
// Challenge
// Jonas has 3 friends, and his best friend is called Michael.
//

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`); */

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1999,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge() {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary() {
        const age = this.calcAge();
        const license = this.hasDriversLicense
            === true
            ? `has a driver's license.`
            : `doesn't have a driver's license.`;

        return `${this.firstName} is a ${age}-year old ${this.job}, currently ${license}`;

    }
};

console.log(jonas.getSummary()); */

/*

CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.*/



/* const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const response = (mark.calcBMI() > john.calcBMI())
    ? `${mark.fullName} BMI(${mark.bmi}) is higher than ${john.fullName} BMI(${john.bmi})`
    : `${john.fullName} BMI(${john.bmi}) is higher than ${mark.fullName} BMI(${mark.bmi})`

console.log(response); */

// FOR LOOPS

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight at repetition ${rep}`);
// }

/* const jonas = [
    'Jonas',
    'Schmedtmann',
    2025 - 1999,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    // Reading from Jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];

    types.push(typeof jonas[i])


}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const age = [];

for (let x = 0; x < years.length; x++) {
    age[x] = 2025 - years[x];
    console.log(`The current age for the whom born at ${years[x]} is ${age[x]}.`);
} */


/* const grades = [95, 72, 68, 88, 40, 100];
const results = [];

for (let index = 0; index < grades.length; index++) {
    results[index] =
        (grades[index] >= 90)
            ? `${grades[index]} - Excellent`
            : (grades[index] >= 70 && grades[index] < 90) ?
                `${grades[index]} - Passed` :
                `${grades[index]} - Failed`;

    console.log(results[index]);
} */


/* const people = [
    { name: 'Ana', birthYear: 1998, hasDriversLicense: true },
    { name: 'Luis', birthYear: 2005, hasDriversLicense: false },
    { name: 'Maria', birthYear: 1985, hasDriversLicense: true },
    { name: 'Carlos', birthYear: 2010, hasDriversLicense: false }
];


const calcAge = (birthYear) => {
    return 2025 - birthYear;
}

const getSummary = (nombre, edad, licencia) => {
    const posee = licencia === true ? `has a driver's license.` : `hasn't a driver's license.`
    return `${nombre} is a ${edad}-year-old, and ${posee}`
}

for (let i = 0; i < people.length; i++) {
    const resume = getSummary(people[i].name, calcAge(people[i].birthYear), people[i].hasDriversLicense);
    console.log(resume);
} */


/* const jonas = [
    'Jonas',
    'Schmedtmann',
    2025 - 1999,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(`${i + 1} - ${jonas[i]}`);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---- Starting exercise:  ${exercise}`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: - Rep #${rep}`);
    }
}

 */
/* 

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.


*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(tips);
console.log(totals);



/*
BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
Call the function with the totals array. */