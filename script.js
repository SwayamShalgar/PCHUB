function login(){
    let email = document.getElementById("email").value;
    let pass  = document.getElementById("pass").value;

    let len2 = pass.length;
    let regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/g;

    if(email === "" || !regemail.test(email)){
        // alert("Please enter correct Email");
        alert("Please Enter correct Email !");
    }
    else if(len2 === 0 ){
        alert("Please Enter Correct Password !");
    }
    else if(len2 < 7 ){
        alert("Password must be greater than 7 characters !");
    }
    else {
        alert("Login successful");
        let c = confirm("Do You want to save Cookies ?")
        if(c===true){
        document.cookie = "email : "+email+" password : "+pass;
    }
    }
}
function signup(){
    let pass1 = document.getElementById("signpass1").value;
    let pass2  = document.getElementById("signpass2").value;
    let email1 = document.getElementById("email1").value;
    let phone = document.getElementById("phone").value;
    let name1 = document.getElementById("name1").value;

    let regemail1 = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/g;
    let regphone = /^\d{10}$/;

    let lenpass = pass1.length;

    if(email1 === "" || !regemail1.test(email1)){
        alert("Please enter correct Email");
    }

    else if(phone === "" || !regphone.test(phone)){
        alert("Please enter correct Phone number");
    }

    else if(name1 === ""){
        alert("Please enter Name");
    }

    else if(lenpass < 7){
        alert("Password must be greater than 7 characters");
    }
    else if(pass1 !== pass2){
    alert("Password did'nt match !")
    }

    else{
        alert("SignUp Successfully")
    }
}

var dark = document.getElementById("dark");
var nav = document.getElementById("nav")
dark.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        dark.innerHTML = "Light-Mode"
        dark.style.backgroundColor = "white";
        dark.style.color = "black"
        document.body.style.transition = "0.5s";
        nav.setAttribute("data-bs-theme","dark")
    }
    else {
        dark.innerHTML = "Dark-Mode";
        dark.style.backgroundColor = "black";
        dark.style.color = "white";
        nav.setAttribute("data-bs-theme","light")
    }
}

function search(){
    let search = document.getElementById("scr").value;
    let get = document.getElementById("get");

    let game = /([ging])\w+/g;
    let lap = /([lpt])\w+/g;
    let con = /([consoe])\w+/g;
    let mac = /([ma])\w+/g;

    if(game.test(search)){
        get.setAttribute("href","gaming.html");
    }
    else if(lap.test(search)){
        get.setAttribute("href","laptop.html");
    }
    else if(con.test(search)){
        get.setAttribute("href","console.html");
    }
    else if(mac.test(search)){
        get.setAttribute("href","mac.html");
    }
    else {
        alert("Enter correct input");
    }
}

function openPopup() {
    let mail = document.getElementById("ContactEmail").value ;
    let name = document.getElementById("userName").value ;
    let email = document.getElementById("ContactEmail").value;
    let select = document.getElementById("selectOpt").value;
    let query = document.getElementById("textArea").value;

    let regemail2 = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/g;

    if(mail === "" || !regemail2.test(mail)){
        alert("Please enter correct Email");
    }
    else{

    var popupContent = 
        
        "<center><h2>YOUR COMPLAIN IS REGISTERED</h2></center><br>" +
        "<p>NAME                      : " + name + "</p>" +
        "<p>EMAIL                     : " + email + "</p>" +
        "<p>SELECTED QUERY            : " + select + "</p>" +
        "<p>QUERY DISCRIPTION         : " + query + "</p>" ;
    var popupOptions = 'width=600,height=600';

    // Open the pop-up window
    var popup = window.open('', '_blank', popupOptions);
    // popup.document.write("<style> backgroundColor: #111</style>");
    popup.document.write(popupContent + "<br>");
    }   
}
