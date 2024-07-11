import { api } from "../Api/All.api.js";


let data = await api.get();
// console.log(data);
// let array = []
// console.log(array);

// const filter = (data) =>{
//     let temp = data.map((ele)=> ele.Email)
//     // console.log(temp);
//     array.push(temp)
//     return temp;
// }
// filter(data)


const HandleData = (e) =>{
    e.preventDefault();

    let User_Data = {
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Phone_No : document.getElementById("Phone_No").value,
        password : document.getElementById("password").value 
    }

    // console.log(User_Data);
    // api.post(User_Data)
    // console.log(array);

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