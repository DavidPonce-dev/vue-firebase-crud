import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUDuba6Yvv34BELQ9qZKMDy3wPblsOXaU",
    authDomain: "ejemplo-proyecto-25e85.firebaseapp.com",
    databaseURL: "https://ejemplo-proyecto-25e85.firebaseio.com",
    projectId: "ejemplo-proyecto-25e85",
    storageBucket: "ejemplo-proyecto-25e85.appspot.com",
    messagingSenderId: "619316183352",
    appId: "1:619316183352:web:1aefe8d7583b14cbd401cd"
  };

const firebaseApp = Firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();