import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyDiLu4xrkPLRuY_h-m-qeSUSJDL7Meuhp0",
    authDomain: "crwn-clothing-69b60.firebaseapp.com",
    projectId: "crwn-clothing-69b60",
    storageBucket: "crwn-clothing-69b60.appspot.com",
    messagingSenderId: "704748990109",
    appId: "1:704748990109:web:dd0e3b2129943226ecae74"
  };


firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

//auth library
const provider = new firebase.auth.GoogleAuthProvider();
//always trigger the google pop-up whenever we use this google auth provider for authentication and signin
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => { auth.signInWithPopup(provider) }

export default firebase;