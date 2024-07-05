let products = JSON.parse(localStorage.getItem("Place")) || [];

let index = JSON.parse(localStorage.getItem("index"));

const Ui = (Place) => {
  document.getElementById("show").innerHTML = "";

  let img = document.createElement("img");
  img.src = Place[index].Url1;
  img.style.width = "250px";
  img.style.height = "250px";
  img.style.margin = "20px ";

  let img1 = document.createElement("img");
  img1.src = Place[index].Url2;
  img1.style.width = "250px";
  img1.style.height = "250px";
  img1.style.margin = "20px ";

  let img2 = document.createElement("img");
  img2.src = Place[index].Url3;
  img2.style.width = "250px";
  img2.style.height = "250px";
  img2.style.margin = "20px ";

  let Title = document.createElement("h3");
  Title.innerHTML = Place[index].Title;

  let Des = document.createElement("p");
  Des.innerHTML = Place[index].Des;

  let Cost = document.createElement("h5");
  Cost.innerHTML = Place[index].Cost;

  let like = document.createElement("button");
  like.innerHTML = `like : ${Place[index].like}`;
  like.addEventListener("click", () => handleLike());
  like.style.margin = "10px";

  let comment = document.createElement("button");
  comment.innerHTML = `comment `;
  comment.addEventListener("click", () => {
    prompt("addd");
  });
  comment.style.margin = "10px";

  let share = document.createElement("button");
  share.innerHTML = `share `;
  share.addEventListener("click", () => {
    alert("No Available Social Media");
  });

  document
    .getElementById("show")
    .append(img, img1, img2, Title, Des, Cost, like, share);
};
Ui(products);

document.getElementById("data").addEventListener("submit", (e) => {
  e.preventDefault();
  let com = {
    comment: document.getElementById("comment").value,
  };
  products[index].comment.push(com);
  localStorage.setItem("Place", JSON.stringify(products));
  location.reload();
});

const uimaker = () => {
  document.getElementById("show1").innerHTML = "";
  products[index].comment.map((item) => {
    let p = document.createElement("p");
    p.innerHTML = ` comment :- ${item.comment}  `;
    document.getElementById("show1").append(p);
  });
};

uimaker();
