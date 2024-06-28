import getId from "../components/helper.js";
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


let isLogin = localStorage.getItem("Islogin") || false ;
let userData = JSON.parse(localStorage.getItem("User")) || [];
console.log("userData",userData);
if(isLogin){
    document.getElementById("navbar").innerHTML = navbar("logout",userData.Name)
}else{
    window.location.href = "/JavaScript/Project/html/SignUp.html"
}


// let userData = JSON.parse(localStorage.getItem("User"));

console.log(userData);

const handleData = (e) => {
  e.preventDefault();

  let user = {
    email: getId("email"),
    password: getId("password"),
  };

  console.log(user);

  if (userData) {
    if (userData.email != user.email) {
      alert("user not found: " + user.email);
    } else if (userData.password != user.password) {
      alert("password mismatch: " + user.password);
    } else {
      alert("login success: " + user.username);
      localStorage.setItem("isLogin", true);
      window.location.href = "/JavaScript/Project/index.html"
    }
  } else {
    alert("please sign up ");
    window.location.href = "/JavaScript/Project/html/SignUp.html"
  }
};

document.getElementById("LoginForm").addEventListener("submit", handleData);
