let UserData = JSON.parse(localStorage.getItem("UserData")) || [];
console.log(UserData);

// const handleLike =()=>{
//     UserData.like+=1;
//     console.log(UserData.like)
//     // localStorage.setItem("Place",JSON.stringify(Place));
//     Ui(UserData)
//  }

// const comment = () =>{
//     prompt("Add")
// }

const Ui = (UserData) => {
  document.getElementById("show").innerHTML = "";
  UserData.map((ele) => {
    let img = document.createElement("img");
    img.src = ele.Url1;
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.margin = "20px ";

    let img1 = document.createElement("img");
    img1.src = ele.Url2;
    img1.style.width = "250px";
    img1.style.height = "250px";
    img1.style.margin = "20px ";

    let img2 = document.createElement("img");
    img2.src = ele.Url3;
    img2.style.width = "250px";
    img2.style.height = "250px";
    img2.style.margin = "20px ";

    let Title = document.createElement("h3");
    Title.innerHTML = ele.Title;

    let Des = document.createElement("p");
    Des.innerHTML = ele.Des;

    let Cost = document.createElement("h5");
    Cost.innerHTML = ele.Cost;

    let like = document.createElement("button");
    like.innerHTML = `like : ${ele.like}`;
    like.addEventListener("click", () => handleLike());
    like.style.margin = "10px";

    //     let comment = document.createElement("button");
    //     comment.innerHTML = `comment `
    //    comment.addEventListener("click",()=>{
    //     prompt("addd")

    //    })
    // comment.style.margin = "10px"

    // let share = document.createElement("button");
    // share.innerHTML = `share `
    // share.addEventListener("input",()=>{

    // })

    document
      .getElementById("show")
      .append(img, img1, img2, Title, Des, Cost, like);
  });
};
Ui(UserData);

// let c_S = [];
// console.log("show2",c_S);


// const Commentt = (e) => {
//   e.preventDefault();
//   let dc = {
//     aa: document.getElementById("comment_in").value,
//   };
 
//   c_S.push(dc)
// //   console.log("cs",c_S);
// };

// const c = (c_S) =>{
//     // console.log("ui",c_S);
//     // document.getElementById("Comment_Show").innerHTML = ""
//     c_S.map((ele)=>{
//         let p = document.createElement("p");
//         p.innerHTML = ele.aa
//         console.log("aa",ele.aa);

//         document.getElementById("Comment_Show").append(p)
//     })
// }
// c(c_S)




// document.getElementById("comment").addEventListener("submit", Commentt);
