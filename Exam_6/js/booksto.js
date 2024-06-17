import navbar from "../componen/navbar.js";
import { craeteTag } from "../componen/helper.js";

document.getElementById("navbar").innerHTML = navbar();

let buyBook = JSON.parse(localStorage.getItem("buyBook")) || [];
console.log("buy",buyBook);

let array = JSON.parse(localStorage.getItem("array")) || [];
console.log("array",array);








const BuyFun = (index) => {
  let array = JSON.parse(localStorage.getItem("array")) || [];
  // let buyBook = JSON.parse(localStorage.getItem('array')) || []

//   buyBook.push(array[index]);
  alert("Book Deliver on 2 - 3 Working Day. Thank You... ")
  array.splice(index, 1);

  localStorage.setItem("buyBook", JSON.stringify(buyBook));
  localStorage.setItem("array",JSON.stringify(array))

  location.reload();
};











const Counter = () => {
  let Count = 0;
  array.map(() => {
    Count++;
  });



  document.getElementById("bookCount").innerHTML = `Books : ${Count} Available In Library`;
 
};


const BookMarksFun = (index) =>{
    let array = JSON.parse(localStorage.getItem("array")) || [];
    // let buyBook = JSON.parse(localStorage.getItem('array')) || []
  
    buyBook.push(array[index]);
    alert("Your Select Book Is Bookmarks. Show In Bookmark Session. Thank You.....")
    array.splice(index, 1);
  
    localStorage.setItem("buyBook", JSON.stringify(buyBook));
    localStorage.setItem("array",JSON.stringify(array))
  
    location.reload();
}

const Ui = () => {
  document.getElementById("tbody").innerHTML = "";

  array.map((ele, index) => {
    let tr = document.createElement("tr");
    let td1 = craeteTag("td", ele.bookName);
    let td2 = craeteTag("td", ele.authorName);
    let td3 = craeteTag("td", ele.Description);
    let td4 = craeteTag("td", ele.Date);
    let td5 = craeteTag("td", ele.BookCategory);
    let td6 = craeteTag("td", ele.Price);

    let td7 = document.createElement("td");
    td7.innerHTML = "Buy";
    td7.style.fontSize = "18px";
    td7.style.height = "40px";
    td7.style.marginBottom = "5px";
    td7.style.marginTop = "5px";
    td7.setAttribute("id","td7")
    td7.addEventListener("click", () => BuyFun(index));

    let td8 = document.createElement("td");
    td8.innerHTML = "BookMark";
    td8.style.fontSize = "18px";
    td8.style.height = "40px";
    td8.style.marginBottom = "15px";
    td8.style.marginTop = "15px";
    td8.setAttribute("id","td8")
    td8.addEventListener("click",()=>BookMarksFun(index))
   
  

    tr.append(td1, td2, td3, td4, td5, td6, td7,td8);

    document.getElementById("tbody").append(tr);
    Counter();
  });
};
Ui(array);
