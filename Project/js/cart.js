import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
import { MakeUi } from "../components/helper.js";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

let isLogin = localStorage.getItem("Islogin") || false ;
let userData = JSON.parse(localStorage.getItem("User")) || [];
console.log("userData",userData);
if(isLogin){
    document.getElementById("navbar").innerHTML = navbar("logout",userData.Name)
}else{
    window.location.href = "/Project/html/Login.html"
}


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
const countprice = (total) => {
  console.log("total", total);
  document.getElementById("bill").innerHTML = ` Cost: ${total}`;
  
  handleDiscount(total);
};

const handleDiscount = (countp) => {
  let discount = countp * 0.1;
  //  console.log(discount);

  let total_Discount = countp - discount;
  console.log(total_Discount, discount);
 let dis=MakeUi("p",discount)

 document.getElementById("bill1").innerHTML = `Discount(10%): ${discount}`
 document.getElementById("bill2").innerHTML = `Total Bill: ${total_Discount}`

 document.getElementById("Cheack_Out").addEventListener("click",()=>{
  if (cart == "") {
    alert("Please Choice Product")
  }else{
    alert("Your Products Deliver In 2 & 3 Working Day.....");
    localStorage.removeItem("cart");
    // location.reload()
  }

  

 })



 };

const billUI = (td2, td6) => {
  // document.getElementById("bill").innerText = "";
  // cart.map((item, i) => {
  //   let td2 = MakeUi("td", item.Pro_Title);
  //   let td6 = MakeUi("td", item.Pro_Price * item.qty);
  //   document.getElementById("bill").append(td2, td6);
  // });
};

const ui = (cart) => {
  document.getElementById("list").innerHTML = "";
  let total = 0;
  cart.map((item, i) => {
    total += item.Pro_Price * item.qty;
    let td1 = document.createElement("td");
    let img = MakeUi("img", item.Pro_url);

    img.style.width = "120px";
    img.style.height = "100px";
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
    let btn = MakeUi("button", "Remove");
    btn.setAttribute("id","remove")
    btn.style.boder = "1px solid black"
    btn.style.color = "White"
    btn.style.fontweight = "700"
    


    btn.addEventListener("click", () => handleDelete(i));
    td7.append(btn);
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.getElementById("list").append(tr);

    billUI(td2, td6);
  });
  countprice(total);
};

ui(cart);
