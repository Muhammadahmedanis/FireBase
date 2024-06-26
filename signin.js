import {auth, signInWithEmailAndPassword, sendEmailVerification  } from './firebase.js'

const signIn = () => {
    let signinEmail = document.getElementById("signinEmail");
    let signinPassword = document.getElementById("signinPassword");

    signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signin:-", user);
    sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log("Email sent:-", user.emailVerified);
      if(user.emailVerified){
        location.href = "profile.html";
        console.log(user.emailVerified);
      }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error:-", error);
  });
  
  signinEmail.value = '';
  signinPassword.value = '';
  
});

}

let signinBtn = document.getElementById("signinBtn");
signinBtn.addEventListener("click", signIn);


