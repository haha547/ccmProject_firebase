var timer;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      
      var user = firebase.auth().currentUser;
      
      if(user != null) {
          var emailId = user.email;
          document.getElementById("user_para").innerHTML = "Welcome User : " + emailId;
          timer = setTimeout("location.href='operator/main.html'", 5000);
      }
      
  } else {
    // No user is signed in.
      
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      
      
  }
});


function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    if (userEmail === "guest"){
        userEmail = "guest@gmail.com"
    }
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      window.alert("ERROR : " + errorMessage);
    });
}

function logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    
    clearTimeout(timer);
}