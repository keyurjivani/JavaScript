import { api } from "../Api/All.api.js";
import navbar from "../Compopnents/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let data = await api.get();
console.log(data);
const HandleData = (e) =>{
    e.preventDefault();

    let User_Data = {
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Phone_No : document.getElementById("Phone_No").value,
        password : document.getElementById("password").value 
    }

    let flag = false;

    for(let i=0;i<data.length;i++){
        if(data[i].Email == User_Data.Email){
            flag = true
            break;
        }
    }
    if(flag){
        alert("This Email is Already Exists")
    }else{
        api.post(User_Data);
        alert("Your Signup SuccessFully.")
        alert("Thank You")
    }
}   




document.getElementById("Collect").addEventListener("submit",HandleData)