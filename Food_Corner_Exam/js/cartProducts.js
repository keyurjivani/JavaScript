import { getcart } from "../Components/Api.js";



let cart_Producs = await getcart()
console.log(cart_Producs);

const UI = (cart_Producs) =>{
    document.getElementById("display").innerHTML = ""
    cart_Producs.map((ele,i)=>{

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
            createcart(ele)
        })

        let div = document.createElement("div");
        div.append(image,name,rating,city,price,category,buy)
        div.setAttribute("class","div")

      

        

        document.getElementById("display").append(div)
    })
}
UI(cart_Producs)


