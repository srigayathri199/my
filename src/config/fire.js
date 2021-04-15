import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCT0m9ChunEcwyJyTeY43gRIlU_HJ5v5U0",
  authDomain: "auth-form-45965.firebaseapp.com",
  projectId: "auth-form-45965",
  storageBucket: "auth-form-45965.appspot.com",
  messagingSenderId: "687011489545",
  appId: "1:687011489545:web:6de6d5a1fc2384702215d8"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;