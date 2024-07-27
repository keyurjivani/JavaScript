// Import Navbar From Componenet Folder
import { products_API } from "../Component/Novel_Api.js";
import { getvalue } from "../Component/helper.js";
import { navbar } from "../Component/Navbar.js";

document.getElementById("navbar").innerHTML = navbar()


//IS Login true than SHow User Name Otherwise Redirect to Login Page
// let user=JSON.parse(localStorage.getItem("user"))||[];
// let IsLogin=JSON.parse(localStorage.getItem('IsLogin'))||false;

// if(IsLogin){
//     document.getElementById("navbar").innerHTML=navbar("Log Out",user.name);
// }else{
//     // window.location.href="/Live_Class_Project/Pages/login.html";
//     window.location.href = "/Live_Class_Project/Pages/login.html";

// }

document.getElementById("login").addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.removeItem("IsLogin");
    window.location.href = "/Live_Class_Project/Pages/login.html";

})

//get data from input
const handledata=(e)=>{
    e.preventDefault();

    let data={
        img:getvalue("img"),
        title:getvalue("title"),
        price:getvalue("price"),
        category:getvalue("category"),
    }

    products_API.post(data);
    alert("Data Added Successfully....")
    document.getElementById("add_product").reset();
}
document.getElementById("add_product").addEventListener("submit",handledata);