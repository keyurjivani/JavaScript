let arr = [
  {   id : 1,
      Music_name : "Maar udi ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_timesmusic/2024-07/01/11-36/8902633356702.jpg",
      Music_url : "./music/Amar Notun Gane Ei (Saraswati Puja Special Bengali Adhunik Songs All Tims Hits 2024) Dj BM Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 2,
      Music_name : "Saare Ki ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_timesmusic/2024-07/01/11-36/8902633356702.jpg",
      Music_url : "./music/Ami Pushparaj Tui Srivalli (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 3,
      Music_name : " Tere Vaaste",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903431638557/1615226436/srch_hungama_24733966.jpg",
      Music_url : "./music/Are Sare Pachtai (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 4,
      Music_name : "Nashe Si Chadh Gayi ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_unisysinfo/20230817112119000/0849486075603/1692346623671/resources/0849486075603.jpg",
      Music_url : "./music/Bagal Wala Jaan Marelu (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 5,
      Music_name : " Teri Baaton Mein Aisa Uljha Jiya",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362214_20240205185326/8902894362214/1707140412515/resources/8902894362214.jpg",
      Music_url : "./music/Churi Payel (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com (1).mp3"
  },
  {
      id : 6,
      Music_name : " ANIMAL (Deluxe Edition Album) ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431981196_20240124153424/8903431981196/1706091605637/resources/8903431981196.jpg",
      Music_url : "./music/Churi Payel (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 7,
      Music_name : "Zaalima ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1492505048/srch_zeemusic_ZMC00357-02.jpg",
      Music_url : "./music/Dewarba Dhodi Chatanwa (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 8,
      Music_name : "Jhoome Jo Pathaan ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_unisysinfo/20230816131729000/0194548408807/1692188114616/resources/0194548408807.jpg",
      Music_url : "./music/Gari Chalao Baby Slow Slow (Purulia New Album Exited Roadshow Dance Humming Mix 2024) Dj Bm Music Center-BarmanMusic.Com.mp3"
  },
  {
      id : 9,
      Music_name : " Dil Diyan Gallan",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1513066081/srch_unisysinfo_M09050405.jpg",
      Music_url : "./music/Jis Jivan Mein Tu Nehi Sajan (Saraswati Puja Special Hindi Running Power Music Roadshow Humming Dhamaka Mix 2024) Dj Rb Mix Kalagachia-BarmanMusic.Com.mp3"
  },
  {
      id : 10,
      Music_name : "Ghungroo ",
      img : "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_unisysinfo/20231003101229000/0849486006348/1696508172067/resources/0849486006348.jpg",
      Music_url : "./music/Yaad Aa Raha Hai (Saraswati Puja Special Hindi Running Power Music Roadshow Humming Dhamaka Mix 2024) Dj Rb Mix Kalagachia-BarmanMusic.Com.mp3"
  }

]

const MUSIC=(data)=>{

  document.getElementById("music").innerHTML=""

  let img = document.createElement("img");
  img.src = arr[data].img;

  let Music_name = document.createElement("h2");
  Music_name.innerHTML = arr[data].Music_name;


  let Music_url = document.createElement("audio");
  Music_url.src = arr[data].Music_url;
  let div = document.createElement("div");

  div.append(Music_url)
  Music_url.controls = true;

  img.addEventListener("click", () => {
      Music_url.play();
  });

  Music_name.addEventListener("click", () => {
      Music_url.play();
  });



  // main.append(prew, stop, next)
  let musicContainer = document.getElementById("music");
  musicContainer.append(img, Music_name, Music_url);

}
arr.map((arr, i) =>{

    
    let songplay = document.createElement("h2");
    songplay.innerHTML = arr.Music_name;
    songplay.addEventListener("click", () => {
        MUSIC(i)
    });
    document.getElementById("page").append(songplay);
})
