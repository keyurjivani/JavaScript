

const Ui =(data) =>{
    console.log("data",data);

  data.map((ele)=>{
    let p = document.createElement('p');
    p.innerHTML = ele.snippet.title;

    let img = document.createElement('img');
    img.src = ele.snippet.thumbnails.default.url;

    let description = document.createElement('p');
    description.innerHTML = ele.snippet.description;

    let div = document.createElement('div');
    div.append(img,p,description);
    div.setAttribute('id', 'div');

    document.getElementById('Display').append(div)
  })
}



const getVideo = async(data) =>{
    let req = await fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${data}&type=video&key=AIzaSyCGd4IaUr_sf2BoMMSwX-XyX2kKSLOvKMw`)
    let res = await req.json();
    console.log(res.items);
    Ui(res.items)
    
}
getVideo("js")

