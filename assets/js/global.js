$(document).ready(function() {
  // Get HTML elements using jQuery
  $player1StartGame = $('#player1StartGame');
  $player1Email = $('#player1Email');
  $player1Password = $('#player1Password');

  $player2StartGame = $('#player2StartGame');
  $player2Email = $('#player2Email');
  $player2Password = $('#player2Password');

  // Get player1 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDQ2RB_vJkGuIjbQwfPlHC-sKc9qC1A1Uo",
    authDomain: "fir-bootcamp-activities-83a6f.firebaseapp.com",
    databaseURL: "https://fir-bootcamp-activities-83a6f.firebaseio.com",
    projectId: "fir-bootcamp-activities-83a6f",
    storageBucket: "fir-bootcamp-activities-83a6f.appspot.com",
    messagingSenderId: "349432820365",
    appId: "1:349432820365:web:2ecc7d4b41fadb08"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var auth = firebase.auth();

  $player1StartGame.on('click', function() {    
    var email = $player1Email.val().toString().trim();
    var pass = $player1Password.val();
    var promiseForEmailPassword = auth.createUserWithEmailAndPassword(email, pass)
      .then(function(user) {

      });
  
    promiseForEmailPassword.catch(function(error) {
      console.log(error.message);
    });
  });

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if(firebaseUser) {
      console.log(firebaseUser);
    }
    else {
      console.log('not logged in');
    }
  });
  
  
});




  