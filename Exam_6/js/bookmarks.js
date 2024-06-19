import navbar from "../componen/navbar.js";
import { craeteTag } from "../componen/helper.js";

document.getElementById("navbar").innerHTML = navbar()


let book_list = JSON.parse(localStorage.getItem('array')) || []

console.log(book_list);


let bookmark_list = JSON.parse(localStorage.getItem("bookmark_list")) || [];
console.log("book_list",bookmark_list);


// const Counter = () => {
//     let Count = 0;
//     buyBook.map(() => {
//       Count++;
//     });
  
  
  
//     document.getElementById("bookCount").innerHTML = `Books : ${Count} Available In Library`;
   
//   };

const ui = (bookmark_list) =>{
    document.getElementById("tbody").innerHTML = ""
    bookmark_list.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = craeteTag("td",ele.bookName)
        let td2 = craeteTag("td",ele.authorName)
        let td3 = craeteTag("td",ele.Description)
        let td4 = craeteTag("td",ele.Date)
        let td5 = craeteTag("td",ele.BookCategory)
        let td6 = craeteTag("td",ele.Price)

        tr.append(td1,td2,td3,td4,td5,td6)



        document.getElementById("tbody").append(tr);

    })
}
ui(bookmark_list)

const filter = (BookCategory) =>{
    let temp = bookmark_list.filter((ele)=> ele.BookCategory == BookCategory)
    console.log(temp);
    ui(temp)

}
document.getElementById("All").addEventListener("click",()=>ui(bookmark_list))
document.getElementById("Story").addEventListener("click",()=>filter("Story"))
document.getElementById("Adventure").addEventListener("click",()=>filter("Adventure"))
document.getElementById("Fantasy").addEventListener("click",()=>filter("Fantasy"))
document.getElementById("Historical").addEventListener("click",()=>filter("Historical"))
document.getElementById("Horror").addEventListener("click",()=>filter("Horror"))

