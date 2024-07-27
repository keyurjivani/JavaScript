import { createProduct, DeleteProduct, getProducts, updateProduct } from "../Api/All.api.js";

import navbar from "../Compopnents/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let id = -1

const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        Name: document.getElementById('Name').value,
        url: document.getElementById('url').value
    }
    console.log(product);

    if (id == -1) {
        createProduct(product)
        alert("Add Your Novel Book")
        // window.location.reload()
    }
    else {
        updateProduct(id, product)
        alert("Update Your Novel Book")
    }

}

const Handleupdate = (ele) => {
    document.getElementById('title').value = ele.title
    document.getElementById('price').value = ele.price
    document.getElementById('url').value = ele.url
    document.getElementById('Name').value = ele.Name
    document.getElementById("submit").value="Update"

    id = ele.id
}

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

        let update = document.createElement('button');
        update.innerHTML = "Update"
        update.style.width = '43%';
        update.style.margin = '0 1%';
        update.style.background = "#219C90"
        update.style.color = "white"
        update.style.borderRadius = "5px"
        update.addEventListener("click", () => Handleupdate(ele))


        let deleteProduct = document.createElement("button")
        deleteProduct.innerHTML = "Delete"
        deleteProduct.style.width = '43%';
        deleteProduct.style.margin = '0 1%';
        deleteProduct.style.background = "#FF4C4C"
        deleteProduct.style.color = "white"
        deleteProduct.style.borderRadius = "5px"

        deleteProduct.addEventListener("click", () => {
            DeleteProduct(ele.id)
            // window.location.reload()
        })
        let div = document.createElement('div');
        div.style.border = "1px solid"
        div.style.textAlign = "center"
        div.style.padding = "10px"
        div.style.borderRadius = "10px"

        div.style.width = "350px"
        div.setAttribute("class", "divmain")

        div.append(img, title,Name, price, deleteProduct, update)

        document.getElementById("productList").append(div)
    })


}


let data = await getProducts()
Mapper(data)

document.getElementById("productData").addEventListener("submit", handleData)


// document.addEventListener("contextmenu",(e) => {
//     e.preventDefault();
//     alert("clicked context menu");
//     })