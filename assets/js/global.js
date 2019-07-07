$(document).ready(function() {
  // Get player 1 Elements using jQuery
  var $player1StartGame = $('#player1StartGame');
  var $player1Name = $('#player1Name');
  var $player1NameInput = $('#player1NameInput');
  var $player1Email = $('#player1Email');
  var $player1Password = $('#player1Password');
  
  // Get player 2 Elements using jQuery
  var $player2StartGame = $('#player2StartGame');
  var $player2Name = $('#player2Name');
  var $player2NameInput = $('#player1NameInput');
  var $player2Email = $('#player2Email');
  var $player2Password = $('#player2Password');

  // Get player 1 and player 2 in array
  var playersArr = [];

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

    var name1 = $player1NameInput.val().toString().trim();
    var email1 = $player1Email.val().toString().trim();
    var pass1 = $player1Password.val();

    var promiseForEmailPassword = auth.createUserWithEmailAndPassword(email1, pass1)
      .then(function () {
        user = firebase.auth().currentUser;
        user.sendEmailVerification();
      })
      .then(function () {
        user.updateProfile({
          displayName: name1
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });

    promiseForEmailPassword.catch(function(error) {
      console.log(error.message);
    });

    auth.onAuthStateChanged(function(user) {
      if(user) {
        console.log(user.displayName);
      }
      else {
        console.log('not logged in');
      }
    });

    $player1NameInput.val('');
    $player1Email.val('');
    $player1Password.val('');
  });

  auth.onAuthStateChanged(function(user) {
    if(user) {
      console.log(user.displayName);
      console.log(playersArr);
    }
    else {
      console.log('not logged in');
    }
  });
  
  
});




  