import { api } from "../components/Api_Data.js";

const Ui = (BookData) => {
    document.getElementById("display").innerHTML = "";

    BookData.map((ele, index) => {
        let outer_div = document.createElement("div");

        let url = document.createElement("img");
        url.src = ele.url;
        url.style.width = "250px";
        url.style.height = "250px";

        let main_div = document.createElement("div");

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let topic = document.createElement("p");
        topic.innerHTML = ele.topic;

        let acc_id = `${index}`;
        let acc_div = document.createElement("div");
        acc_div.style.width = "200px"
        // acc_div.style.border = "1px solid red"
        acc_div.style.marginLeft = "10%"
        acc_div.id = acc_id;
        acc_div.classList.add("accordion");

        ele.sub.map((S_T, i) => {
            let ele_id = `${index}_${i}`;

            let acc_div_item = document.createElement("div");

            let h2 = document.createElement("h2");

            let button = document.createElement("button");
            button.classList.add("accordion-button", "collapsed");
            button.setAttribute("data-bs-toggle", "collapse");
            button.setAttribute("data-bs-target", `#collapse${ele_id}`);
            button.innerHTML = S_T;

            h2.append(button);
            acc_div_item.append(h2);

            let item_div = document.createElement("div");
            item_div.id = `collapse${ele_id}`;
            item_div.classList.add("accordion-collapse", "collapse");
            item_div.setAttribute("data-bs-parent", `#${acc_id}`);

            let acc_body = document.createElement("div");
            acc_body.classList.add("accordion-body");
            acc_body.innerHTML = `Hello ${S_T}`;

            item_div.append(acc_body);
            acc_div_item.append(item_div);

            acc_div.append(acc_div_item);
        });

        main_div.append(title, topic, acc_div);
        // main_div.style.textAlign = "center";
        outer_div.append(url, main_div);
        outer_div.style.border = '1px solid'
        outer_div.style.width = '350px';
        outer_div.style.textAlign = 'center';
        outer_div.style.padding = '10px';
        // outer_div.style.height = "max-content"
        document.getElementById("display").append(outer_div);
    });
};

let DashBoard = await api.DashBoardGet();
console.log(DashBoard);
Ui(DashBoard);
