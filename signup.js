import {auth, createUserWithEmailAndPassword} from'./firebase.js'

// let signupConfirmPassword = document.getElementById("signupConfirm-password");
const signUp = () => {
    let signupEmail = document.getElementById("signupEmail");
    let signupPassword = document.getElementById("signupPassword");
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("SignUp:-", user);
    location.href = "./signin.html"
  })
  .catch((error) => {
    console.log("Error:-", error);
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  signupEmail.value = '';
  signupPassword.value = '';
  // signupConfirmPassword.value = '';
}

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signUp);
