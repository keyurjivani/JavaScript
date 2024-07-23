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
            alert("yes")
            if(ele.role == "Admin"){
            window.open("/Final_Exam_2/pages/AddProduct.html")
            }
            else{
                window.open("/Final_Exam_2/pages/index.html")
            }
        }else{
            alert("Not For You")
        }
 
    })
  
//     if (userData) {
//       if (userData[0].Email != user.Email) {
//         alert("user not found: " + user.Email);
//       } else if (userData[0].Password != user.Password) {
//         alert("password mismatch: " + user.Password);
//       } else {
//         alert("login success: ");
//         localStorage.setItem("isLogin", true);
//         if(userData[0].role == "Admin"){
//             window.open("/Final_Exam_2/pages/AddProduct.html")
//         }else{
//             window.open("/Final_Exam_2/pages/index.html")
//         }
//         // window.location.href = "/Project/index.html"
//       }
//     } else {
//       alert("please sign up ");
//     //   window.location.href = "/Project/html/SignUp.html"
//     }
  };
  
  document.getElementById("LoginForm").addEventListener("submit", handleData);