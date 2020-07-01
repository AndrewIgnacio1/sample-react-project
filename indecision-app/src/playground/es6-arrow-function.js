// function square (x) {
//     return x * x;
// };

// console.log(square(2));

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(7));

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

// const getFirstName = (fullName) => fullName.split(' ')[0];

// console.log(getFirstName('Andrew Ignacio'));


// can't access arguments if using arrow function. will have to switch to es5 function call.

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
// console.log(add(23,32));

const user = {
    name: 'Andrew',
    cities: ['Quezon City', 'Columbua', 'Annandale'],
    printPlaceLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlaceLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());