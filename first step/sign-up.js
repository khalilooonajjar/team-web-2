var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("logemail").value;
var password = document.getElementById("logpass").value;
if ( username == "admin@admin.com" && password == "123456"){
alert ("Login successfully");
window.location = "home.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("logemail").disabled = true;
document.getElementById("logpass").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
const firebaseConfig = {
    apiKey: "AIzaSyDb0f3oJ4H3V09ycgEQls0gg70aPmF6gag",
    authDomain: "fullstack-e3075.firebaseapp.com",
    projectId: "fullstack-e3075",
    storageBucket: "fullstack-e3075.appspot.com",
    messagingSenderId: "216712941973",
    appId: "1:216712941973:web:c773a862fe1af2b94c669c",
    measurementId: "G-791WL7GQB7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('logemail').value;
var password = document.getElementById('logpass').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('logemail').value;
    var password = document.getElementById('logpass').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('logname'),
        email : getId('logemail'),
        password : getId('logpass')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}