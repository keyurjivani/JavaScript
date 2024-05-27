
const time = (min) =>{
    let hours = 0
    let sec = 0;
    let temp = min;
    let min1 = 0
    let hours1 = 0

    if(min > 60){
        min = min % 60;
        temp -= min;
        hours = temp / 60;
    }

    let id = setInterval(()=>{
        document.getElementById("display").innerHTML = `${hours1}:${min1}:${sec}`;

        sec += 1

        if(min1 == min && sec == 59 && hours1 == hours){

            clearInterval(id)
            document.getElementById("display").innerHTML = " Time Up : " + `${hours1}:${min1}:${sec}`


        }

        if(min1 == 59 && sec == 59){
            hours1 += 1;
            min1 = 0
        }

        if(sec == 59){
            min1 += 1
            sec = 0
        }
    },100)
}


const handle = (e) =>{
    e.preventDefault();

    let min = document.getElementById("min").value;
    
    time(min)
}




document.getElementById("form").addEventListener("submit",handle);