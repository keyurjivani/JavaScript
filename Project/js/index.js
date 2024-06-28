import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


let isLogin = localStorage.getItem("Islogin") || false ;
let userData = JSON.parse(localStorage.getItem("User")) || [];
console.log("userData",userData);
if(isLogin){
    document.getElementById("navbar").innerHTML = navbar("logout",userData.Name)
}else{
    window.location.href = "/JavaScript/Project/html/Login.html"
}



document.getElementById("login").addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.removeItem("isLogin");
    window.location.href = "/JavaScript/Project/html/Login.html"

})



