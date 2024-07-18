import { createcart, createProduct, DeleteProduct, getcart, getProducts, updateProduct } from "../Api/All.api.js";

// let cart = await getcart()
// const isExists = (id) =>{
//     let temp = cart.filter((ele)=> ele.id==id)
//     return temp.length > 0 ? true : false;
// }
  

// const cartproducts = (ele) =>{
//     console.log(ele);
//     if(isExists(ele.id)){
//         cart.map((item,index)=>{
//             if(item.id == ele.id){
//                 cart[index].qty += 1;

//             }
//         })
//         alert("ok")
//     }else{
//         createcart({ele})
//         alert("add to cart")
//     }
//     localStorage.setItem("cart",JSON.stringify(cart))
// }

const Mapper = (data) => {

    data.map((ele) => {
        let title = document.createElement('h3');
        title.innerHTML = ele.title
        let price = document.createElement('h5');
        price.innerHTML = ele.price
        let img = document.createElement('img');
        img.src = ele.url

        let button = document.createElement('button');
        button.innerHTML = "Add to Cart"
        button.addEventListener("click", () => {
            // cartproducts(ele)
            alert("Add to cart")
            createcart(ele)

        })

        let div = document.createElement('div');

        div.append(img, title, price,button)

        document.getElementById("productList").append(div)
    })


}


let data = await getProducts()
Mapper(data)
