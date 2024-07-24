let userData = JSON.parse(localStorage.getItem("role")) || []
console.log(userData); 

import { api } from "../components/Api_Data.js";

let data = await api.get()



const handleData = (e) => {
    e.preventDefault();
  
    let user = {
        Email: document.getElementById("Email").value,
        Password: document.getElementById("Password").value,
    };
  
    console.log(user);

    userData.map((ele)=>{
        if(ele.Email == user.Email && ele.Password == user.Password){
            alert("You Are elegantly logged in")
            if(ele.role == "Admin"){
            window.open("/Final_Exam_2/pages/AddProduct.html")
            }
            else{
                disable.disable = true
                window.open("/Final_Exam_2/pages/index.html")
                
                
            }
        }else{
            alert("Please Sign Up")
        }
 
    })
  
  };
  
  document.getElementById("Form").addEventListener("submit", handleData);