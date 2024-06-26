import Navbar from "../Components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar()

let UserData = JSON.parse(localStorage.getItem('UserData')) || [];



const handle = (e) => {
    e.preventDefault();
  
    let User = {
        Name: document.getElementById("Name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        CuurentPass: document.getElementById("CuurentPass").value,
        UserData : [],
    };
  
       
      alert("Your SignUp Succeessful");
      console.log(User);
      localStorage.setItem("User", JSON.stringify(User));
      localStorage.setItem("Islogin", true);

     
  
  
  }
  
  document.getElementById("Form").addEventListener("submit", handle);
  