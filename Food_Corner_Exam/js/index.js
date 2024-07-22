import { createcart, getProducts } from "../Components/Api.js";

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

let array = []
const isExists = (id) =>{
    console.log("isExists",id);
    let temp = product_data.filter((ele)=> ele.id==id)
    console.log(temp);
    return temp.length > 0 ? true : false;
}
    
const handleCart = (ele,id) =>{
    if(!isExists(ele.id)){
        product_data.map((ele,index)=>{
            if(id == ele.id){
                product_data[index].qty += 1;

            }
        })
        alert("ok")
    }else{
        createcart({...ele,qty : 1})
        // cart.push({...ele, qty : 1})
        alert("add to cart")
    }
    // createcart(ele)
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