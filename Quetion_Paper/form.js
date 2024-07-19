import { api } from "./components/api.js";

const handleQue = async(e) =>{
e.preventDefault();

let data = {
    que: document.getElementById("que").value,
    options: {
      A: document.getElementById("A").value,
      B: document.getElementById("B").value,
      C: document.getElementById("C").value,
      D: document.getElementById("D").value,
    },
    correct: document.getElementById("correct").value,
}
 console.log(data);
 
  api.post(data);
}


document.getElementById("Form").addEventListener("submit",handleQue)