import { api } from "../components/Api_Data.js";

let Book = await api.Bookget();
console.log(Book);

const handledatable = (e) => {
    e.preventDefault();

    let data = {
        title: document.getElementById('title').value,
        url: document.getElementById('url').value,
        topic: document.getElementById('topic').value,
        sub: [],
        number : document.getElementById('number').value,
        seat : 25
    };

    // Loop through all elements with the name 'myInputs[]' to get sub-topics
    document.querySelectorAll('input[name="myInputs[]"]').forEach(input => {
        data.sub.push(input.value);
    });

    


    api.BookPost(data)
    console.log(data);
}

document.getElementById("Add").addEventListener("submit", handledatable);
