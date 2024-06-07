let c1, c2, c3, c4;
let count = 0;
const counter = (count, s_id, key) => {
  count++;
  document.getElementById(s_id).innerText = count;

  if (key == "key4") {
    sessionStorage.setItem(key, count);
  } else {
    localStorage.setItem(key, count);
  }
};

const click = (c_id, c, s_id, key) => {
  document.getElementById(c_id).addEventListener("click", () => {
    if (key == "key4") {
      c = sessionStorage.getItem(key) || 0;
    } else {
      c = localStorage.getItem(key) || 0;
    }
    counter(c, s_id, key);
  });
};
click("btn", c1, "h2", "key1");
click("btn1", c2, "h21", "key2");
click("btn2", c3, "h22", "key3");
click("btn3", c4, "h23", "key4");
