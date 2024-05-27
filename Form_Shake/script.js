


// const handle = (e) =>{
//     e.preventDefault();

//     let info = {
//         Username : document.getElementById("Username").value ,
//         num : document.getElementById("num").value,
//         email : document.getElementById("email").value,

//     }
//     console.log(info);


//     const validUsername = /^[0-9A-Za-z]{6,16}$/;
//     if(validUsername.test(info.Username)){
//         document.getElementById("Username").style.border = '1px solid green'
//     }
//     else{
//         document.getElementById("Username").style.border = '1px solid red'
//     }

//     const validNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/

//     if(validNumber.test(info.num)){
//         document.getElementById("num").style.border = '1px solid green'
//     }
//     else{
//         document.getElementById("num").style.border = '1px solid red'
//     }

//     const validEmail =  /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/
//     if(validEmail.test(info.email)){
//         document.getElementById("email").style.border = '1px solid green'
//     }
//     else{
//         document.getElementById("email").style.border = '1px solid red'
//     }

// }



const handlevalid =(isvalid, id, idx, emsg, smsg)=>{

    let valuee = document.getElementById(id).value;
    let input=document.getElementById(id);

   input.classList.add("input")

    if(isvalid.test(valuee)){
        document.getElementById(id).style.border = '2px solid green'
        document.getElementById(idx).innerHTML = smsg
        input.classList.remove('error')

    }
    else{
        document.getElementById(id).style.border = '2px solid red'
        document.getElementById(idx).innerHTML = emsg
        
        input.classList.add('error')

        
    }
    

}


const validUsername = /^[0-9A-Za-z]{6,16}$/;

document.getElementById("Username").addEventListener("input",()=>{
    handlevalid(validUsername,"Username","u-msg","Invalid UserName","Valid UserName")
})

const validNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
document.getElementById("num").addEventListener("input",()=>{
    handlevalid(validNumber,"num","ua-msg","Invalid Number","Valid Number")
})

const validEmail =  /^\S+@\S+\.\S+$/
document.getElementById("email").addEventListener("input",()=>{
    handlevalid(validEmail,"email","uaa-msg","Invalid Email","Valid Email")
})





document.getElementById("data").addEventListener("submit",handle)

// document.getElementById("Username").addEventListener("input",handlevalid)