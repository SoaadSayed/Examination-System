// document.cookie = "fname=soaad";
// console.log(document.cookie);

// SET COOKIE
function setCookie(key, value, date) {

    if(key == undefined || value == undefined || isFinite(key)) {

        throw("error"); 
   
    }

    if(date) {

        document.cookie = key + "=" + value + "; expires = " + date;
    }
        
    else {
            
        document.cookie = key + "=" + value;

    }

}

// setCookie("fname", "soaad", new Date("1/12/2023"));
// setCookie("lname", "sayed", new Date("1/12/2023"));
// setCookie("salary", "2000", new Date("1/12/2023"));
// setCookie("age", "25", new Date("1/12/2023"));


// GET COOKIE
function getCookie(key) {

    var result = null;
    var data = document.cookie;
    // console.log(data);
    var arr = data.split("; ");
    // console.log(arr);
    arr.forEach(function(el) {

        var KeyValue = el.split("=");

        if(KeyValue[0] === key){

            result = KeyValue[1];
        }
        

    });
    return result;
    
}

// console.log(getCookie("fname"));


// DELETE COOKIE
function deleteCookie(key) {

    var result = false;

    if(hasCookie(key)) {

        var date = new Date("1/12/1990");
        setCookie(key, "s", date);
        result = true;
    }
    return result;

}

// deleteCookie("fname");
// deleteCookie("lname");
// deleteCookie("age");
// deleteCookie("salary");

//LIST ALL COOKIES
function allCookies() {

    // var cookies = document.cookie.split("; ");
    // return cookies;


    // var result = "";
    // for(var i = 1; i <= cookies.length; i++) {

    //     result += cookies[i - 1];
    // }
    

    var pairs = document.cookie.split("; ");
    var Cookies = {};
    for(var i = 0; i < pairs.length; i++) {

        var pair = pairs[i].split("=");
        Cookies[(pair[0]+'').trim()] = pair.slice(1).join("=");
    }
    return Cookies;
}

// console.log(allCookies());


// HAS COOKIES
function hasCookie(key) {

    var result = true;

    if(getCookie(key) === null) {

        result = false;
    }
    return result;
}