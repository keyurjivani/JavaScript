// import navbar from "../componen/navbar.js";
import getValue from "../componen/helper.js";
// document.getElementById("navbar").innerHTML = navbar()


let array = JSON.parse(localStorage.getItem('array')) || []
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
    array.push(Data);

    localStorage.setItem("array",JSON.stringify(array))
}


document.getElementById("Form").addEventListener("submit",handle)