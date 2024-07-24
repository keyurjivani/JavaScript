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


const handleValidation = (isValid, id, idx, eMsg, sMsg) => {
    let value = document.getElementById(id).value
    let input = document.getElementById(id)
    input.classList.add("input")
    if (isValid.test(value)) {
        document.getElementById(id).style.border = '1px solid green'
        document.getElementById(idx).innerHTML = sMsg
    }
    else {
        document.getElementById(id).style.border = '1px solid red'
        document.getElementById(idx).innerHTML = eMsg
    }
}


const validName = /^[0-9A-Za-z]{6,10}$/;
document.getElementById("username").addEventListener("input", ()=>{
    handleValidation(validName,"username","u-msg","Name not valid","valid Name")
})

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
document.getElementById("Email").addEventListener("input", ()=>{
    handleValidation(validEmail,"Email","em-msg","Email Not Valid","Email Valid")
})

const validPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;
document.getElementById("Password").addEventListener("click", ()=>{
    alert("max 8 Character, One Capital, One Special Character, One Number")
    handleValidation(validPassword,"Password","p-msg","Not Valid Password","Valid Password")

})
document.getElementById("Password").addEventListener("input", ()=>{
    handleValidation(validPassword,"Password","p-msg","Not Valid Password","Valid Password")
})




document.getElementById("Form").addEventListener("submit",handleData)