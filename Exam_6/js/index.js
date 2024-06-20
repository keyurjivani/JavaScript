import navbar from "../componen/navbar.js";
import getValue from "../componen/helper.js";
document.getElementById("navbar").innerHTML = navbar()


let book_list = JSON.parse(localStorage.getItem('book_list')) || []
const handle = (e) =>{
    e.preventDefault();

    let Data = { 
        bookName : getValue("bookName"),
        authorName : getValue("authorName"),
        Description : getValue("Description"),
        Date : getValue("Date"),
        BookCategory : getValue("BookCategory"),
        Price : getValue("Price"),

    }

    // console.log(Data);
    book_list.push(Data);
    alert("Book Is Add In Dashboard Site.")
    localStorage.setItem("book_list",JSON.stringify(book_list))
}


document.getElementById("Form").addEventListener("submit",handle)