// Used a const because my age will not change
const myAge = 25;

// Used let because this variable can change what it's equal to. Also used multiplication assignment (*=) to set what earlyYears is now equal to.
let earlyYears = 2;
earlyYears *= 10.5;

// Used let because this variable can change what it's equal to. Also used multiplication assignment (*=) to set what laterYears is now equal to.
let laterYears = myAge - 2;
laterYears *= 4;

// Output: 21
// Output: 92
console.log(earlyYears);
console.log(laterYears);

// Output: 113
let myAgeInDogYears = (earlyYears + laterYears);
console.log(myAgeInDogYears);

// Output: ashley chea
let myName = 'Ashley Chea'.toLowerCase();

// Output: My name is ashley chea. I am 25 years old in human years which is 113 years old in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

