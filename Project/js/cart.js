import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
import  { MakeUi } from "../components/helper.js";
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);
const ui = (cart) => {
    document.getElementById("list").innerHTML = ""
    cart.map((item) => {
        let td1 = document.createElement("td")
        let img = MakeUi("img", item.Pro_url)
        td1.append(img)
        let td2 = MakeUi("td", item.Pro_Title)
        let td3 = MakeUi("td", item.Pro_Category)
        let td4 = MakeUi("td", item.Pro_Price)
        let td5 = document.createElement("td")

        let btn1 = MakeUi("button", "-")
        let btn2 = MakeUi("button", item.qty)
        let btn3 = MakeUi("button", "+")
        td5.append(btn1, btn2, btn3)
        let td6 = MakeUi("td", item.Pro_Price * item.qty)
        let td7 = document.createElement("td")
        let btn = MakeUi("button", "remove")
        td7.append(btn)
        let tr = document.createElement("tr")
        tr.append(td1, td2, td3, td4, td5, td6, td7)

        document.getElementById("list").append(tr)

    })
}

ui(cart)