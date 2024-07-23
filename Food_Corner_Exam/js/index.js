import { createcart, getcart, getProducts, updatecart } from "../Components/Api.js";

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const handleFilter =(e) =>{
    e.preventDefault()
    let _city = document.getElementById("_city").value;
    console.log(_city);

    let temp = product_data.filter((ele) => ele.city == _city)
    console.log(temp);
    UI(temp);

}

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
        alert("Qty Add")
    }else{
        cart.push({...ele, qty : 1})
        alert("Your Food IS Add To Cart")
        window.open("/Food_Corner_Exam/Pages/CartProducts.html")
    }
    localStorage.setItem("cart",JSON.stringify(cart))
}







const handleSearchValue = (value) =>{
    let temp = product_data.filter((ele) => ele.name.includes(value));
    console.log(temp);
    UI(temp);
}

const handleSearchData = (e) => {
    e.preventDefault();
    let Searching = document.getElementById("Searching").value;
    console.log(Searching);
    handleSearchValue(Searching)

}

let location = JSON.parse(localStorage.getItem('location'))|| []
const getweatherlocation=async(lat,long)=>{
    let req = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`)
    let res = await req.json()
    let city = res.address.city
    document.getElementById("Citylocation").innerHTML = `Live Location :${city}`
    localStorage.setItem("location",JSON.stringify(city))

}
const getlocation=()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        let long=position.coords.longitude;
        let lat=position.coords.latitude;
        getweatherlocation(lat,long);
    })
}
getlocation();







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
document.getElementById("search").addEventListener("submit",handleSearchData)

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

