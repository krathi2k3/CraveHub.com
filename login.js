//setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyA14ANjQxKbHcxiaFj1mUxl_SAd-FkTaFc",
  authDomain: "login-form-a3677.firebaseapp.com",
  projectId: "login-form-a3677",
  storageBucket: "login-form-a3677.appspot.com",
  messagingSenderId: "253888632013",
  appId: "1:253888632013:web:4f12fcb904c0b6e0ce4584",
  measurementId: "G-JDPSEKMBN2"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

   //SignUP function
   const signUp=()=>{
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    console.log(email, password);
    //firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    alert("You are signed up");
    console.log(result);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // ..
  });
   }


   //Login fiunction
   const signIn=()=>{
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    alert("You are signed in... Welcome to CraveHub.com, Happy Munching!")
    console.log(result);
  })
  .catch((error) => {
    alert("Wrong Credentials, try again:(")
    console.log(error.code);
    console.log(error.message);
  });

   }