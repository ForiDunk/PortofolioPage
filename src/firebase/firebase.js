import * as firebase from 'firebase';

// const config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };
const config = {
  apiKey: "AIzaSyC674B4FZi-I_5TwY99oyR1CdBTBmKNYis",
  authDomain: "portofolio-8880c.firebaseapp.com",
  databaseURL: "https://portofolio-8880c.firebaseio.com",
  projectId: "portofolio-8880c",
  storageBucket: "portofolio-8880c.appspot.com",
  messagingSenderId: "200553143354"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
console.log("NODE_ENV",process.env.NODE_ENV); 
console.log("API_KEY",process.env.APP_KEY);

export { firebase, googleAuthProvider, database as default };
