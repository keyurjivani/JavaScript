
const Timer = (count, idx, s) =>{
    let counter = 0;

    let id = setInterval (()=>{
        counter = counter + 1;
        document.querySelector(idx).innerHTML = counter;

        if(counter == count){
            clearInterval(id)
        }
    }, s)

}

// document.getElementById("timer").addEventListener("onscroll",Timer)

// let count1 = document.querySelector("#count1").addEventListener("onscroll",Timer)
// let count2 = document.querySelector("#count2").innerHTML
// let count3 = document.getElementById("count3").innerHTML
// let count4 = document.getElementById("count4").innerHTML

// timer(count1,count2,count3, count4 )

let timeData = [
    {
        id:"#count1",
        speed : 150,
    },
    {
        id:"#count2",
        speed : 150,
    },
    {
        id:"#count3",
        speed : 180,
    },
    {
        id:"#count4",
        speed : 200,
    }
]

timeData.map((timer)=>{
    let count = document.querySelector(timer.id).innerHTML
    Timer(count, timer.id, timer.speed)
})