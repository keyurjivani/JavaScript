// import navbar from "../componen/navbar.js";
import { craeteTag } from "../componen/helper.js";

// document.getElementById("navbar").innerHTML = navbar()


let buyBook = JSON.parse(localStorage.getItem("buyBook")) || [];
console.log(buyBook);


// const Counter = () => {
//     let Count = 0;
//     buyBook.map(() => {
//       Count++;
//     });
  
  
  
//     document.getElementById("bookCount").innerHTML = `Books : ${Count} Available In Library`;
   
//   };

const ui = (buyBook) =>{
    document.getElementById("tbody").innerHTML = ""
    buyBook.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = craeteTag("td",ele.bookName)
        let td2 = craeteTag("td",ele.authorName)
        let td3 = craeteTag("td",ele.Description)
        let td4 = craeteTag("td",ele.Date)
        let td5 = craeteTag("td",ele.BookCategory)
        // console.log(td4);
        let td6 = craeteTag("td",ele.Price)

        tr.append(td1,td2,td3,td4,td5,td6)



        document.getElementById("tbody").append(tr);

        //Counter();
    })
}
ui(buyBook)

const filter = (BookCategory) =>{
    let temp = buyBook.filter((ele)=> ele.BookCategory == BookCategory)
    console.log(temp);
    ui(temp)

}
document.getElementById("All").addEventListener("click",()=>ui(buyBook))
document.getElementById("Story").addEventListener("click",()=>filter("Story"))
document.getElementById("Adventure").addEventListener("click",()=>filter("Adventure"))
document.getElementById("Fantasy").addEventListener("click",()=>filter("Fantasy"))
document.getElementById("Historical").addEventListener("click",()=>filter("Historical"))
document.getElementById("Horror").addEventListener("click",()=>filter("Horror"))

