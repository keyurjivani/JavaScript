import { api } from "../components/Api_Data.js";

const handleFilter = (e) => {
    e.preventDefault();
    let topics = document.getElementById("topics").value;
    console.log(topics);

    let temp = BookData.filter((ele) => ele.topic == topics);
    console.log(temp);
    Ui(temp);
}

const handleSearchValue = (value) => {
    let temp = BookData.filter((ele) => ele.title.includes(value));
    console.log(temp);
    Ui(temp);
}

const handleSearchData = (e) => {
    e.preventDefault();
    let Searching = document.getElementById("Searching").value;
    console.log(Searching);
    handleSearchValue(Searching);
}

const Ui = (BookData) => {
    document.getElementById("display").innerHTML = "";
    BookData.map((ele) => {
        let url = document.createElement("img");
        url.src = ele.url;
        url.style.width = "250px";
        url.style.height = "250px";

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let topic = document.createElement("p");
        topic.innerHTML = ele.topic;

        let sub = document.createElement("p");
        sub.innerHTML = ele.sub;

        let seatCount = document.createElement("p");
        seatCount.innerHTML = `Seats Available : ${ele.seat}`;

        let number = document.createElement("h6");
        number.innerHTML = `RS : ${ele.number}`;

        let Buy = document.createElement("button");
        Buy.innerHTML = "Buy Now";
        Buy.style.backgroundColor = "green";
        Buy.style.color = "white";
        Buy.style.borderRadius = "5px";
        Buy.style.width = "98%";
        Buy.addEventListener("click", async (e) => {
            e.preventDefault();

            let id = ele.id;
            console.log(id);

            if (id) {
                let seat = JSON.parse(localStorage.getItem(`seat_${id}`)) || ele.seat;

                if (seat > 0) {
                    let bookId = JSON.parse(localStorage.getItem("bookId")) || [];
                    console.log(bookId);

                    if (bookId.includes(id)) {
                        alert("You Have Already Booked This Book");
                        return;
                    } else {
                        seat--;
                        seatCount.innerHTML = `Seats Available : ${seat}`;
                        localStorage.setItem(`seat_${id}`, JSON.stringify(seat));
                        bookId.push(id);
                        localStorage.setItem("bookId", JSON.stringify(bookId));
                        alert("Book Bought Successfully");
                        await api.DashBoardPost(ele);
                    }
                } else {
                    alert("All Seats Are Booked");
                }
            }
        });

        let container = document.createElement("div");
        container.append(url, title, topic, sub, seatCount, number, Buy);
        container.style.border = "1px solid black";
        container.style.margin = "10px";
        container.style.padding = "10px";
        container.style.borderRadius = "10px";
        document.getElementById("display").append(container);
    });
}

    let BookData = await api.Bookget();
    console.log(BookData);
    Ui(BookData);


document.getElementById("search").addEventListener("submit", handleSearchData);
document.getElementById("filter").addEventListener("submit", handleFilter);

document.getElementById("htl").addEventListener("click",()=>{
    let temp=BookData.sort((a,b)=>b.number-a.number);
    Ui(temp)
    console.log(temp);
})
document.getElementById("lth").addEventListener("click",()=>{
    let temp=BookData.sort((a,b)=>a.number-b.number);
    Ui(temp)
    console.log(temp);
})
document.getElementById("all").addEventListener("click",()=>{
    Ui(BookData)
})

