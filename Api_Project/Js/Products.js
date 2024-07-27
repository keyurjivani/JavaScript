import { createcart, createProduct, DeleteProduct, getcart, getProducts, updateProduct } from "../Api/All.api.js";
import navbar from "../Compopnents/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


const Mapper = (data) => {

    data.map((ele) => {
        let title = document.createElement('h3');
        title.innerHTML = ele.title
        let price = document.createElement('h5');
        price.innerHTML = ele.price
        let img = document.createElement('img');
        img.src = ele.url
        let Name = document.createElement('p');
        Name.innerHTML = ele.Name

        let button = document.createElement('button');
        button.innerHTML = "Add to Cart"
        button.style.width = '45%';
        button.style.margin = '0 2%';
        button.style.background = "#219C90"
        button.style.color = "white"
        button.style.borderRadius = "10px"
        button.addEventListener("click", () => {
            alert("Add to cart")
            createcart(ele)

        })

        let div = document.createElement('div');
        div.style.border = "1px solid"
        div.style.textAlign = "center"
        div.style.padding = "10px"
        div.style.marginTop = "10px"
        div.style.width = "350px"
        div.style.borderRadius = "10px"
        div.setAttribute("class", "divmain")
        div.append(img, title,Name, price,button)

        document.getElementById("productList").append(div)
    })


}


let data = await getProducts()
Mapper(data)
