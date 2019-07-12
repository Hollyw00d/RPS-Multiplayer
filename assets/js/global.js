$(document).ready(function() {
  // Messages
  var $messages = $('#messages');

  // Get player 1 Elements using jQuery
  var $player1StartGame = $('#player1StartGame');
  var $player1Name = $('#player1Name');
  var $player1NameInput = $('#player1NameInput');
  var $player1Container = $('#player1-container');
  var $player1RpsBtn = $('.player1Btn');

  // Get player 2 Elements using jQuery
  var $player2StartGame = $('#player2StartGame');
  var $player2Name = $('#player2Name');
  var $player2NameInput = $('#player2NameInput');
  var $player2Container = $('#player2-container');
  var $player2RpsBtn = $('.player2Btn');

  // Game elements using jQuery
  $gameResult = $('#game-result');
  $gameResultMsg = $('#game-result-msg');

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

  var gameState = database.ref('gameState');
  // var players = database.ref('/players');
 
  var player1 = database.ref('players/player1');
  var player2 = database.ref('players/player2');

  var player1NameRef = database.ref('players/player1/name');
  var player2NameRef = database.ref('players/player2/name');

  var player1Wins = database.ref('players/player1/wins');
  var player1Loses = database.ref('players/player1/loses');
  var player1Ties = database.ref('players/player1/ties');
  var player1CurrentRPS = database.ref('players/player1/currentRPS');

  var player2Wins = database.ref('players/player2/wins');
  var player2Loses = database.ref('players/player2/loses');
  var player2Ties = database.ref('players/player2/ties');
  var player2CurrentRPS = database.ref('players/player2/currentRPS');
  
  function startGame() {
    gameState.set('true');
  }
  
  function updatePlayer1Name() {
  
    player1NameRef.on("value", function(snapshot) {
      $player1Name.text(snapshot.val());
    });

    if(player1NameRef) {
      $messages.removeClass('d-none');
    }
  }

  function updatePlayer2Name() {
    
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

    if(name2 !== '') {
      startGame();
      
      $player2NameInput.val('');
  
      player2.set({
        name: name2
      });
  
      updatePlayer2Name();
    }

  });

  $player1Container.on('click', '.player1Btn', function() {
    player1CurrentRPS.set($(this).val());
  });  

  $player2Container.on('click', '.player2Btn', function() {
    player2CurrentRPS.set($(this).val());
  });  


  updatePlayer1Name();
  updatePlayer2Name();
  
});