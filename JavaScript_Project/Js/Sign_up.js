
let Data_array =  [];
console.log(Data_array);

const handleData = (e) =>{
    e.preventDefault();
 

    let Data = {
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        password : document.getElementById("password").value 
    }
    console.log(Data);

   



    let flag = false;
    for(let i =0;i<Data_array.length;i++){
        if(Data_array[i].Email == Data.Email){
            flag = true;
            break;
        }
    }
    if(flag){
        alert("Please, Your Email Already Exists")
    }else{
        Data_array.push(Data)
        alert("Your Sign Up Process Completed !!")
        alert("Thank You !!")
    }
    localStorage.setItem("Data",JSON.stringify(Data_array))
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

// const isValidNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
const validName = /^[0-9A-Za-z]{6,10}$/;
document.getElementById("Name").addEventListener("input", ()=>{
    handleValidation(validName,"Name","u-msg","Name not valid","valid Name")
})

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
document.getElementById("Email").addEventListener("input", ()=>{
    handleValidation(validEmail,"Email","em-msg","Email Not Valid","Email Valid")
})

const validPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;
document.getElementById("password").addEventListener("click", ()=>{
    alert("max 8 Character, One Capital, One Special Character, One Number")
    handleValidation(validPassword,"password","p-msg","Not Valid Password","Valid Password")

})
document.getElementById("password").addEventListener("input", ()=>{
    handleValidation(validPassword,"password","p-msg","Not Valid Password","Valid Password")
})


document.getElementById("form").addEventListener("submit",handleData)