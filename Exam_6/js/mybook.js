import navbar from "../componen/navbar.js";
import { craeteTag } from "../componen/helper.js";
document.getElementById("navbar").innerHTML = navbar()



let array = JSON.parse(localStorage.getItem('array')) || []

console.log(array);

const Counter = () => {
    let Count = 0;
    array.map(() => {
      Count++;
    });
  
 
  
    document.getElementById("bookCount").innerHTML = `Books : ${Count} Available In Library`;
   
  };

const ui = () =>{
    document.getElementById("tbody").innerHTML = ""
    array.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = craeteTag("td",ele.bookName)
        let td2 = craeteTag("td",ele.authorName)
        let td3 = craeteTag("td",ele.Description)
        let td4 = craeteTag("td",ele.Date)
        let td5 = craeteTag("td",ele.BookCategory)
        console.log(td4);
        let td6 = craeteTag("td",ele.Price)

        tr.append(td1,td2,td3,td4,td5,td6)



        document.getElementById("tbody").append(tr)

        Counter();
    })
}
ui(array)

