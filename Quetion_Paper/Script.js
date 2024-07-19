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

let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let start_button = document.querySelector("#start-record");
let stop_button = document.querySelector("#stop-record");
let download_link = document.querySelector("#download-video");

let camera_stream = null;
let media_recorder = null;
let blobs_recorded = [];

camera_button.addEventListener('click', async function() {
	camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
	video.srcObject = camera_stream;
    ui(data)
});

start_button.addEventListener('click', function() {
	// set MIME type of recording as video/webm
	media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' });

	// event : new recorded video blob available 
  media_recorder.addEventListener('dataavailable', function(e) {
		blobs_recorded.push(e.data);
	});

	// event : recording stopped & all blobs sent
	media_recorder.addEventListener('stop', function() {
		// create local object URL from the recorded video blobs
		let video_local = URL.createObjectURL(new Blob(blobs_recorded, { type: 'video/webm' }));
		download_link.href = video_local;
	});

  // start recording with each recorded blob having 1 second video
  media_recorder.start(1000);
});

stop_button.addEventListener('click', function() {
	media_recorder.stop(); 
});

