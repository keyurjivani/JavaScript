import getId from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();



const handle = (e) => {
  e.preventDefault();

  let User = {
    Name: getId("Name"),
    email: getId("email"),
    password: getId("password"),
    CuurentPass: getId("CuurentPass"),
  };

     
    alert("Your SignUp Succeessful");
    console.log(User);
    localStorage.setItem("User", JSON.stringify(User));
    localStorage.setItem("Islogin", true);
    document.getElementById("navbar").innerHTML = navbar("logout",User.Name);
    window.location.href = "/Project/index.html";


}

document.getElementById("Form").addEventListener("submit", handle);
