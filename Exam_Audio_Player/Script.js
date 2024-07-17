const Music = () => [
  {
    id: 0,
    name: "Arjan Veilly",
    img: "https://www.cinejosh.com/newsimg/newsmainimg/arjan-vailly-song-from-animal-released_b_1811230357.jpg",
    song: "./Music/ANIMAL_ ARJAN VAILLY _ Ranbir Kapoor _ Sandeep Vanga _ Bhupinder B_ Manan B _ Bhushan K(MP3_160K).mp3",
  },
  {
    id: 1,
    name: "Dekhha Tenu",
    img: "https://i.ytimg.com/vi/rMfugUZD2dA/maxresdefault.jpg",
    song: "./Music/Dekhha Tenu _ Mr. _ Mrs. Mahi _ Rajkummar Rao_ Janhvi Kapoor _ Mohd. Faiz _ Jaani _ Aadesh S_ Sameer(MP3_160K).mp3",
  },
  {
    id: 2,
    name: "Laal Peeli Akhiyaan",
    img: "https://i.ytimg.com/vi/tThJdNt-_5I/sddefault.jpg?v=65a0d06e",
    song: "./Music/Laal Peeli Akhiyaan (Song) Shahid Kapoor_Kriti Sanon_Tanishk_Romy _ Teri Baaton Mein Aisa Uljha Jiya(MP3_160K).mp3",
  },
  {
    id: 3,
    name: "PAISA HAI TOH",
    img: "https://i.ytimg.com/vi/8jqzp-F4SNc/maxresdefault.jpg",
    song: "./Music/PAISA HAI TOH - OFFICIAL LO-FI SONG _ ( SLOWED   REVERBED ) _ FARZI _ SHAHID KAPOOR _ RASHI KHANNA _(MP3_160K).mp3",
  },
  {
    id: 4,
    name: "Ruaan",
    img: "https://i.ytimg.com/vi/pZNYseeuV3g/maxresdefault.jpg",
    song: "./Music/Ruaan Full Song _ Tiger 3 _ Salman Khan_ Katrina Kaif _ Pritam_ Arijit Singh_ Irshad Kamil_ New Song(MP3_160K).mp3",
  },
  {
    id: 5,
    name: "Saanware",
    img: "https://i.ytimg.com/vi/wa--U0DVyRU/maxresdefault.jpg",
    song: "./Music/Saanware - Akhil Sachdeva _ Abhishek Kumar _ Mannara Chopra _ Anshul Garg(MP3_160K).mp3",
  },
  {
    id: 6,
    name: "Sajni",
    img: "https://i.ytimg.com/vi/k3g_WjLCsXM/maxresdefault.jpg",
    song: "./Music/Sajni (Song)_ Arijit Singh_ Ram Sampath _ Laapataa Ladies _  Aamir Khan Productions(MP3_160K).mp3",
  },
  {
    id: 7,
    name: "SUNIYAN SUNIYAN",
    img: "https://i.ytimg.com/vi/AKH6ZNSnWOA/mqdefault.jpg",
    song: "./Music/SUNIYAN SUNIYAN (Official Video) Juss x MixSingh(MP3_160K).mp3",
  },
  {
    id: 8,
    name: "Tum Se",
    img: "https://i.ytimg.com/vi/LpP4rtjACM8/maxresdefault.jpg",
    song: "./Music/Tum Se (Full Video)_ Shahid Kapoor_ Kriti _ Sachin-Jigar_ Raghav Chaitanya_ Varun Jain_ Indraneel(MP3_160K).mp3",
  },
  {
    id: 9,
    name: "Zindagi Tere Naam",
    img: "https://i.ytimg.com/vi/Kn9FJsNOaUU/maxresdefault.jpg",
    song: "./Music/YODHA_ Zindagi Tere Naam (Song) _ Sidharth Malhotra_ Raashii Khanna _ Vishal Mishra(MP3_160K).mp3",
  },
];
Music();
const music = Music();

const songsplay = (id) => {
  document.getElementById("page").innerHTML = "";

  let a = music[id].name;

  let b = document.createElement("img");
  b.src = music[id].img;
  b.style.width = "180px";
  b.style.height = "180px";
  b.style.border = "1px solid";
  b.style.borderRadius = "50%";

  let c = document.createElement("audio");
  c.src = music[id].song;
  console.log(c);
  c.controls = true;
  c.play();

  let prev = document.createElement("button");
  prev.innerHTML = "Prev";
  prev.addEventListener("click", () => {
    if (id > 0) {
      songsplay(id - 1);
    }
  });
  prev.setAttribute("class", "button");

  let puse = document.createElement("button");
  puse.innerHTML = "Pause/Play";
  puse.addEventListener("click", () => {
    if (c.paused) {
      c.play();
    } else {
      c.pause();
    }
  });
  puse.setAttribute("class", "button");

  let next = document.createElement("button");
  next.innerHTML = "Next";
  next.addEventListener("click", () => {
    if (id < music.length - 1) {
      songsplay(id + 1);
    }
  });
  next.setAttribute("class", "button");

  let div = document.createElement("div");
  div.append(b);
  div.setAttribute("class", "div");
  let div2 = document.createElement("div");
  div2.append(prev, puse, next);
  div2.setAttribute("class", "div2");

  let div1 = document.createElement("div");
  div1.append(c, div2);
  div1.setAttribute("class", "div1");

  let div_main = document.createElement("div");
  div_main.append(div, div1);
  div_main.setAttribute("class", "div_main");

  document.getElementById("page").append(div_main);
};

const Musicui = (music) => {
  document.getElementById("audio_song").innerHTML = " ";
  music.map((ele) => {
    let id = document.createElement("h1");
    id.innerHTML = ele.id;

    let name = document.createElement("p");
    name.innerHTML = ele.name;
    name.style.color = "white";

    let img = document.createElement("img");
    img.src = ele.img;
    img.style.width = "30px";
    img.style.height = "30px";
    img.style.border = "1px solid";
    img.style.borderRadius = "50%";

    let div = document.createElement("div");
    div.append(name, img);
    div.style.display = "flex";
    div.style.border = "1px solid White";
    div.style.borderRadius = "10px";
    div.style.width = "560px";
    div.style.height = "40px";
    div.style.margin = "10px";
    div.style.padding = "8px";
    div.style.justifyContent = "space-between";

    div.addEventListener("click", () => {
      songsplay(ele.id);
    });

    document.getElementById("audio_song").append(div);
  });
};
Musicui(music);
