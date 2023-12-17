var firebaseConfig = {
      apiKey: "AIzaSyCG0OPs44oYrLO3_lVM6lctgdZ-wiYigIw",
      authDomain: "kwitter-b54bc.firebaseapp.com",
      databaseURL: "https://kwitter-b54bc-default-rtdb.firebaseio.com",
      projectId: "kwitter-b54bc",
      storageBucket: "kwitter-b54bc.appspot.com",
      messagingSenderId: "1036886661294",
      appId: "1:1036886661294:web:2ebd85d291c4faee91b53f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
