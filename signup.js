import {auth, createUserWithEmailAndPassword, googleProvider, GoogleAuthProvider, signInWithPopup} from'./firebase.js'

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
}

let signupBtn = document.getElementById("signupBtn");
if(signupBtn){
  signupBtn.addEventListener("click", signUp);
}


let signGoogle = () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("userWithG". user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("error", );
  });

}

let signinwithGoogle = document.getElementById("signinwithGoogle");
if(signinwithGoogle){
  signinwithGoogle.addEventListener("click", signGoogle)
}




let signFacebook = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log("error");
  });
}
