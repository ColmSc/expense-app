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

database.ref().set({
    name: 'Test',
    age: 222,
    isSingle: false,
    location: {
        city: 'Dublin',
        country: 'Ireland'
    },
    attributes: {
        height: 1533,
        weight: 2343
    }
}).then(() => {
    console.log('Data is saved.');
}).catch((e) => {
    console.log('Error', e);
});

// firebase.database().ref().set('This is data');

// database.ref('age').set(28);
// database.ref('location/city').set('Galway');
database.ref('attributes').set({
        height: 73,
        weight: 454
}).then(() => {
    console.log('Second call worked.');
}).catch((e) => {
    console.log('second call errored');
})