import Navbar from "../Components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let Place = JSON.parse(localStorage.getItem("Place")) || [];
// console.log("Place",Place);
const handlePlace = (e) => {
  e.preventDefault();

  let Data = {
    Url1: document.getElementById("Url1").value,
    Url2: document.getElementById("Url2").value,
    Url3: document.getElementById("Url3").value,
    Title: document.getElementById("Title").value,
    Des: document.getElementById("Des").value,
    Cost: document.getElementById("Cost").value,
    id: Place.length == 0 ? 1 : Place[Place.length - 1].id + 1,
    like: 0,
    comment: [],
  };
  // console.log(Data);
  Place.push(Data);
  localStorage.setItem("Place", JSON.stringify(Place));
  window.location.href = "/EXAM_7/index.html";
};

document.getElementById("form").addEventListener("submit", handlePlace);
