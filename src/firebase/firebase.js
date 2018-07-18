import * as firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyDw5F39yP35I41QKtW8pslMQGnfx3c3kVw",
    authDomain: "expense-app-3cfd2.firebaseapp.com",
    databaseURL: "https://expense-app-3cfd2.firebaseio.com",
    projectId: "expense-app-3cfd2",
    storageBucket: "expense-app-3cfd2.appspot.com",
    messagingSenderId: "636137913276"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }); 

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses  = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         }); 
//         console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Expense 1',
//     note: 'Note 1',
//     amount: 123,
//     createdAt: '23423'
// });


// database.ref('notes').push({
//     title: 'ToDo',
//     body: 'Go walk'
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses  = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         }); 
//         console.log(expenses);
// });

// const onChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.name} at ${val.job.company} `)
// });

// setTimeout(() => {
//     database.ref('age').set(55);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onChange);
// }, 7000);

// const notes = [{
//     id: '12',
//     title: 'First Note',
//     body: 'This is my first note'
// }, {
//     id: '13',
//     title: 'Second Note',
//     body: 'This is my second note'
// }]

// database.ref('notes').set(notes);


// setTimeout(() => {
//     database.ref('age').set(90);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error', e);
//     })

// database.ref().set({
//     name: 'Test',
//     age: 222,
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Dublin',
//         country: 'Ireland'
//     },
//     attributes: {
//         height: 1533,
//         weight: 2343
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('Error', e);
// });

// database.ref().update({
//     stressLevel: '2',
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref('isSingle').remove().then(function() {
//     console.log('Removed data');
// }).catch((e) => {
//     console.log('Error', e);
// });