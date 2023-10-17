// function login(){
//     window.open("Login.html");
// }
// function signup(){
//     window.open("Login.html");
// }

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
