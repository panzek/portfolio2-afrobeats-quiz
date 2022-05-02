
let questions = [

    {
        question: "Which Grammy award did Burna Boy win in 2021?",
        options: ["Song of the year Grammy", "Best rap song Grammy", "Album of the year Grammy", "Global Music album Grammy"],
        rightAnswer: "4"
    },
    
    {
        question: "Which artist released the major breakout song 'Dumebi' from his self-titled EP in 2019?",
        answers: ["Adekunle Gold", "Naira Marley", "Rema", "Mayorkun"],
        rightAnswer: "3"
    },

    {
        question: "Which artist won the Grammy award for 'Global Music Album' in 2022?",
        answers: ["Burna Boy", "Wizkid", "Angélique Kidjo", "Wande Coal"],
        rightAnswer: "3"
    },

    {
        question: "Which Artist released the song 'Eloko Oyo' in 2017?",
        answers: ["Fally Ipupa", "Koffi Olomide", "Awilo Longomba", "Innoss B"],
        rightAnswer: "1"
    },

    {
        question: "Davido founded the record label DMW in 2016. What does DMW stand for?",
        answers: ["Dance Masters Worldwide", "Davido Music Worldwide", "Davido's Media Wins", "Davido Millions Works"],
        rightAnswer: "2"
    },

    {
        question: "Which artist won the Grammy award for 'Best Music Video' in 2021?",
        answers: ["Wizkid", "Sikiru Adepoju", "Chamillionaire", "Burna Boy"],
        rightAnswer: "1"
    },
    
    {
        question: "Where did Afrobeats music originate?",
        answers: ["Nigeria", "South Africa", "Ghana", "A and C"],
        rightAnswer: "4"
    },
    
    {
        question: "Finish the lyrics from Whizkid (ft. Tems) Essence: 'Time is of the essence, I tried to teach you…'",
        answers: ["…But you don't want to listen.", "…But I might need some lessons.", "…But I have a confession.", "…But there is some resistance."],
        rightAnswer: "2"
    },

    {
        question: "Who is the Nigerian composer, multi-instrumentalist, and politician activist known as the 'Pioneer of Afrobeats'?",
        answers: ["Fela Anikulapo-Kuti.", "Mulatu Astake.", "Salif Keita.", "Manu Dibangu."],
        rightAnswer: "1"
    },

    {
        question: "In the song 'Kumama Papa' what does 'Azalaka Kisi ya soni' translate to?",
        answers: ["He is with me.", "He has shown me mercy.", "He is the medicine for shame.", "He will show me the way."],
        rightAnswer: "3"
    },

    {
        question: "In the name 'Zlatan Ibile' what does Ibile translate to?",
        answers: ["Great.", "Local.", "Favourite.", "Special."],
        rightAnswer: "2"
    },

    {
        question: "Which central African artist is nicknamed 'Dicap La marveille'?",
        answers: ["Koffi Olomide.", "Fally Ipupa.", "Diamond Platinumz.", "Burna Boy."],
        rightAnswer: "2"
    },

    {
        question: "What does Amapiano in the song 'Ameno Amapiano' by Goya Menor, Nektunez mean?",
        answers: ["The pianos.", "The singers.", "The runners.", "The artist."],
        rightAnswer: "1"
    },
 
    {
        question: "In April 2022, what was the most shazammed song in the world?",
        answers: ["Kwaku the Traveller.", "Don't call me.", "Sungba.", "The Best."],
        rightAnswer: "1"
    },

    {
        question: "What genre does the song 'Jerusalema' by Master KG fall under?",
        answers: ["Hip hop.", "Rock.", "Gospel-house.", "Pop."],
        rightAnswer: "3"
    },

    {
        question: "What is the Ghanaian artist Shatta Wale's real name?",
        answers: ["Charles Nii Armah Mensah Jr.", "Ayodeji Ibrahim Balogun.", "Damini Ebunoluwa Ogulu.", "Oluwatosin Oluwole Ajibade."],
        rightAnswer: "1"
    },

    {
        question: "The afrobeat song 'Jinja' was created by which artist?",
        answers: ["Zinoleesky.", "Rahman Jago.", "Barry Jay.", "Tekno."],
        rightAnswer: "4"
    },

    {
        question: "Which Irish African artist released the latest single 'Truth Be Told'",
        answers: ["Plantain Papi.", "Nonzus Magnus.", "Offica.", "Andre Faz."],
        rightAnswer: "2"
    },

    {
        question: "The song 'ZaZoo Zehh' is by?",
        answers: ["Portable.", "Poco Lee and Olamide Ft. Portable.", "Portable and Poco Lee Ft. Olamide.", "Portable and Olamide Ft. Poco Lee."],
        rightAnswer: "3"
    },

    {
        question: "Don't 'Rush' is by this UK Afrobeats artist?",
        answers: ["Young T & Bugsey.", "J Hus.", "Nonzus Magnus.", "Kojo Funds."],
        rightAnswer: "1"
    },

    {
        question: "The song Azonto is by?",
        answers: ["Not3s.", "Fuse ODG.", "Yxng Bane.", "Juls."],
        rightAnswer: "2"
    }
]


document.addEventListener('DOMContentLoaded', function() {
    //get the question and options values from the DOM and store these values in variables

    let newQuestions = 0;
    let question = document.getElementById('question');
    let choices = document.getElementsByClassName('options');

    let buttons = document.getElementsByClassName('btn');
        for(let btn of buttons) {
            console.log(btn.innerText)

            btn.addEventListener('click', function() {
                if(btn.classList.contains('next-btn')) {
                    displayQuestion();
                } else {
                    console.log(`I am not a next button`)
                }
            })
        }

 
/**
 * start the quiz on user click of the start button after creating username
 */
 function startQuiz() {
    score = 0;
    newQuestions = [...questions];

    displayQuestion()
}

/** 
 * Display quiz when page is loaded
 * to be called inside the start quiz function
*/
function displayQuestion() {

    let randomNum = Math.floor(Math.random() * newQuestions.length);
    let randomQuestion = newQuestions[randomNum];
    question.innerText = randomQuestion.question;

     // display questions to the user
    for(let choice of choices) {
        
        let optionsValue = choice.dataset.value;
        console.log(choice.innerText = randomQuestion.answers[optionsValue]);

        checkAnswer();
     }

}

/**
 * check user selected value and the correct answer
 * and apply background color specific to correct and incorrect answers 
 */
function selectAnswer() {

}

/**
 * Checks the user's selected answer and the correct answer
 */
function checkAnswer() {

}

/**
 * Keeps track of user's score and 
 * increment the score count if the answer is correct
 */
function increaseScore() {

}


/**
 * increment the score count if the answer is incorrect
 */
function incrementWrongAnswer() {

}

startQuiz()

})



