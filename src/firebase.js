import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCTyuTlbmLSWg2III7Vc1GdZv3CL4pcTRM",
    authDomain: "cs422project.firebaseapp.com",
    databaseURL: "https://cs422project.firebaseio.com",
    projectId: "cs422project",
    storageBucket: "cs422project.appspot.com",
    messagingSenderId: "420934967455",
    appId: "1:420934967455:web:176ee1250f898c6425c2aa",
    measurementId: "G-JREMZ9Z7FB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = new firebase.auth();

export default firebase;