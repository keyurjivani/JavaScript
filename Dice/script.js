const Role = () => {
  document.getElementById("Display").innerHTML =
    "<img src = 'image/01.gif' />";
  document.getElementById("Display1").innerHTML =
    "<img src = 'image/01.gif' />";

  setTimeout(function () {
    let num = Math.round(Math.random() * 5 + 1);
    let num1 = Math.round(Math.random() * 5 + 1);

    let sum = Number(num) + Number(num1);
    if (sum == 12) {
      document.getElementById("winner").innerHTML = " ";
      console.log(`You Are Win : ${sum}`);
      document.getElementById("winner").innerHTML = `Your Are Win `;
    }

    // console.log(num);
    document.getElementById("Display").innerHTML =
      "<img src = 'image/" + num + ".png'/>";
    document.getElementById("Display1").innerHTML =
      "<img src = 'image/" + num1 + ".png'/>";

    document.getElementById("sum").innerHTML = `Total : ${sum}`;
  },500);
};
