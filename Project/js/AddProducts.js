import getId from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();




let isLogin = localStorage.getItem("Islogin") || false ;
let userData = JSON.parse(localStorage.getItem("User")) || [];
console.log("userData",userData);
if(isLogin){
    document.getElementById("navbar").innerHTML = navbar("logout",userData.Name)
}else{
    window.location.href = "/Project/html/Login.html"
}






let array = JSON.parse(localStorage.getItem('array')) || [];
console.log(array);
const HandleProducts = (e) =>{
    e.preventDefault();
    let n = array.length - 1
    let Product = {
        Pro_url : getId("Pro_url"),
        Pro_Title : getId("Pro_Title"),
        Pro_Price : getId("Pro_Price"),
        Pro_Category : getId("Pro_Category"),
        id : array.length == 0 ? 1 : array[n].id + 1 
    }

    console.log(array);
    array.push(Product)

    localStorage.setItem("array",JSON.stringify(array));
    alert("SuccessFully Added")
}



document.getElementById("Collect_Products").addEventListener("submit",HandleProducts)