import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


let IsLogin = localStorage.getItem("Islogin") || false ;
let userData = JSON.parse(localStorage.getItem("User")) || [];
console.log("userData",userData);
if(IsLogin){
    document.getElementById("navbar").innerHTML = navbar("logout",userData.Name)
}else{
    // window.location.href = "/Project/html/Login.html"
}



document.getElementById("login").addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.removeItem("IsLogin");
    // window.location.href = "/Project/html/Login.html"
   

})



