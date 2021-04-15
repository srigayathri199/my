import firebase from 'firebase';



var firebaseConfig = {
  apiKey: "AIzaSyCT0m9ChunEcwyJyTeY43gRIlU_HJ5v5U0",
  authDomain: "auth-form-45965.firebaseapp.com",
  projectId: "auth-form-45965",
  storageBucket: "auth-form-45965.appspot.com",
  messagingSenderId: "687011489545",
  appId: "1:687011489545:web:6de6d5a1fc2384702215d8"
};
// Initialize Firebase
const fire=firebase.initializeApp(firebaseConfig);




// const config = {
//   apiKey: "AIzaSyAH7T0J8MxHgTJuqXWKCEW42YCY6jYocdQ",
//   authDomain: "react-firebase-e8e04.firebaseapp.com",
//   databaseURL: "https://react-firebase-e8e04.firebaseio.com",
//   projectId: "react-firebase-e8e04",
//   storageBucket: "react-firebase-e8e04.appspot.com",
//   messagingSenderId: "516201277833"
// };

// const fire = firebase.initializeApp(config);
export default fire;