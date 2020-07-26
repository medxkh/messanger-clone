import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCzLU95LuKqi-k5C0rZQpg_l4hh3-UdntM",
        authDomain: "react-messanger-clone.firebaseapp.com",
        databaseURL: "https://react-messanger-clone.firebaseio.com",
        projectId: "react-messanger-clone",
        storageBucket: "react-messanger-clone.appspot.com",
        messagingSenderId: "635927288222",
        appId: "1:635927288222:web:75ecc26415f91b66d2de8f",
        measurementId: "G-41MYS1K0CK"
});

const db = firebaseApp.firestore();

export default db;