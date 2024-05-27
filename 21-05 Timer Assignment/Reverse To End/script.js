
const Time = (min) =>{

    let hours = 0;
    let sec = 59;
    let temp = min;


    if(min >= 60){
        min = min % 60;
        temp -= min;
        hours = temp / 60;  
    }


    let id = setInterval(()=>{
        document.getElementById("display").innerHTML = `${hours}:${min}:${sec}`

        sec = sec - 1;

        if(hours == 0 && min == 0 && sec == 0){
            clearInterval(id);
            document.getElementById("display").innerHTML = " Time Up"
        }

        if(min==0 && sec==0){
            hours -= 1;
            min = 59
        }
        
        if(sec==0){
            min -= 1
            sec = 59
        }
    },1000)
}


const handle = (e) =>{
    e.preventDefault();

    let min = document.getElementById("min").value;

    Time(min);
}



document.querySelector("#form").addEventListener("submit",handle)