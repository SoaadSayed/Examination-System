var form = document.getElementById("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var reenter = document.getElementById("reenter");

var fnameSmall = document.getElementById("sfname");
var lnameSmall = document.getElementById("slname");
var emailSmall = document.getElementById("semail");
var passSmall = document.getElementById("spass");
var pass2Small = document.getElementById("spass2");


function Validate(e) {

    // First name
    if(fname.value == "") {

        fnameSmall.innerHTML = "";
        fname.style.border = "0.5px solid red";
        fnameSmall.style.visibility = "visible";
        fnameSmall.innerHTML = "*Required";
        e.preventDefault();
    
    } else if(isFinite(fname.value)) {

        fname.style.border = "0.5px solid red";
        fnameSmall.style.visibility = "visible";
        fnameSmall.innerHTML = "*Your name must be chars only";
        e.preventDefault();
    
    } else {

        fname.style.border = "0.5px solid #1c9c72";
        fnameSmall.style.visibility = "hidden";
    }


    // First name
    if(lname.value == "") {

        lnameSmall.innerHTML = "";
        lname.style.border = "0.5px solid red";
        lnameSmall.style.visibility = "visible";
        lnameSmall.innerHTML = "*Required";
        e.preventDefault();
    
    } else if(isFinite(fname.value)) {

        lname.style.border = "0.5px solid red";
        lnameSmall.style.visibility = "visible";
        lnameSmall.innerHTML = "*Your name must be chars only";
        e.preventDefault();
    
    }  else {

        lname.style.border = "0.5px solid #1c9c72";
        lnameSmall.style.visibility = "hidden";
    }

    // Email Valid  
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(email.value) || email.value == "") {

        email.style.border = "0.5px solid red";
      
        if(email.value == ""){

            emailSmall.style.visibility = "visible";
            emailSmall.innerHTML="*Required";
            e.preventDefault();
        }
        else{

            emailSmall.style.visibility = "visible";
            emailSmall.innerHTML="*Invalid Email";
            e.preventDefault();
        }
        
    } else {

        emailSmall.style.visibility = "hidden";
        email.style.border = "0.5px solid #1c9c72";
    }


    // Password Valid
    var regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!regPass.test(password.value) || password.value == "") {

        password.style.border = "0.5px solid red";

        if(password.value == "") {

            passSmall.style.visibility = "visible";
            passSmall.innerHTML = "*Required";
            e.preventDefault();
        
        } else {
            
            passSmall.style.visibility = "visible";
            passSmall.innerHTML = "*Password should contain numbers and characters";
            e.preventDefault();
        }

    } else {

        password.style.border = "0.5px solid #1c9c72";
        passSmall.style.visibility = "hidden";

        
    }

    // Password2 Valid
    var regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!regPass.test(reenter.value) || reenter.value == "") {

        reenter.style.border = "0.5px solid red";

        if(password.value == "") {

            pass2Small.style.visibility = "visible";
            pass2Small.innerHTML = "*Required";
            e.preventDefault();
        
        } else if(password.value !== reenter.value) {

            pass2Small.style.visibility = "visible";
            pass2Small.innerHTML = "*Passwords does not match";
            e.preventDefault();

        } else {

            pass2Small.style.visibility = "visible";
            pass2Small.innerHTML = "*Password should contain numbers and characters";
            e.preventDefault();
        }

    } else {

        reenter.style.border = "0.5px solid #1c9c72";
        pass2Small.style.visibility = "visible";
        
    }

    setCookie("fname", fname.value, new Date("1/12/2023"));     
    setCookie("lname", lname.value, new Date("1/12/2023"));     
    setCookie("email", email.value, new Date("1/12/2023"));     
    setCookie("password", password.value, new Date("1/12/2023"));     

}