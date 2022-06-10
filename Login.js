var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");

var emailSmall = document.getElementById("semail");
var passSmall = document.getElementById("spass");

var getEmail = getCookie("email");
var getPassword = getCookie("password");


function Login(e) {


    if(email.value !== getEmail) {
        
        
        email.style.border = "0.5px solid red";
        emailSmall.style.visibility = "visible";
        emailSmall.innerHTML = "*Invalid Email";
        e.preventDefault();
        
    } else {
        
        email.style.border = "0.5px solid #1c9c72";
        emailSmall.style.visibility = "hidden";
    }
    
    
    if(password.value !== getPassword) {
        
        password.style.border = "0.5px solid red";
        passSmall.style.visibility = "visible";
        passSmall.innerHTML = "*Invalid Password";
        e.preventDefault();
        
    } else {
        
        password.style.border = "0.5px solid #1c9c72";
        passSmall.style.visibility = "hidden";  
        window.location.replace("Quiz.html");
    }
    
}



function SwitchBtn() {

    getCookies("email");
    getCookies("password");
    window.location.replace("Signup.html");
}