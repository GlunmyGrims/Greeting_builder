function formatName(firstName, lastName){
 return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay){
    switch(timeOfDay){
        case 'morning':
            return 'Good morning';
        case 'evening':
            return 'Good evening';
        case 'afternoon':
            return 'Good afternoon';
        default:
            return 'Good morning';
        }

}

function createGreeting(firstName, lastName, timeOfDay){
    let name = formatName(firstName, lastName);
    let greeting = getGreeting(timeOfDay);
    return `${greeting}, ${name}`;
}

let testFirstName = 'Mina';
let testLastName = 'Patel';
let testTime = 'morning';

console.log(createGreeting(testFirstName, testLastName, testTime));
