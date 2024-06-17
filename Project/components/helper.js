

const getId = (id) =>{
    return document.getElementById(id).value
}
export default getId



const MakeUi = (tagname,value) =>{
    let temp = document.createElement(tagname);

    tagname == "img" ? temp.src = value : temp.innerHTML = value;

    return temp;
}

export {MakeUi}