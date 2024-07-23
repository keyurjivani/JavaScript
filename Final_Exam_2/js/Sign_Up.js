import { api } from "../components/Api_Data.js";
let Role = JSON.parse(localStorage.getItem("role")) || []

let data = await api.get()
console.log(data);

const handleData = (e) =>{
    e.preventDefault();
    let Data = {
        username : document.getElementById("username").value,
        Email : document.getElementById("Email").value,
        Password : document.getElementById("Password").value,
        role : document.getElementById("role").value,
    }
    console.log(Data);

    


    let flag = false;

    for(let i=0;i<data.length;i++){
        if(data[i].Email == Data.Email){
            flag = true
            break;
        }
    }
    
    if(flag){
        alert("This Email is Already Exists")
    }else{
        api.post(Data)
        Role.push(Data)
        localStorage.setItem("role", JSON.stringify(Role))
        alert("Your Signup SuccessFully.")
        alert("Thank You")
        if(Data.role == "Admin"){
            window.open("/Final_Exam_2/pages/AddProduct.html")
        }else{
            window.open("/Final_Exam_2/pages/index.html")
        }
    }


     
}



document.getElementById("Form").addEventListener("submit",handleData)