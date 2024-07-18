import { api } from "../Api/All.api.js"

import navbar from "../Compopnents/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let data = await api.get();
console.log("getdata",data);
const HandleLogin = (e) =>{
    e.preventDefault()

    let Login_Data = {
        Email : document.getElementById("Email").value,
        password : document.getElementById("password").value 
    }
    console.log(Login_Data.Email);

    for(let i=0;i<data.length;i++)
    {
        if(data[i].Email != Login_Data.Email && data[i].password != Login_Data.password)
        {
            alert("Not Found Data")
            break
        }else{
            if(data[i].Email == Login_Data.Email && data[i].password == Login_Data.password)
                {
                    alert("SuccessFull Your Login Proccess!!!")
                    break
                }else if(data[i].Email != Login_Data.Email)
                {
                    alert("Your Email Not Found, Please Check Email")
                    break
                }else if(data[i].password != Login_Data.password)
                {
                    alert("Your Password Not Current, Please Check Password")
                    break
                }
        }
        
        
    }
   
}

document.getElementById("Login").addEventListener("submit",HandleLogin)