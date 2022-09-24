const firebaseConfig = {
    apiKey: "AIzaSyBfmmZNBfi1-_tBQBG9JvMsCUlL7rMPMDs",
    authDomain: "smuhabdullah.firebaseapp.com",
    databaseURL: "https://smuhabdullah-default-rtdb.firebaseio.com",
    projectId: "smuhabdullah",
    storageBucket: "smuhabdullah.appspot.com",
    messagingSenderId: "788505845758",
    appId: "1:788505845758:web:c6d62c01102d11eb882aaf",
    measurementId: "G-YEBBQ3W29B"
  };

  //initialize firebase
firebase.initializeApp(firebaseConfig);


//reference your database
var contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name =  getElementVal("Name");
    var email =  getElementVal("email");
    var subject =  getElementVal("subject");
    var message =  getElementVal("message");
    saveMessages(name,email,subject,message);

    //enable alert
    document.querySelector(".alert").style.display = "block";

    //remove the alert
    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none";
    },3000);

    //reset form
    document.getElementById("contactForm").reset();
};

const saveMessages = (name,email,subject,message)=>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name:Name,
        email:email,
        subject:subject,
        message:message,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};