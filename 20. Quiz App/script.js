let quesText = document.querySelector(".quesText");
let section = document.querySelector(".section");
let option = document.querySelectorAll(".option");
let btn = document.querySelector(".btn");


const Allquestion = [
    {
        question: 'Which of the following is used to read an HTML page and render it?',
        a: 'Web server',
        b: 'Web network',
        c: 'Web browser',
        d: 'Web matrix',
        right: 'c'
    },
    {
        question: ' Which of the following tag is used for inserting the largest heading in HTML?',
        a: 'head',
        b: 'h1',
        c: 'h6',
        d: 'heading',
        right: 'b'
    },
    {
        question: 'In which part of the HTML metadata is contained?',
        a: 'head tag',
        b: 'tital tag',
        c: 'html tag',
        d: 'body tag',
        right: 'a'
    },
    {
        question: 'Which of the following defines a measurement in points?',
        a: 'in',
        b: 'mm',
        c: 'pc',
        d: 'pt',
        right: 'd'
    },
    {
        question: ' Which of the following is not a HTML5 tag?',
        a: ' <track>',
        b: '<video>',
        c: '<slider>',
        d: '<source>',
        right: 'c'
    }
]

let quesIndex = 0
let corect = 0;
let wrong = 0
let length = Allquestion.length

function loadQuestion() {
    if (length === quesIndex) {
        return end()
    }

    reset()

    let quesData = Allquestion[quesIndex];
    quesText.innerHTML = `<div class="score"> ${(quesIndex + 1)}). ${(quesData.question)} </div>`

    option[0].nextElementSibling.textContent = quesData.a
    option[1].nextElementSibling.textContent = quesData.b
    option[2].nextElementSibling.textContent = quesData.c
    option[3].nextElementSibling.textContent = quesData.d


}

function reset() {
    option.forEach((input) => {
        input.checked = false;
    }

    )
}

function end() {
    section.innerHTML = `<h1 class="k"> Your score : ${corect} / ${length} </h1>
    <a href=""> <button id="playagain">Play Again</button></a>
    `
}

function ans() {
    let ans1;

    option.forEach((clickOpt) => {
        if (clickOpt.checked) {
            ans1 = clickOpt.value;
            // console.log(ans1)
        }
    }

    )

    return ans1;

}


btn.addEventListener("click", function () {

    option.forEach((e) => {
        if (e.checked) {


            const data = Allquestion[quesIndex]
            let answer = ans()
            // console.log(data.right)
            if (answer == data.right) {
                corect++;

            }
            else {
                wrong++;
            }

            quesIndex++
            loadQuestion()


        }
       
       

    }

    )


})



loadQuestion(quesIndex);  // first call



