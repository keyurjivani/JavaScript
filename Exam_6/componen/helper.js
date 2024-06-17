const getValue = (id) =>{
    return document.getElementById(id).value;
}
export default getValue


const craeteTag = (tagName, value)=>{
    let temp = document.createElement(tagName);

    tagName == "img" ? temp.src = value : temp.innerHTML = value;

    return temp
}
export {craeteTag}