

// const Ui =(data) =>{
//     console.log("data",data);

//   data.map((ele)=>{
//     let p = document.createElement('p');
//     p.innerHTML = ele.snippet.title;

//     // let video = document.createElement('video');
//     // video.src = ele.id.video_id;
//     // video.controls = true;
//     // p.addEventListener('click',()=>{
//     //     video.play();
//     // })

//     let description = document.createElement('p');
//     description.innerHTML = ele.snippet.description;

//     document.getElementById('Display').append(p,description)
//   })
// }



const getVideo = async() =>{
    let req = await fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=js&type=video&key=AIzaSyAcLKQ1lIfIvxdEb0e0tWc4TkM9ESwCHlE`)
    let res = await req.json();
    console.log(res.items);
    // Ui(res.items)
    
}
getVideo()

