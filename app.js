// import { auth, onAuthStateChanged, signOut, sendEmailVerification } from "./firebase.js";

// let email = document.getElementById("email")
// let name = document.getElementById("nam")
// let mainContent = document.getElementById("main-content")
// let loader = document.getElementById("loader")


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     sendEmailVerification(auth.currentUser)
//     .then(() => {
//       console.log("Email sent");
//     });
//     if(location.pathname !== "/profile.html"){
//       location.href = "profile.html";
//     }
//     loader.style.display = "none";
//     mainContent.style.display = "block";
//     email.innerHTML = user.email; 
//     name.innerHTML = user.email.slice(0, user.email.indexOf("@"));
//     console.log("login:-",user);
//   } else {
//     console.log("not login");
//     if(location.pathname !== "/signin.html" && location.pathname !== "/index.html"){
//       location.href = "signin.html";
//     }
//   }
// });


// let logout = document.getElementById("logOut-btn");
// logout && logout.addEventListener("click", () => {
//   signOut(auth).then(() => {
//     console.log("Sign out");
//     location.href = "index.html"
//   }).catch((error) => {
//     console.log(error);
//   });
// })








