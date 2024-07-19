let questions = [
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    options: {
      A: "script name='script.js'",
      B: "script src='script.js'",
      C: "script href='script.js'",
      D: "script ref='script.js'",
    },
    correct: "B",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: {
      A: "msg('Hello World');",
      B: "alertBox('Hello World');",
      C: "alert('Hello World');",
      D: "msgBox('Hello World');",
    },
    correct: "C",
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    options: {
      A: "interface",
      B: "throws",
      C: "program",
      D: "short",
    },
    correct: "C",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: {
      A: "var colors = (1:'red', 2:'green', 3:'blue')",
      B: "var colors = 'red', 'green', 'blue'",
      C: "var colors = ['red', 'green', 'blue']",
      D: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    },
    correct: "C",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: {
      A: "onchange",
      B: "onclick",
      C: "onmouseclick",
      D: "onmouseover",
    },
    correct: "B",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: {
      A: "variable carName;",
      B: "var carName;",
      C: "v carName;",
      D: "string carName;",
    },
    correct: "B",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?",
    code: "<p id='demo'>This is a demonstration.</p>",
    options: {
      A: "document.getElementById('demo').innerHTML = 'Hello World!';",
      B: "document.getElementByName('demo').innerHTML = 'Hello World!';",
      C: "document.getElementByTagName('p').innerHTML = 'Hello World!';",
      D: "document.getElement('p').innerHTML = 'Hello World!';",
    },
    correct: "A",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: {
      A: "function myFunction()",
      B: "function:myFunction()",
      C: "function = myFunction()",
      D: "function => myFunction()",
    },
    correct: "A",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: {
      A: "call myFunction()",
      B: "call function myFunction()",
      C: "myFunction()",
      D: "Call.myFunction()",
    },
    correct: "C",
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: {
      A: "'This is a comment",
      B: "<!--This is a comment-->",
      C: "//This is a comment",
      D: "*This is a comment*",
    },
    correct: "C",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    options: {
      A: "false",
      B: "true",
      C: "NaN",
      D: "undefined",
    },
    correct: "B",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: {
      A: "*",
      B: "x",
      C: "=",
      D: "-",
    },
    correct: "C",
  },
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    options: {
      A: "('Hello World')",
      B: "document.write('Hello World')",
      C: "response.write('Hello World')",
      D: "('Hello World').document.write",
    },
    correct: "B",
  },
  {
    question: "Which method can be used to find the length of a string?",
    options: {
      A: "length()",
      B: "getLength()",
      C: "strlen()",
      D: "length",
    },
    correct: "D",
  },
  {
    question: "Which built-in method sorts the elements of an array?",
    options: {
      A: "changeOrder(order)",
      B: "order()",
      C: "sort()",
      D: "arrange()",
    },
    correct: "C",
  },
  {
    question:
      "Which of the following is a way to create an object in JavaScript?",
    options: {
      A: "var obj = {};",
      B: "var obj = ();",
      C: "var obj = [];",
      D: "var obj = <>;",
    },
    correct: "A",
  },
  {
    question: "How do you round the number 7.25 to the nearest integer?",
    options: {
      A: "Math.rnd(7.25)",
      B: "Math.round(7.25)",
      C: "rnd(7.25)",
      D: "round(7.25)",
    },
    correct: "B",
  },
  {
    question: "How can you detect the client’s browser name?",
    options: {
      A: "navigator.appName",
      B: "browser.name",
      C: "client.navName",
      D: "window.browser",
    },
    correct: "A",
  },
  {
    question:
      "Which JavaScript method is used to access an HTML element by id?",
    options: {
      A: "getElementById()",
      B: "getElement(id)",
      C: "getElementByID()",
      D: "getIdElement()",
    },
    correct: "A",
  },
];

console.log(questions);

const ui = () => {
  document.getElementById("dis1").innerHTML = "";

  questions.map((item) => {
    let que = document.createElement("h4");
    que.innerHTML = "Question : " + item.question;

    let optA = document.createElement("p");
    optA.innerHTML = item.options.A;
    let optB = document.createElement("p");
    optB.innerHTML = item.options.B;
    let optC = document.createElement("p");
    optC.innerHTML = item.options.C;
    let optD = document.createElement("p");
    optD.innerHTML = item.options.D;

    let ans = item.correct;
    console.log(ans);
    let b1 = document.createElement("p");
    b1.innerHTML = "A : " + item.options.A;
    b1.addEventListener("click", () => {
      if ("A" === ans) {
        b1.style.backgroundColor = " green";
        b1.style.color = "White";
        b1.style.fontSize = "20px";
        b1.style.width = "220px";
      } else {
        b1.style.backgroundColor = " red";
        b1.style.color = "White";
        b1.style.fontSize = "20px";
        b1.style.width = "220px";
      }
    });

    let b2 = document.createElement("p");
    b2.innerHTML = "B : " + item.options.B;
    b2.addEventListener("click", () => {
      if ("B" === ans) {
        b2.style.background = "green";
        b2.style.color = "White";
        b2.style.fontSize = "20px";
        b2.style.width = "220px";
      } else {
        b2.style.background = " red";
        b2.style.color = "White";
        b2.style.fontSize = "20px";
        b2.style.width = "220px";
      }
    });
    let b3 = document.createElement("p");
    b3.innerHTML = "C : " + item.options.C;
    b3.addEventListener("click", () => {
      if (item.options.C == ans) {
        b3.style.background = "green";
        b3.style.color = "White";
        b3.style.fontSize = "20px";
        b3.style.width = "220px";
      } else {
        b3.style.background = "red";
        b3.style.color = "White";
        b3.style.fontSize = "20px";
        b3.style.width = "220px";
      }
    });
    let b4 = document.createElement("p");
    b4.innerHTML = "D : " + item.options.D;
    b4.addEventListener("click", () => {
      if (item.options.D == ans) {
        b4.style.background = "green";
        b4.style.color = "White";
        b4.style.fontSize = "20px";
        b4.style.width = "220px";
      } else {
        b4.style.background = "red";
        b4.style.color = "White";
        b4.style.fontSize = "20px";
        b4.style.width = "220px";
      }
    });

    let divtag = document.createElement("div");
    divtag.append(b1, b2, b3, b4);
    divtag.setAttribute("class", "divtag");

    let div2 = document.createElement("div");
    div2.append(que, divtag);
    div2.setAttribute("id", "div2");

    document.getElementById("Display").append(div2);
  });
};
const handle = (e) => {
  e.preventDefault();
  let data = {
    question: document.getElementById("ques").value,
    options: {
      A: document.getElementById("A_option").value,
      B: document.getElementById("B_option").value,
      C: document.getElementById("C_option").value,
      D: document.getElementById("D_option").value,
    },
    correct: document.getElementById("Correct_opt").value,
  };
  console.log(data);
  questions.push(data);
  ui();
};
ui();
document.getElementById("Form").addEventListener("submit", handle);
