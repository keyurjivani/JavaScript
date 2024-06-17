import getId from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();




let isLogin = localStorage.getItem("Islogin") || false ;
let userData = JSON.parse(localStorage.getItem("User"))
// console.log("userData",userData);
if(isLogin){
    document.getElementById("navbar").innerHTML = navbar()
}else{
    window.location.href = "http://127.0.0.1:3000/html/Login.html"
}






let array = JSON.parse(localStorage.getItem('array')) || [];
console.log(array);
const HandleProducts = (e) =>{
    e.preventDefault();

    let Product = {
        Pro_url : getId("Pro_url"),
        Pro_Title : getId("Pro_Title"),
        Pro_Price : getId("Pro_Price"),
        Pro_Category : getId("Pro_Category"),
    }

    // console.log(Product);
    array.push(Product)

    localStorage.setItem("array",JSON.stringify(array));
}



document.getElementById("Collect_Products").addEventListener("submit",HandleProducts)