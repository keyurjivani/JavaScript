const Music = () => [
    {
      id : 0,
        song : './Music/ANIMAL_ ARJAN VAILLY _ Ranbir Kapoor _ Sandeep Vanga _ Bhupinder B_ Manan B _ Bhushan K(MP3_160K).mp3'
    },
    {
      id : 1,
        song : './Music/Dekhha Tenu _ Mr. _ Mrs. Mahi _ Rajkummar Rao_ Janhvi Kapoor _ Mohd. Faiz _ Jaani _ Aadesh S_ Sameer(MP3_160K).mp3'
    },
    {
      id : 2,
        song : './Music/Laal Peeli Akhiyaan (Song) Shahid Kapoor_Kriti Sanon_Tanishk_Romy _ Teri Baaton Mein Aisa Uljha Jiya(MP3_160K).mp3'
    },
    {
      id : 3,
        song : './Music/PAISA HAI TOH - OFFICIAL LO-FI SONG _ ( SLOWED   REVERBED ) _ FARZI _ SHAHID KAPOOR _ RASHI KHANNA _(MP3_160K).mp3'
    },
    {
      id : 4,
        song : './Music/Ruaan Full Song _ Tiger 3 _ Salman Khan_ Katrina Kaif _ Pritam_ Arijit Singh_ Irshad Kamil_ New Song(MP3_160K).mp3'
    },
    {id : 5,
        song : './Music/Saanware - Akhil Sachdeva _ Abhishek Kumar _ Mannara Chopra _ Anshul Garg(MP3_160K).mp3'
    },
    {id : 6,
        song : './Music/Sajni (Song)_ Arijit Singh_ Ram Sampath _ Laapataa Ladies _  Aamir Khan Productions(MP3_160K).mp3'
    },
    {id : 7,
        song : './Music/SUNIYAN SUNIYAN (Official Video) Juss x MixSingh(MP3_160K).mp3'
    },
    {id : 8, 
        song : './Music/Tum Se (Full Video)_ Shahid Kapoor_ Kriti _ Sachin-Jigar_ Raghav Chaitanya_ Varun Jain_ Indraneel(MP3_160K).mp3'
    },
    {id : 9,
        song : './Music/YODHA_ Zindagi Tere Naam (Song) _ Sidharth Malhotra_ Raashii Khanna _ Vishal Mishra(MP3_160K).mp3'
    },
    
]
Music()
const music = Music(); 



const songsplay = (id) =>{
  document.getElementById("page").innerHTML = ""

  let a = music[id].id

  let b = music[id].song

  let c = document.createElement('audio');
  c.src = music[id].song
  console.log(c);
  c.controls = true
  c.play()

  document.getElementById("page").append(a,c)
} 




const Musicui = (music) => {
  document.getElementById("audio_song").innerHTML = " "
  music.map((ele)=>{
    let id = document.createElement('h1');
    id.innerHTML = ele.id

    id.addEventListener("click",()=>{
      songsplay(ele.id)
    })
  

    document.getElementById("audio_song").append(id)
    
  })
}
Musicui(music)


