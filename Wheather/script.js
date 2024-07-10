const clock = () => {
  let Day = [
    "Sunday ",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday ",
    "Saturday ",
  ];
  let Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  document.getElementById("date").innerHTML =
    Day[date.getDay()] +
    ", " +
    date.getDate() +
    " - " +
    Month[date.getMonth()] +
    " - " +
    date.getFullYear();
};

const mapper = (data) => {
  document.getElementById("Show_Wheather").innerHTML = "";

  let name = document.createElement("h2");
  name.innerHTML = data.name;
  name.style.fontSize = "30px";
  let country = document.createElement("h2");
  country.innerHTML = ` , ${data.sys.country}`;
  country.style.fontSize = "30px";
  let div1 = document.createElement("div");
  div1.append(name, country);
  div1.setAttribute("id", "div1");

  let temp = document.createElement("h1");
  temp.innerHTML = Math.round(data.main.temp);
  temp.style.fontSize = "70px";
  temp.style.paddingBottom = "50px";
  let p = document.createElement("p");
  p.innerHTML = " °C";
  p.style.fontSize = "45px";

  let div2 = document.createElement("div");
  div2.append(temp, p);
  div2.setAttribute("id", "div2");

  let humidity = document.createElement("p");
  humidity.innerHTML = `Humidity : ${data.main.humidity}`;
  humidity.style.fontSize = "20px";
  let pressure = document.createElement("p");
  pressure.innerHTML = `Pressure : ${data.main.pressure}`;
  pressure.style.fontSize = "20px";
  let div3 = document.createElement("div");
  div3.append(humidity, pressure);
  div3.setAttribute("id", "div3");

  let div3_1 = document.createElement("div");
  div3_1.append(div3);
  div3_1.setAttribute("id", "div3_1");

  let visibility = document.createElement("p");
  visibility.innerHTML = `Visibility : ${data.visibility}`;
  visibility.style.fontSize = "20px";

  let wind = document.createElement("p");
  wind.innerHTML = `Wind Speed : ${data.wind.speed}`;
  wind.style.fontSize = "20px";

  let timezone = document.createElement("p");
  timezone.innerHTML = `Timezone : ${data.timezone}`;
  timezone.style.fontSize = "20px";

  let div4 = document.createElement("div");
  div4.append(visibility, wind, timezone);
  div4.setAttribute("id", "div4");

  let div4_1 = document.createElement("div");
  div4_1.append(div4);

  let div_child = document.createElement("div");
  div_child.append(div3_1, div4_1);
  div_child.setAttribute("id", "div_child");

  let type = document.createElement("p");
  type.innerHTML = data.weather[0].main;
  type.style.fontSize = "20px";

  let div6 = document.createElement("div");
  div6.append(type);
  div6.setAttribute("id", "div6");

  let temp_min = document.createElement("p");
  temp_min.innerHTML = data.main.temp_min;
  temp_min.style.fontSize = "20px";

  let temp_max = document.createElement("p");
  temp_max.innerHTML = data.main.temp_max;
  temp_max.style.fontSize = "20px";

  let slas = document.createElement("p");
  slas.innerHTML = " / ";
  slas.style.marginLeft = "6px";
  slas.style.marginRight = "6px";
  slas.style.fontSize = "20px";

  let div5 = document.createElement("div");
  div5.append(temp_min, slas, temp_max);
  div5.setAttribute("id", "div5");

  document
    .getElementById("Show_Wheather")
    .append(div1, div2, div_child, div6, div5);
};

const getWheather = async (CityName) => {
  let req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=36f7e546a0c8fd7265e9598b4daf6e50&units=metric`
  );
  let res = await req.json();
  mapper(res);
  let inter = setInterval(clock);
};

const handleCity = (e) => {
  e.preventDefault();

  let CityName = document.getElementById("CityName").value;

  getWheather(CityName);
};

document.getElementById("Wheather").addEventListener("submit", handleCity);