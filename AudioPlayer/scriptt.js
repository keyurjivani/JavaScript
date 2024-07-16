const Audio1 = new Audio('./Music/ANIMAL_ ARJAN VAILLY _ Ranbir Kapoor _ Sandeep Vanga _ Bhupinder B_ Manan B _ Bhushan K(MP3_160K).mp3');
const Audio2 = new Audio('./Music/Dekhha Tenu _ Mr. _ Mrs. Mahi _ Rajkummar Rao_ Janhvi Kapoor _ Mohd. Faiz _ Jaani _ Aadesh S_ Sameer(MP3_160K).mp3');
const Audio3 = new Audio('./Music/Laal Peeli Akhiyaan (Song) Shahid Kapoor_Kriti Sanon_Tanishk_Romy _ Teri Baaton Mein Aisa Uljha Jiya(MP3_160K).mp3');
const Audio4 = new Audio('./Music/PAISA HAI TOH - OFFICIAL LO-FI SONG _ ( SLOWED   REVERBED ) _ FARZI _ SHAHID KAPOOR _ RASHI KHANNA _(MP3_160K).mp3');
const Audio5 = new Audio('./Music/Ruaan Full Song _ Tiger 3 _ Salman Khan_ Katrina Kaif _ Pritam_ Arijit Singh_ Irshad Kamil_ New Song(MP3_160K).mp3');
const Audio6 = new Audio('./Music/Saanware - Akhil Sachdeva _ Abhishek Kumar _ Mannara Chopra _ Anshul Garg(MP3_160K).mp3');
const Audio7 = new Audio('./Music/Sajni (Song)_ Arijit Singh_ Ram Sampath _ Laapataa Ladies _  Aamir Khan Productions(MP3_160K).mp3');
const Audio8 = new Audio('./Music/SUNIYAN SUNIYAN (Official Video) Juss x MixSingh(MP3_160K).mp3');
const Audio9 = new Audio('./Music/Tum Se (Full Video)_ Shahid Kapoor_ Kriti _ Sachin-Jigar_ Raghav Chaitanya_ Varun Jain_ Indraneel(MP3_160K).mp3');
const Audio10 = new Audio('./Music/YODHA_ Zindagi Tere Naam (Song) _ Sidharth Malhotra_ Raashii Khanna _ Vishal Mishra(MP3_160K).mp3');



  
// selecting elements
let prevBtn = document.querySelector('.previous');
let playBtn = document.querySelector('.play-pause');
let nextBtn = document.querySelector('.next');
let songName = document.querySelector('.song-name');
let songimg = document.querySelector('.song-img');
let songaudio = document.querySelector('.song-audio');

let playPauseIcon = document.querySelector('#play-pause-icon');



let songs = [
  { ele: Audio1, audioName: 'ARJAN VAILLY',audioimage: 'https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20231124191036-500x500.jpg'},
  { ele: Audio2, audioName: 'Dekhha Tenu ', audioimage: 'https://images.mid-day.com/images/images/2024/may/Mahi_d.jpg'} ,
  { ele: Audio3, audioName: 'Laal Peeli Akhiyaan', audioimage: 'https://m.media-amazon.com/images/M/MV5BNjUxYTVkMGMtM2ZkNS00MzAzLTk3ZDQtMmY2NjU3ZTJkMTI1XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_.jpg'},
  { ele: Audio4, audioName: 'PAISA HAI TOH',audioimage: 'https://i.ytimg.com/vi/RCvgKHadHrw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZuc9ydjgnfIzoWV46DCpFDSoWkQ' },
  { ele: Audio5, audioName: 'Ruaan',audioimage: 'https://i.ytimg.com/vi/pZNYseeuV3g/maxresdefault.jpg' },
  { ele: Audio6, audioName: 'Saanware',audioimage: 'https://i.ytimg.com/vi/wa--U0DVyRU/maxresdefault.jpg' },
  { ele: Audio7, audioName: 'Sajni',audioimage: 'https://i.ytimg.com/vi/k3g_WjLCsXM/maxresdefault.jpg' },
  { ele: Audio8, audioName: 'SUNIYAN SUNIYAN',audioimage: 'https://i.ytimg.com/vi/AKH6ZNSnWOA/maxresdefault.jpg' },
  { ele: Audio9, audioName: 'Tum Se',audioimage: 'https://i.ytimg.com/vi/LpP4rtjACM8/maxresdefault.jpg' },
  { ele: Audio10, audioName: 'YODHA_ Zindagi Tere Naam',audioimage: 'https://m.timesofindia.com/photo/107956258/size-173798/107956258.jpg' },

];

// console.log(songs[0].audioName);
// let i = 0
// songs.map((i)=>{
//     let audioName = document.createElement('p');
//     audioName.innerHTML = songs[i].audioName

//     document.getElementById("display").append(audioName)
// })

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.innerHTML = songs[current].audioName;

console.log(currentSong);
songimg.src = songs[current].audioimage;



playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
  songimg.src = songs[current].audioimage;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}