import { api } from "./components/api.js";

let score = 0
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
    //  await api.post(data);
}


document.getElementById("Form").addEventListener("submit",handleQue)

let data = await api.get()
console.log(data);

const ui =() =>{
    document.getElementById("app").innerHTML = ""
    data.map((ele)=>{
        let question = document.createElement("h4")
        question.innerHTML = ele.que


        let A = document.createElement("p")
        A.innerHTML = `A: ${ele.options.A}`

        let B = document.createElement("p")
        B.innerHTML = `B: ${ele.options.B}`

        let C = document.createElement("p")
        C.innerHTML = `C: ${ele.options.C}`

        let D = document.createElement("p")
        D.innerHTML = `D: ${ele.options.D}`

        console.log(ele.correct);
        
        const Check_Ans = (Ans)=>{
            return()=>{
                if(ele.correct === Ans.innerHTML){
                    console.log(Ans.innerHTML);
                    Ans.style.color = "green"
                    score++
                }else{
                    console.log(Ans.innerHTML);
                    Ans.style.color = "red"
                    
                }
                document.getElementById("score").innerHTML = `Score : ${score}`;
                A.disabled = true
                B.disabled = true
                C.disabled = true
                D.disabled = true
            }
        }
        A.addEventListener("click",Check_Ans(A))
        B.addEventListener("click",Check_Ans(B))
        C.addEventListener("click",Check_Ans(C))
        D.addEventListener("click",Check_Ans(D))


    

        document.getElementById("app").append(question,A,B,C,D)
    })
}
ui(data)

