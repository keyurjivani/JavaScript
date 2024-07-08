import { create, get } from "./produs.api.js";


const handle = (e)=>{
    e.preventDefault();

    let users = {
        name : document.getElementById("name").value,
        number : document.getElementById("number").value
    }
    console.log("users",users);
    create(users)
    // localStorage.setItem("users",JSON.stringify(users))
}
get()

document.getElementById("form").addEventListener("submit",handle)