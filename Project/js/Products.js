import getId, { MakeUi } from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let array = JSON.parse(localStorage.getItem('array')) || [];

// Show Products
const UiMake = (array) =>{
    document.getElementById("display").innerHTML = " "

    array.map((item)=>{
        let Pro_url = MakeUi("img",item.Pro_url);
        let Pro_Title = MakeUi("h4",item.Pro_Title);
        let Pro_Price = MakeUi("h4",item.Pro_Price)
        let Pro_Category = MakeUi("p",item.Pro_Category)
        
        let div = document.createElement("div");
        div.append(Pro_url,Pro_Title,Pro_Price,Pro_Category)

        document.getElementById("display").append(div)
    })
}
 UiMake(array)


 // Filter For Category
 const handleCategory = (Pro_Category) => {
    let temp = array.filter((ele) => ele.Pro_Category == Pro_Category)
    console.log(temp);
    UiMake(temp);
}


// Click Serach Button
const handleSearchValue = (value) =>{
    let temp = array.filter((ele) => ele.Pro_Title.includes(value));
    console.log(temp);
    UiMake(temp);
}

const handleSearchData = (e) => {
    e.preventDefault();
    let Searching = getId("Searching");
    console.log(Searching);
    handleSearchValue(Searching)

}

// keypress Serach

const handleKeyPress = (e) =>{
    if(e.key == "Enter"){
        let Searching = getId("Searching");
    // console.log(Searching);
    handleSearchValue(Searching)
    }
}


// Live Seach
const handleLiveSerach = () =>{
    
    let Searching = getId("Searching");
    handleSearchValue(Searching)
   
}

document.getElementById("Search").addEventListener("submit",handleSearchData)
document.getElementById("Searching").addEventListener("keypress",handleKeyPress)
document.getElementById("Searching").addEventListener("keypress",handleLiveSerach)



document.getElementById("Laptop").addEventListener("click", () => handleCategory("Laptop"));
document.getElementById("TV").addEventListener("click", () => handleCategory("TV"));
document.getElementById("Mobile").addEventListener("click", () => handleCategory("Mobile"));
document.getElementById("Tablet").addEventListener("click", () => handleCategory("Tablet"));


