let Data_array = JSON.parse(localStorage.getItem("Data")) || [];
console.log("Data_array", Data_array);

const handleLogin = (e) => {
  e.preventDefault();

  let Login_Data = {
    Email: document.getElementById("Email").value,
    password: document.getElementById("password").value,
  };
  console.log(Login_Data);

  for (let i = 0; i < Data_array.length; i++) {
    if (
      Data_array[i].Email != Login_Data.Email &&
      Data_array[i].password != Login_Data.password
    ) {
      alert("Not Found Data");
      alert("Please Sign up");
      break;
    } else {
      if (
        Data_array[i].Email == Login_Data.Email &&
        Data_array[i].password == Login_Data.password
      ) {
        alert("SuccessFull Your Login Proccess!!!");
        break;
      } else if (Data_array[i].Email != Login_Data.Email) {
        alert("Your Email Not Found, Please Check Email");
        break;
      } else if (Data_array[i].password != Login_Data.password) {
        alert("Your Password Not Current, Please Check Password");
        break;
      }
    }
  }
};

document.getElementById("Login").addEventListener("submit", handleLogin);
