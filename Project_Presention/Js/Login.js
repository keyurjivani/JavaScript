//Import Navbar from Components Folder
import { navbar } from "../Component/Navbar.js";
import { getvalue } from "../Component/helper.js";
import { User_API } from "../Component/Novel_Api.js";

document.getElementById("navbar").innerHTML = navbar()

const handledata=async (e)=>{
    e.preventDefault();

    let data={
        email:getvalue("email"),
        password:getvalue("password"),
    }

    let email=await User_API.get_email(data.email);
    
    if(email.length==0){
        alert("User Not Found.....");
        // window.location.href="/Live_Class_Project/Pages/sign_up.html";
        window.open("/Project_Presention/html/Sign_up.html")
    }else if(email[0].password!=data.password){
        alert("Incorrect Password...");
    }else{
        alert("Login Successfully...")
        localStorage.setItem("IsLogin",true);
        window.open("/Live_Class_Project/Pages/login.html")
        // window.location.href="/Live_Class_Project/index.html";
    }
}
document.getElementById("login_data").addEventListener("submit",handledata);