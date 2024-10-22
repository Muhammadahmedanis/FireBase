import { auth, googleProvider, GoogleAuthProvider, signInWithPopup} from "./firebase.js";

let signGoogle = () => {
    signInWithPopup(auth, googleProvider)
   .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("user",user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Error");
  });
}


let signinwithGoogle = document.getElementById("signinwithGoogle");
if(signinwithGoogle)
{
    signinwithGoogle.addEventListener("click", signGoogle)
}