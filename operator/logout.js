firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      
      var user = firebase.auth().currentUser;
      
      if(user != null) {
          var emailId = user.email;
          document.getElementById("user_name").innerHTML = "歡迎使用者 " + emailId;
      }
      
  } else {
    // No user is signed in.
      
  }
});
function logout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    document.location.href="../index.html";
}