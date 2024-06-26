import getId, { MakeUi } from "../components/helper.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let array = JSON.parse(localStorage.getItem('array')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);


const isExists = (id) =>{
    let temp = cart.filter((ele)=> ele.id==id)
    return temp.length > 0 ? true : false;
}

const handleCart = (ele) =>{
    if(isExists(ele.id)){
        cart.map((item,index)=>{
            if(item.id == ele.id){
                cart[index].qty += 1;

            }
        })
        alert("ok")
    }else{
        cart.push({...ele, qty : 1})
        alert("add to cart")
    }
    localStorage.setItem("cart",JSON.stringify(cart))
}

// Show Products
const UiMake = (array) =>{
    document.getElementById("display").innerHTML = " "

    array.map((item)=>{
        let Pro_url = MakeUi("img",item.Pro_url);
        let Pro_Title = MakeUi("h4",item.Pro_Title);
        let Pro_Price = MakeUi("h4",item.Pro_Price)
        let Pro_Category = MakeUi("p",item.Pro_Category)
        let btn = document.createElement("button");
        btn.innerHTML = "buy"
        btn.addEventListener("click",()=>handleCart(item))
        let div = document.createElement("div");
        div.append(Pro_url,Pro_Title,Pro_Price,Pro_Category,btn)

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
    // else{
    //     alert("Not Available Products")
    // }
}


// Live Seach
const handleLiveSerach = () =>{
    
    let Searching = getId("Searching");
    handleSearchValue(Searching)
   
}

document.getElementById("search").addEventListener("submit",handleSearchData)
document.getElementById("Searching").addEventListener("keypress",handleKeyPress)
document.getElementById("Searching").addEventListener("keypress",handleLiveSerach)



document.getElementById("Laptop").addEventListener("click", () => handleCategory("Laptop"));
document.getElementById("TV").addEventListener("click", () => handleCategory("TV"));
document.getElementById("Mobile").addEventListener("click", () => handleCategory("Mobile"));
document.getElementById("Tablet").addEventListener("click", () => handleCategory("Tablet"));


