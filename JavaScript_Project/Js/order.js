let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);

cart.map((ele)=>{
    let img = document.createElement('img');
    img.src = ele.img;

    document.getElementById("cart").append(img);

    let name = document.createElement('h1');
    name.innerHTML = ele.name;
    

    document.getElementById('Title').append(name);

    let price = document.createElement('p');
    price.innerHTML = ele.price;

    document.getElementById('Price').append(price);

    let pricee = document.createElement('h1');
    pricee.innerHTML = ele.price;

    document.getElementById('Pricee').append(pricee);

    let button = document.createElement('button')
    button.innerHTML = "Buy Now";
    button.addEventListener('click', () =>{
       alert("Deliverd Product")
       window.open('/JavaScript_Project/index.html');
       window.location.reload();
       localStorage.removeItem("cart")
           
    })
    document.getElementById('button').append(button);
})