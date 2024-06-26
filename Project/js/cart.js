import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
import { MakeUi } from "../components/helper.js";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);





const handleQty = (index, opr) => {
  if (opr == "+") {
    cart[index].qty += 1;
  } else {
    if (cart[index].qty > 1) {
      cart[index].qty -= 1;
    } else {
      alert("qty not zero");
    }
  }
  ui(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};





const handleDelete = (index) => {
  cart.splice(index, 1);
  ui(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};




//total price
const countprice = () =>{
    let countp = 0;
    document.getElementById("bill").innerHTML = ""
    cart.map((ele)=>{
        countp = Number(countp) + Number(ele.Pro_Price * ele.qty)
        
        document.getElementById("bill").innerHTML = `total : ${countp}`
    })
    handleDiscount(countp)
}

const handleDiscount = (countp) =>{
   let a = countp
    
}




const billUI = (td2, td6) => {
  document.getElementById("bill").innerText = "";
  cart.map((item, i) => {
    let td2 = MakeUi("td", item.Pro_Title);
 
    let td6 = MakeUi("td", item.Pro_Price * item.qty);

  
    document.getElementById("bill").append(td2, td6);

  });
};






const ui = (cart) => {
  document.getElementById("list").innerHTML = "";

  cart.map((item, i) => {
    let td1 = document.createElement("td");
    let img = MakeUi("img", item.Pro_url);

    img.style.width = "250px";
    img.style.height = "250px";
    td1.append(img);
    let td2 = MakeUi("td", item.Pro_Title);
    let td3 = MakeUi("td", item.Pro_Category);
    let td4 = MakeUi("td", item.Pro_Price);

    let td5 = document.createElement("td");

    let btn1 = MakeUi("button", "-");
    let btn2 = MakeUi("button", item.qty);
    let btn3 = MakeUi("button", "+");
    btn1.addEventListener("click", () => handleQty(i, "-"));
    btn3.addEventListener("click", () => handleQty(i, "+"));

    td5.append(btn1, btn2, btn3);
    let td6 = MakeUi("td", item.Pro_Price * item.qty);
    let td7 = document.createElement("td");
    let btn = MakeUi("button", "remove");
    btn.addEventListener("click", () => handleDelete(i));
    td7.append(btn);
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.getElementById("list").append(tr);

    billUI(td2, td6);
    countprice()
   
  });
};

ui(cart);
