function login(){
    let email = document.getElementById("email").value;
    let pass  = document.getElementById("pass").value;

    let len = email.length;
    let len2 = pass.length;
    if(len != 0 && pass != 0 ){
    alert("Login successfully")
    }
    else {
        alert("Login Unsuccessful");
    }
}
function signup(){
    alert("SignUp successfully")
}