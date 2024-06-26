// import {auth, createUserWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber} from './firebase.js'

// // let signUp = document.getElementById("signUp-btn");
// // signUp.addEventListener("click", () => {
// //     let getEmail = document.getElementById("email");
// //     let getPass = document.getElementById("password");
// // createUserWithEmailAndPassword(auth, getEmail.value, getPass.value)
// //   .then((userCredential) => {
// //     const user = userCredential.user;
// //     console.log(user);
// //         location.href = "signin.html"
// //   })
// //   .catch((error) => {
// //     console.log(error);  
// //   });
// //   getEmail.value = '';
// //   getPass.value  = '';
// // })  



// let confirmation;
// let signUp = document.getElementById("signUp-btn");
// signUp.addEventListener("click", () => {
//             const phone = document.getElementById("phone");
//             window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
//             const appVerifier = window.recaptchaVerifier;
//             console.log("phone:-", phone.value);
//             signInWithPhoneNumber(auth, `+${phone.value}`, appVerifier)
//             .then((confirmationResult) => {
//                 console.log("sms sent");
//                 confirmation = confirmationResult;
//             }).catch((error) => {
//                 console.log(error);
//             });
//       });

// let otpVerify = document.getElementById("otpVerify");
// const otp = document.getElementById("otp");
// otpVerify.addEventListener("click", () => {
//     confirmation.confirm(otp.value).then((result) => {
//         const user = result.user;
//         console.log("user:-", user);
//       }).catch((error) => {
//         console.log(error);
//       });
// })