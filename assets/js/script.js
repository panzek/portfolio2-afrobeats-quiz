
let questions = [

    {
        question: "Which Grammy award did Burna Boy win in 2021?",
        option1: "Song of the year Grammy",
        option2: "Best rap song Grammy",
        option3: "Album of the year Grammy", 
        option4: "Global Music album Grammy", 
        rightAnswer: "option4"
    },
    {
        question: "Which artist released the major breakout song 'Dumebi' from his self-titled EP in 2019?", 
        option1: "Adekunle Gold", 
        option2: "Naira Marley",
        option3: "Rema", 
        option4: "Mayorkun", 
        rightAnswer: "option3"
    },
    {
        question: "Which artist won the Grammy award for 'Global Music Album' in 2022?", 
        option1: "Burna Boy", 
        option2: "Wizkid", 
        option3: "Angélique Kidjo", 
        option4: "Wande Coal", 
        rightAnswer: "option3"
    },
    {
        question: "Which Artist released the song 'Eloko Oyo' in 2017?", 
        option1: "Fally Ipupa", 
        option2: "Koffi Olomide", 
        option3: "Awilo Longomba", 
        option4: "Innoss'B", 
        rightAnswer: "option1"
    },
    {
        question: "Davido founded the record label DMW in 2016. What does DMW stand for?", 
        option1: "Davido Music Worldwide", 
        option2: "Dance Masters Worldwide", 
        option3: "Davido's Media Wins", 
        option4: "Davido Millions Works", 
        rightAnswer: "option1"
    },
    {
        question: "Which artist won the Grammy award for 'Best Music Video' in 2021", 
        option1: "Wizkid", 
        option2: "Sikiru Adepoju", 
        option3: "Chamillionaire", 
        option4: "Burna Boy", 
        rightAnswer: "option1"
    },
    {
        question: "Where did Afrobeats music originate?", 
        option1: "Nigeria", 
        option2: "South Africa", 
        option3: "Ghana", 
        option4: "A and C", 
        rightAnswer: "option4"
    },
    {
        question: "Finish the lyrics from Whizkid (ft. Tems) Essence: 'Time is of the essence, I tried to teach you…'", 
        option1: "…But you don't want to listen.", 
        option2: "…But I might need some lessons.", 
        option3: "…But I have a confession.",
        option4: "…But there is some resistance.", 
        rightAnswer: "option2"
    },
    {
        question: "Who is the Nigerian composer, multi-instrumentalist, and politician activist known as the 'Pioneer of Afrobeats'?", 
        option1: "Fela Kuti", 
        option2: "Mulatu Astake", 
        option3: "Salif Keita", 
        option4: "Manu Dibangu", 
        rightAnswer: "option1"
    },
    {
        question: "In the song 'Kumama Papa' what does 'Azalaka Kisi ya soni' translate to?", 
        option1: "He is with me", 
        option2: "He has shown me mercy", 
        option3: "He is the medicine for shame", 
        option4: "He will show me the way", 
        rightAnswer: "option3"
    },
    {
        question: "In the name 'Zlatan Ibile' what does Ibile translate to?", 
        option1: "Great", 
        option2: "Local", 
        option3: "Favourite", 
        option4: "Special", 
        rightAnswer: "option2"
    },
    {
        question: "Which central African artist is nicknamed 'Dicap La marveille'?", 
        option1: "Koffi Olomide", 
        option2: "Fally Ipupa", 
        option3: "Diamond Platinumz", 
        option4: "Burna Boy", 
        rightAnswer: "option2"
    },
    {
        question: "What does Amapiano in the song 'Ameno Amapiano' by Goya Menor, Nektunez mean?", 
        option1: "The pianos", 
        option2: "The singers", 
        option3: "The runners", 
        option4: "The artist", 
        rightAnswer: "option1"
    },
    {
        question: "In April 2022, what was the most shazammed song in the world?", 
        option1: "Kwaku the Traveller", 
        option2: "Don't call me", 
        option3: "Sungba", 
        option4: "The Best", 
        rightAnswer: "option1"
    },
    {
        question: "What genre does the song 'Jerusalema' by Master KG fall under?", 
        option1: "Gospel-house", 
        option2: "Hip hop", 
        option3: "Rock", 
        option4: "Pop", 
        rightAnswer: "option1"
    },
    {
        question: "What is the Ghanaian artist Shatta Wale's real name?", 
        option1: "Charles Nii Armah Mensah Jr.", 
        option2: "Ayodeji Ibrahim Balogun", 
        option3: "Damini Ebunoluwa Ogulu",
        option4: "Oluwatosin Oluwole Ajibade",
        rightAnswer: "option1" 
    },
    {
        question: "The afrobeat song 'Jinja' was created by which artist?", 
        option1: "Tekno", 
        option2: "Zinoleesky", 
        option3: "Rahman Jago", 
        option4: "Barry Jay", 
        rightAnswer: "option1"
    },
    {
        question: "Which Irish African artist released the latest single 'Truth Be Told'", 
        option1: "Nonzus Magnus", 
        option2: "Plantain Papi", 
        option3: "Offica", 
        option4: "Andre Faz", 
        rightAnswer: "option1"
    },
    {
        question: "The song 'ZaZoo Zehh' is by", 
        option1: "Portable", 
        option2: "Poco Lee and Olamide Ft. Portable", 
        option3: "Portable and Poco Lee Ft. Olamide", 
        option4: "Portable and Olamide Ft. Poco Lee",
        rightAnswer: "option3"
    },
    {
        question: "Don't 'Rush' is by this UK Afrobeats artist",
        option1: "Young T & Bugsey", 
        option2: "J Hus",
        option3: "Nonzus Magnus",
        option4: "Kojo Funds",
        rightAnswer: "option1"
    },
    {
        question: "The song Azonto is by", 
        option1: "Not3s", 
        option2: "Yxng Bane", 
        option3: "Fuse ODG", 
        option4: "Juls",
        rightAnswer: "option3"
    }
]


document.addEventListener('DOMContentLoaded', function() {
    let randomNum = Math.floor(Math.random() * questions.length);
    let randomQuestion = questions[randomNum];
    console.log(randomQuestion);

})

