
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        
        var user = firebase.auth().currentUser;
        var emailid = document.getElementById("email").value;
        if(user!=null){
            var emailId= document.getElementById("email").value;
            document.getElementById("user-text").innerHTML =emailId;
        }
        
    } else {
        // No user is signed in.
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

function login(message) {
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("error: " + errorMessage);
    });

}

function logout() {
    firebase.auth().signOut().then(function() {
        var userEmail = document.getElementById("email").value;
        // Sign-out successful.
        window.alert(userEmail + " Has logged out successfully");

    }).catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("error: " + errorMessage);
    });
}
