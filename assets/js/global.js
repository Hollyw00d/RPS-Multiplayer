$(document).ready(function() {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: 'AIzaSyDQ2RB_vJkGuIjbQwfPlHC-sKc9qC1A1Uo',
        authDomain: 'fir-bootcamp-activities-83a6f.firebaseapp.com',
        databaseURL: 'https://fir-bootcamp-activities-83a6f.firebaseio.com',
        projectId: 'fir-bootcamp-activities-83a6f',
        storageBucket: 'fir-bootcamp-activities-83a6f.appspot.com',
        messagingSenderId: '349432820365',
        appId: '1:349432820365:web:2ecc7d4b41fadb08'
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      var database = firebase.database();

      // Elements grabbed via jQuery
      var $addTrain = $('#addTrain');
      var $trainName = $('#trainName');
      var $destination = $('#destination');
      var $firstTrainTime = $('#firstTrainTime');
      var $frequency = $('#frequency');
      var $trainScheduleTableTBody = $('#trainScheduleTable > tbody');

      // On click event for $addTrain
      $addTrain.on('click', function() {

        // Add input tab values into 
        // addNewTrain object
        var addNewTrain = {
            trainName: $trainName.val().trim(),
            destination: $destination.val().trim(),
            firstTrainTime: $firstTrainTime.val().trim(),
            frequency: $frequency.val().trim()
        };

        // Push in addNewTrain object to Firebase database
        database.ref().push(addNewTrain);

        // Clear out values
        // from form field after form submission
        $trainName.val('');
        $destination.val('');
        $firstTrainTime.val('');
        $frequency.val('');

      });

      // Listen to database changes and on object child
      // do stuff
      database.ref().on('child_added', function(childSnap) {
        // Get trainName, destination, firstTrainTime, frequency
        // from Firebase database
        var trainName = childSnap.val().trainName;
        var destination = childSnap.val().destination;
        var firstTrainTime = childSnap.val().firstTrainTime;
        var frequency = childSnap.val().frequency;

        // Get first train time, converted into hh:mm format using moment
        var firstTimeConverted = moment(firstTrainTime, 'hh:mm');
        // Get current time
        var currentTime = moment();
        // Get difference in time in minutes between time right now
        // and current time
        var differenceInTime = currentTime.diff(moment(firstTimeConverted), 'minutes');
        // Get remainder of difference in time and frequency of trains 
        // in minutes using modulo operator
        var timeRemainder = differenceInTime % frequency;
        // For minutes until next train, subtrain frequency
        // minus timeRemainder
        var minutesUntilNextTrain = frequency - timeRemainder;
        // Add current time to time timeReminder (which is convert
        // into minutes) and format this into military time (hh:mm)
        var nextTrain = currentTime.add(timeRemainder, 'minutes').format('hh:mm');

        // Append train schedules on tbody tag in table
        $trainScheduleTableTBody.append(
            '<tr><td>' + trainName + '</td>' +
            '<td>' + destination + '</td>' +
            '<td>' + frequency + '</td>' +
            '<td>' + nextTrain + '</td>' +
            '<td>' + minutesUntilNextTrain + '</td><tr>'
        );

      });

});