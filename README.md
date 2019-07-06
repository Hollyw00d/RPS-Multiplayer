# RPS-Multiplayer
## Rock, Paper, Scissors Multiplayer Game using Firebase

### Psuedo Coding
1. Create HTML and CSS.
2. Create Firebase DB and make it secure.
3. Do a little Firebase DB test an onclick and incrementing.
4. Start JavaScript by creating variables for HTML selectors using jQuery, player1, player2, database for Firebase, chatData, playerData for choosing rock paper, or scissors, player1Wins, player1Losses, player2Wins, player2Losses, player1Name, player2Name.
5. Buttons for rock, paper, scissors for player1 and player2, start game button, submit comment button for chat.
6. Logic to allow only 2 players playing at a time.
7. For rock, paper, scissors buttons use them to choose rock, paper, or scissors. Use buttons for all events and no anchor tags.
8. Iniatilize Firebase using my API key.
9. Use something like var chatData = database.ref("/chat"); for storing chat data, including player1Name or player2Name, timestamp, ID for player, and a chatMessage.
10. Use code like below to insert chat database into DB:
$("#chat-input").keypress(function(e) {
  if (e.which === 13 && $("#chat-input").val() !== "") {
    var message = $("#chat-input").val();

    chatData.push({
      name: username,
      message: message,
      time: firebase.database.ServerValue.TIMESTAMP,
      idNum: playerNum
    });

    $("#chat-input").val("");
  }
});

$("#chat-send").click(function() {
  if ($("#chat-input").val() !== "") {
    var message = $("#chat-input").val();

    chatData.push({
      name: username,
      message: message,
      time: firebase.database.ServerValue.TIMESTAMP,
      idNum: playerNum
    });

    $("#chat-input").val("");
  }
});
11. Pulling from chatData object in DB and appending to chat window.
12. Use snapshot, including snapshot.child() to show objects in DB.
13. Checkout Firebase docs.
14. Limit games to 100 and then add restart game button. Have a key value pay that is gameLimit and if gameLimit is greater than or equal to 100 add restart game button.
15. Add a currentTotal variable to keep track of games played.
16. Use switch statement to determine logic for who wins rock, paper, scissors game. Write functions for what happens if player1 wins and if player2 wins. 
17. If there's a tie than don't record wins or losses but make peeps play again.
18. Use function constructor.
19. Have logic for "Start Game" button in there are two players connected.
20. Check for current players to see if there's one player connected or two players connected.
21. Have there be a leave game button and then reset scores and all other info.