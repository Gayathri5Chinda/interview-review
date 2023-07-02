import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
        apiKey: "AIzaSyCdgzy5iFSl-zSpJRVEHBJQRU5jm0WXfEM",
        authDomain: "formapp-c2fed.firebaseapp.com",
        projectId: "formapp-c2fed",
        storageBucket: "formapp-c2fed.appspot.com",
        messagingSenderId: "610254472535",
        appId: "1:610254472535:web:eaf19b2abbef638c2a6a12"
      };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener("click", function(){
        document.getElementById("register-div").style.display = "inline";
        document.getElementById("login-div").style.display = "none";
    
});

document.getElementById("log-btn").addEventListener("click", function(){
        document.getElementById("register-div").style.display = "none";
        document.getElementById("login-div").style.display = "inline";
        
});


document.getElementById("login-btn").addEventListener("click",function(){
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => { 
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML = "Welcome Back<br>"+loginEmail+"was login Successfully";
    })
   .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML = "Sorry ! <br>"+errorMessage;
    });
});



