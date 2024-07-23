import { api } from "../components/Api_Data.js";

const handleFilter =(e) =>{
    e.preventDefault()
    let topics = document.getElementById("topics").value;
    console.log(topics);

    let temp = BookData.filter((ele) => ele.topic == topics)
    console.log(temp);
    Ui(temp);

}
const handleSearchValue = (value) =>{
    let temp = BookData.filter((ele) => ele.title.includes(value));
    console.log(temp);
    Ui(temp);
}

const handleSearchData = (e) => {
    e.preventDefault();
    let Searching = document.getElementById("Searching").value;
    console.log(Searching);
    handleSearchValue(Searching)

}

const Ui = (BookData) =>{
    document.getElementById("display").innerHTML = ""
    let seat = JSON.parse(localStorage.getItem("seat")) || 25;
    BookData.map((ele)=>{
        let url = document.createElement("img");
        url.src = ele.url;

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let topic = document.createElement("p");
        topic.innerHTML = ele.topic;

        let sub = document.createElement("p");
        sub.innerHTML = ele.sub;

        let seatCount = document.createElement("p");
        seatCount.innerHTML = `Seats Available : ${seat}`;

        let Buy = document.createElement("button");
        Buy.innerHTML = "Buy Now";
    
        Buy.addEventListener("click",()=>{
         let id = ele.id
         console.log(id);
         if(id){
             if(seat > 0){
                 alert("Book Bought Successfully");
                 seat--;
                 seatCount.innerHTML = `Seats Available : ${seat}`;
                 api.DashBoardPost(ele)
                 localStorage.setItem("seat",JSON.stringify(seat))
             }
             else{
                 alert("All Seats Are Booked");
             }
             localStorage.setItem("bookId",JSON.stringify(id))
            //  window.location.href = "payment.html";
             // window.location.href = "payment.html?bookId="+id; // for dynamic url parameter
             // window.location.href = `payment.html?bookId=${id}`; // for dynamic url parameter with query parameter
         }
        })

        let container = document.createElement("div");
        container.append(url,title,topic,sub,seatCount,Buy);
        document.getElementById("display").append(container);



    })
}


let BookData = await api.Bookget();
console.log(BookData);
Ui(BookData)

document.getElementById("search").addEventListener("submit",handleSearchData)
document.getElementById("filter").addEventListener("submit",handleFilter)


// if(seat > 0){
//     alert("Book Bought Successfully");
//     seat--;
//     seatCount.innerHTML = `Seats Available : ${seat}`;
//     api.DashBoardPost(ele)
//     localStorage.setItem("seat",JSON.stringify(seat))
// }
// else{
//     alert("All Seats Are Booked");
// }