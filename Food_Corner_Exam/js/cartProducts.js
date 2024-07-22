import { Deletecart, getcart, updatecart } from "../Components/Api.js";



let cart_Producs = await getcart()
console.log(cart_Producs);

let cart = await cart_Producs
const handleQty = (index, opr) => {
    if (opr == "+") {
        cart_Producs[index].qty += 1;
    } else {
      if (cart_Producs[index].qty > 1) {
        cart_Producs[index].qty -= 1;
      } else {
        alert("No Allow Zero Quantity");
      }
    }
    UI(cart_Producs)
  
  };
  const handleDelete = (index) => {
    Deletecart(index);
    // updatecart(index, cart_Producs);

    // cart.splice(index, 1);
    UI();
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  


  const countprice = (total) => {
    console.log("total", total);
    document.getElementById("bill").innerHTML = ` Cost: ${total}`;
    
    handleDiscount(total);
  };
  
  const handleDiscount = (countp,id) => {
    let discount = countp * 0.1;
    //  console.log(discount);
  
    let total_Discount = countp - discount;
    console.log(total_Discount, discount);
//    let dis=MakeUi("p",discount)
  
   document.getElementById("bill1").innerHTML = `Discount(10%): ${discount}`
   document.getElementById("bill2").innerHTML = `Total Bill: ${total_Discount}`
  
   document.getElementById("Cheack_Out").addEventListener("click",()=>{
    if (cart == "") {
      alert("Please Choice Product")
    }else{
      alert("Deliver 20 Min");
      Deletecart(id);
      localStorage.removeItem("cart");
      location.reload()
    }
   })
  
  
  
   };




const UI = (cart_Producs) =>{
    document.getElementById("list").innerHTML = ""
  let total = 0;

    cart_Producs.map((ele,i)=>{
    total += ele.price * ele.qty;

        let td = document.createElement("td")
        let image = document.createElement("img");
        image.src = ele.image
        image.style.width = "100px";
        image.style.height = "100px"
        td.append(image)
        // console.log(image);
        let td1 = document.createElement("td")
        let name = document.createElement("p");
        name.innerHTML = ele.name
        td1.append(name)

        let td2 = document.createElement("td")
        let rating = document.createElement("p");
        rating.innerHTML = ele.rating
        td2.append(rating)

        let td3 = document.createElement("td");
        let city = document.createElement("p");
        city.innerHTML = ele.city
        td3.append(city)

        let td4 = document.createElement("td");
        let price = document.createElement("p");
        price.innerHTML = ele.price
        td4.append(price)

        let td6 = document.createElement("td");
        let category = document.createElement("p");
        category.innerHTML = ele.category
        td6.append(category)


        let td5 = document.createElement("td");
        let btn1 = document.createElement("button");
        btn1.innerHTML = "-";
        let btn2 = document.createElement("button");
        btn2.innerHTML = ele.qty
        let btn3 = document.createElement("button");
        btn3.innerHTML = "+";
       
        btn1.addEventListener("click", () => handleQty(i, "-"));
        btn3.addEventListener("click", () => handleQty(i, "+"));
    
        td5.append(btn1, btn2, btn3);

        let td8 = document.createElement("td");
        let buy = document.createElement("button");
        buy.innerHTML = "Buy Now"
        buy.addEventListener("click",()=>{
            createcart(ele)
        })
        td8.append(buy)

        let td7 = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerHTML = "remove";
    btn.style.backgroundColor = "red"
    btn.style.boder = "1px solid black"
    btn.style.color = "White"
    btn.style.fontweight = "700"
    btn.addEventListener("click", () => handleDelete(i));
    td7.append(btn);

        let tr = document.createElement("tr");
        tr.append(td,td1,td2,td3,td4,td6,td5,td8,td7)
      

      

        

        document.getElementById("list").append(tr)
    })
    countprice(total);
}
UI(cart_Producs)


