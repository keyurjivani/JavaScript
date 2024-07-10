// import { api } from "../Api/All.api.js"

// let data = await api.get();
const HandleLogin = (e) =>{
    e.preventDefault()

    let Login_Data = {
        Email : document.getElementById("Email").value,
        password : document.getElementById("password").value 
    }
    console.log(Login_Data.Email);

    // let tem = data.map((ele)=> ele.Email)
    // console.log("tem",tem);

    // if(tem.value == Login_Data.Email ){
    //     alert("All Ready Exsists")
    // }
   
}



// const filter = (data) =>{
//     let temp = data.map((ele)=> ele.Email)
//     // console.log(temp);
// }
// filter(data)



document.getElementById("Login").addEventListener("submit",HandleLogin)