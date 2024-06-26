import {auth,  RecaptchaVerifier, signInWithPhoneNumber} from './firebase.js'

let confirmation;
let phone = () => {
    let phoneNum = document.getElementById("phone");
    console.log("Phone:-", phoneNum.value);
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+${phoneNum.value}`, appVerifier)
    .then((confirmationResult) => {
        console.log("sms sent");
      confirmation = confirmationResult;
    }).catch((error) => {
        console.log(error);
    });
    phoneNum.value = '';
}

let phoneBtn = document.getElementById("phoneBtn");
phoneBtn.addEventListener("click", phone)



let otp = () => {
    let getOtp = document.getElementById("otp");
    confirmation.confirm(getOtp.value).then((result) => {
        console.log("verify");
        location.href = 'profile.html';
      }).catch((error) => {
        console.log(error);
      });
}

let otpVerification = document.getElementById("otpVerify");
otpVerification.addEventListener("click", otp)



