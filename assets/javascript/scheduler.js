 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBiA0J_AHTjTZAV59Rj6sNxCsoU960DjYQ",
    authDomain: "train-scheduler-432f8.firebaseapp.com",
    databaseURL: "https://train-scheduler-432f8.firebaseio.com",
    projectId: "train-scheduler-432f8",
    storageBucket: "train-scheduler-432f8.appspot.com",
    messagingSenderId: "219049365504"
  };
  firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    // Initial Values
    var name = "";
    var role = "";
    var start = 0;
    //var months = "";
    var rate = 0;
    //var billed = "";

    // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      name = $("#name-input").val().trim();
      role = $("#role-input").val().trim();
      start = $("#start-input").val().trim();
      //months = $("#months-input").val().trim();
      rate = $("#rate-input").val().trim();
      //billed = $("#billed-input").val().trim();
      console.log(name);
      console.log(role);
      console.log(start);
      console.log(rate);

      return false;
//------------------------------------------------------------
      database.ref().push({
        name:name,
        role:role,
        start:start,
        //months: months,
        rate:rate,
        //billed: billed,
      });

    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of childSnapshot
      console.log(childSnapshot.val());
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().start);
      console.log(childSnapshot.val().rate);

    $("#employees").append('<td>name-input</td>')

      // Change the HTML to reflect
      $("#name-display").html(childSnapshot.val().name);
      $("#role-display").html(childSnapshot.val().role);
      $("#start-display").html(childSnapshot.val().start);
      $("#rate-display").html(childSnapshot.val().rate);
      //$("#rate-display").text(childSnapshot.val().rate);
      //$("#rate-display").text(childSnapshot.val().rate);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });