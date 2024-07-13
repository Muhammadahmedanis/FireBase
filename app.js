import {auth, onAuthStateChanged, signOut} from './firebase.js'

let loader = document.getElementById("loader");
let content = document.getElementById("showName");

onAuthStateChanged(auth, (user) => {
    if (user) {
        if(location.pathname !== "/profile.html")
            {
                location.href = "profile.html";
            }
        loader.style.display = "none";
        content.style.display = "block";
        console.log("login:-",user);
        // content.value = user.email ? user.email.slice(0, user.email.indexOf("@")): "not found";
        // content.value = user.email ? user.email: "not found";
    }
    else{
        if(location.pathname !== "/index.html" && location.pathname !== "/signin.html" && location.pathname !== "phone.html")
            {
                location.href == "signin.html";
            }
            console.log("Not login");
    }
  });

const logOut = () => {
    signOut(auth).then(() => {
        console.log("Sign Out");
        location.href = 'signin.html';
      }).catch((error) => {
        console.log(error);
      });
}  

let logoutBtn = document.getElementById("logOutBtn");
logoutBtn && logoutBtn.addEventListener("click", logOut);





