// Questions that will be asked
const Questions = [{
    q: "Which gender do you associate with the color pink?",
    a: [{ text: "Boy", isCorrect: false },
    { text: "Girl", isCorrect: true },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with nurses?",
    a: [{ text: "Boy", isCorrect: false },
    { text: "Girl", isCorrect: true },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with computer science?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with makeup?",
    a: [{ text: "Boy", isCorrect: false },
    { text: "Girl", isCorrect: true },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with an authority figure?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with earrings?",
    a: [{ text: "Boy", isCorrect: false },
    { text: "Girl", isCorrect: true },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with math?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with strength?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with money?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with a superhero?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with video games?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with sports?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with fishing?",
    a: [{ text: "Boy", isCorrect: true },
    { text: "Girl", isCorrect: false },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
},
{
    q: "Which gender do you associate with childcare?",
    a: [{ text: "Boy", isCorrect: false },
    { text: "Girl", isCorrect: true },
    { text: "Nonbinary", isCorrect: false },
    { text: "Other", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You gender stereotyped ${score} out of ${Questions.length} questions. Did this surprise you?`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        nextQuestion();
    } else {
        nextQuestion();
    }
}