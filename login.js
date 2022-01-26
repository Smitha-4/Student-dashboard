function login(){
    email=document.getElementById("email").value
    password=document.getElementById("password").value
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    window.location="main.html"
}