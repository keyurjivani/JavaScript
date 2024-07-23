import { api, getCityName } from "../Components/Api.js";


let data = await api.get()
console.log(data);

const handleData = (e) =>{
    e.preventDefault();
    let Data = {
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Password : document.getElementById("Password").value,
        Number : document.getElementById("Number").value,
        city : document.getElementById("city").value,
        
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
        alert("Your Signup SuccessFully.")
        alert("Thank You")
    }


     
}



document.getElementById("Form").addEventListener("submit",handleData)


