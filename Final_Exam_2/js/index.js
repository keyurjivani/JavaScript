import { api } from "../components/Api_Data.js";

const Ui = (BookData) =>{
    document.getElementById("display").innerHTML = ""

    BookData.map((ele)=>{
        let url = document.createElement("img");
        url.src = ele.url;

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let topic = document.createElement("p");
        topic.innerHTML = ele.topic;

        let sub = document.createElement("p");
        sub.innerHTML = ele.sub;

        document.getElementById("display").append(url,title,topic,sub);
    })
}


let BookData = await api.Bookget();
console.log(BookData);
Ui(BookData)
