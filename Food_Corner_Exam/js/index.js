import { createcart, getcart, getProducts, updatecart } from "../Components/Api.js";

// const handleCategory = (Pro_Category) => {
//     let temp = array.filter((ele) => ele.Pro_Category == Pro_Category)
//     console.log(temp);
//     UiMake(temp);
// }
const handleFilter =(e) =>{
    e.preventDefault()
    let _city = document.getElementById("_city").value;
    console.log(_city);

    let temp = product_data.filter((ele) => ele.city == _city)
    console.log(temp);
    UI(temp);

}

let cart = await getcart()
console.log(cart);
// console.log(cart.id);



const isExists = (id) =>{
   
    let temp = cart.filter((ele)=> ele.id==id)
    return temp.length > 0 ? true : false;
}
    
const handleCart = (ele) => {
    // Check if the item already exists in the cart
    if (isExists(ele.id)) {
        cart = cart.map((item) => {
            if (item.id == ele.id) {
                item.qty = (item.qty || 0) + 1; // Increment quantity
            }
            return item;
        });
        alert("Quantity updated");
    } else {
        // Add new item to the cart with qty 1
        const newItem = { ...ele, qty: 1 };
        createcart(newItem);
        cart.push(newItem);
        alert("Added to cart");
    }
    // localStorage.setItem("cart", JSON.stringify(cart));
    // Save the updated cart to localStorage
    // localStorage.setItem("product_data", JSON.stringify(product_data));
}







const UI = (product_data) =>{
    document.getElementById("display").innerHTML = ""
    product_data.map((ele,i)=>{

        let image = document.createElement("img");
        image.src = ele.image
        image.style.width = "250px";
        image.style.height = "250px"
        // console.log(image);

        let name = document.createElement("p");
        name.innerHTML = ele.name

        let rating = document.createElement("p");
        rating.innerHTML = ele.rating

        let city = document.createElement("p");
        city.innerHTML = ele.city

        let price = document.createElement("p");
        price.innerHTML = ele.price

        let category = document.createElement("p");
        category.innerHTML = ele.category

        let buy = document.createElement("button");
        buy.innerHTML = "Buy Now"
        buy.addEventListener("click",()=>{
            let id = ele.id
            handleCart(ele,id)
        })
        buy.style.backgroundColor = "green"
        buy.style.color = "white"
        buy.style.borderRadius = "5px"
        buy.style.width = "98%"

        let div = document.createElement("div");
        div.append(image,name,rating,city,price,category,buy)
        div.setAttribute("class","div")

      

        

        document.getElementById("display").append(div)
    })
}


document.getElementById("htl").addEventListener("click",()=>{
    let temp=product_data.sort((a,b)=>b.price-a.price);
    UI(temp)
    console.log(temp);
})
document.getElementById("lth").addEventListener("click",()=>{
    let temp=product_data.sort((a,b)=>a.price-b.price);
    UI(temp)
    console.log(temp);
})
document.getElementById("all").addEventListener("click",()=>{
    UI(product_data)
})


let product_data = await getProducts()
// console.log(product_data);
UI(product_data)




document.getElementById("City").addEventListener("submit",handleFilter)