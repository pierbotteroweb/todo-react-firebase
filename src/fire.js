import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
        apiKey: "xxxxxxxxxxx",
        authDomain: "xxxxxxxxxxx",
        databaseURL: "xxxxxxxxxxx",
        projectId: "xxxxxxxxxxx",
        storageBucket: "xxxxxxxxxxx",
        messagingSenderId: "xxxxxxxxxxx",
        appId: "xxxxxxxxxxx",
    };
firebase.initializeApp(config);
export default firebase;