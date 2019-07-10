$(document).ready(function() {
  // Messages
  var $messages = $('#messages');

  // Get player 1 Elements using jQuery
  var $player1StartGame = $('#player1StartGame');
  var $player1Name = $('#player1Name');
  var $player1NameInput = $('#player1NameInput');

  // Get player 2 Elements using jQuery
  var $player2StartGame = $('#player2StartGame');
  var $player2Name = $('#player2Name');
  var $player2NameInput = $('#player2NameInput');

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

  var gameState = database.ref('/gameState');
  var players = database.ref('/players');
  var player1 = database.ref('/players/player1');
  var player2 = database.ref('/players/player2');
  
  function startGame() {
    gameState.set('true');

    // var state = gameState.once("value").then(function (snapshot) {
    //   console.log (snapshot.val()); 
    //   if (snapshot.val() === false) {    
    //     console.log ("game is off"); 
    //   }  
      
    //   else {
    //     $messages.removeClass('d-none');
    //     console.log ("game is on"); 
    //   }
    // }) 
  }
  
  function updatePlayer1Name() {
    var player1NameRef = database.ref('players/player1/name');

    player1NameRef.on("value", function(snapshot) {
      $player1Name.text(snapshot.val());
    });

    if(player1NameRef) {
      $messages.removeClass('d-none');
    }
  }

  function updatePlayer2Name() {
    var player2NameRef = database.ref('players/player2/name');

    player2NameRef.on("value", function(snapshot) {
      $player2Name.text(snapshot.val());
    });

    if(player2NameRef) {
      $messages.removeClass('d-none');
    }
  }


  $player1StartGame.on('click', function() {   

    var name1 = $player1NameInput.val().toString().trim();

    if(name1 !== '') {
      startGame();
      
      $player1NameInput.val('');
  
      player1.set({
        name: name1
      });
  
      updatePlayer1Name();
    }

  });

  $player2StartGame.on('click', function() {   

    var name2 = $player2NameInput.val().toString().trim();

    console.log(name2);

    if(name2 !== '') {
      startGame();
      
      $player2NameInput.val('');
  
      player2.set({
        name: name2
      });
  
      updatePlayer2Name();
    }

  });



  updatePlayer1Name();
  updatePlayer2Name();
  
});