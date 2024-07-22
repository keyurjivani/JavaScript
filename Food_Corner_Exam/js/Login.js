

const handleData = (e) =>{
    e.preventDefault();
    let Data = {
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Password : document.getElementById("Password").value,
        
        
    }
    console.log(Data);




     
}



document.getElementById("Login").addEventListener("submit",handleData)