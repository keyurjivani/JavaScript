import Navbar from "../Components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let userData = JSON.parse(localStorage.getItem("User"));


const handleData = (e) => {
    e.preventDefault();
  
    let user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
  
    console.log(user);
  
    if (userData) {
      if (userData.email != user.email) {
        alert("user not found: " + user.email);
      } else if (userData.password != user.password) {
        alert("password mismatch: " + user.password);
      } else {
        alert("login success: ");
        localStorage.setItem("isLogin", true);
  
      }
    } else {
      alert("please sign up ");
  
    }
  };
  
  document.getElementById("LoginForm").addEventListener("submit", handleData);