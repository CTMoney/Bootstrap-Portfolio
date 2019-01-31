  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApagFlbMBRV0HGngUh5kpVT-fYPYIh3z8",
    authDomain: "whoops-98302.firebaseapp.com",
    databaseURL: "https://whoops-98302.firebaseio.com",
    projectId: "whoops-98302",
    storageBucket: "whoops-98302.appspot.com",
    messagingSenderId: "339120322906"
  };
  firebase.initializeApp(config);

const database = firebase.database();

$("#submit-button").on("click", function () {
    event.preventDefault();

    let fullName = $("#fullName-submit").val().trim();
    let emailAddress = $("#emailAddress-submit").val().trim();
    let subject = $("#subject-submit").val().trim();
    let message = $("#message-submit").val().trim();

    database.ref().push({
        fullName,
        emailAddress,
        subject,
        message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

    $("#fullName-submit").val("");
    $("#emailAddress-submit").val("");
    $("#subject-submit").val("");
    $("#message-submit").val("");
})