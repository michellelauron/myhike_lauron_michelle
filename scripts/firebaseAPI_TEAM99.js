//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDZF2eVVBzejyNTFgDDGPRGMcgCzu6Klsw",
    authDomain: "comp1800-demo07-46bac.firebaseapp.com",
    projectId: "comp1800-demo07-46bac",
    storageBucket: "comp1800-demo07-46bac.appspot.com",
    messagingSenderId: "440019210298",
    appId: "1:440019210298:web:8cf49cc4c753485be9a503"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
