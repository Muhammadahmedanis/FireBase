// import {auth, signInWithEmailAndPassword} from "./firebase.js"

// let signIn = document.getElementById("signIn-btn");
// signIn.addEventListener("click", () => {
//     let getEmail = document.getElementById("semail");
//     let getPass = document.getElementById("spassword");
//     signInWithEmailAndPassword(auth, getEmail.value, getPass.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("signin:-", user);
//       location.href = 'profile.html'
//     })
//   .catch((error) => {
//     console.log(error);  
//   });
//   getEmail.value = '';
//   getPass.value  = '';
// })  