import getId from "../components/helper.js";

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

const handle = (e) => {
    e.preventDefault();

    let User  = {
        Name : getId("Name"),
        email : getId("email"),
        password : getId("password"),
        CuurentPass : getId("CuurentPass")

    }

    if(User.CuurentPass == User.password){
        alert("Your SignUp Succeessful");
        console.log(User);
        localStorage.setItem("User",JSON.stringify(User))
        localStorage.setItem("Islogin",true)
        window.location.href = "http://127.0.0.1:3000/Project/index.html"
    }else{
        alert("Please Enter Current PassWord")
    }

    
}


document.getElementById("Form").addEventListener("submit",handle)