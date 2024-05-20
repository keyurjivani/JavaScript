const clock = () => {
    let Day =  [ "Sunday ", "Monday", "Tuesday", "Wednesday","Thursday","Friday ","Saturday "];
    let Month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    let date = new Date();


    document.getElementById("date").innerHTML = Day[date.getDay()] + ', ' + date.getDate() + ' - ' + Month[date.getMonth()] + ' - ' + date.getFullYear();

    let Hours = date.getHours();
    let min = date.getMinutes();
    let Sec = date.getSeconds();
    let day = Hours>12 ? "PM" : "AM" ;


    Hours = Hours>=12 ? Hours-12 : Hours ;
    min =  min;
    Sec = Sec



    document.getElementById("Hours").innerHTML = Hours;
    document.getElementById("Min").innerHTML = min;
    document.getElementById("Sec").innerHTML = Sec;
    document.getElementById("day").innerHTML = day;
}

let inter = setInterval(clock);

