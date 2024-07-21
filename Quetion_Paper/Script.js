import { api } from "./components/api.js";

// document.addEventListener('contextmenu',(e)=>{
//     e.preventDefault();
//     alert('click context menu')
//     });



let score = 0


let data = await api.get()
console.log(data);

const ui =() =>{
    document.getElementById("app").innerHTML = ""
    data.map((ele,i)=>{
        let question = document.createElement("h3")
        question.innerHTML = `${i+1}.${ele.que}`


        let A = document.createElement("p")
        A.innerHTML = `A: ${ele.options.A}`
        console.log("A: " + A.innerHTML);

        let B = document.createElement("p")
        B.innerHTML = `B: ${ele.options.B}`

        let C = document.createElement("p")
        C.innerHTML = `C: ${ele.options.C}`

        let D = document.createElement("p")
        D.innerHTML = `D: ${ele.options.D}`

        console.log("cA",ele.correct);
        
        const Check_Ans = (Ans)=>{
            return()=>{
                if(ele.correct == Ans.innerHTML){
                    // console.log(Ans);
                    Ans.style.color = "green"
                    score++
                }else{
                    // console.log(Ans);

                    // console.log(ele.correct);
                    // alert("wrong")
                    Ans.style.color = "red"
                    // score--
                    // if(score == 0){
                    //     score = 0
                    // }
                    if(score >=1){
                        score--
                    }
                    
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

let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");


let camera_stream = null;
let media_recorder = null;
let blobs_recorded = [];

camera_button.addEventListener('click', async function() {
	camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
	video.srcObject = camera_stream;
    ui(data)
});




