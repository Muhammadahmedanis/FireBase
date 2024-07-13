import {auth, createUserWithEmailAndPassword, db, doc, setDoc, collection, addDoc, getDoc, updateDoc} from './firebase.js'

let email = document.getElementById("emailStore");
let pass = document.getElementById("passwordStore");
let storeBtn = document.getElementById("storeBtn");
let n = document.getElementById("showName");

let Store = () => {
createUserWithEmailAndPassword(auth, email.value, pass.value)
.then( async (userCredential) => {
    const user = userCredential.user;
    console.log("User:-", user);
        const res = await setDoc(doc(db, "data", user.uid), {
            email: email.value,
            pass: pass.value, 
        })   
        // console.log(res);
    // const docRef = await addDoc(collection(db, "data"), {
    //     email: email.value,
    //     pass: pass.value,
    // });
    // console.log("Document written with ID: ", docRef.id);
    // if(user){

    let a;
        const docRef = doc(db, "data", user.uid);
        const docSnap = await getDoc(docRef);
        console.log("UserData:-",docSnap.data());
        
        if(docSnap.data()){
            email.value = '';
            pass.value = '';
            location.href = "profile.html"
            a = docSnap.data().email;
            console.log(a);
        }
    if(n){
        n.value = a;
    }
    })
    .catch((error) => {
        console.log("Error:-", error);
    });
    
}


let updBtn = document.getElementById("updBtn");

let Upd = async() => {
    console.log(n.value);
    const userRef = doc(db, "data", auth.currentUser.uid);
    await updateDoc(userRef, {
    email: n.value
});
console.log("profile update");
}

if(updBtn){
    updBtn.addEventListener("click", Upd)
}

if(storeBtn){
    storeBtn.addEventListener("click", Store)
}

//  const errorCode = error.code;
//  const errorMessage = error.message;