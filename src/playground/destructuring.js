//
// Object Destructuring
//


// const person = {
//     name: 'Bob',
//     age: 80,
//     location: {
//         city: 'New York',
//         temp: 100
//     }
// };

// // Destructuring the object.
// const { name = 'Anonymous', age } = person;
// // // Same as:
// // const name = person.name;
// // const  age = person.age;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city} `)
// // }

// const book = {
//     title: 'Book Title',
//     author: 'Book Author',
//     publisher: {
//         name: 'Publisher'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Arizona', 'Texas', '23433'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (Hot)', '€3', '€5', '€7.50'];
const [product, small, medium, large] = item;
console.log(`A medium ${product} costs ${medium}`)