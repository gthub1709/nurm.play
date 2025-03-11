const clubs = [
    { name: "Барселона", hint: "Этот клуб из Испании, и его часто называют 'Сине-гранатовые'." },
    { name: "Манчестер Юнайтед", hint: "Этот клуб из Англии, их цвета - красный и белый." },
    { name: "Бавария", hint: "Этот клуб из Германии, известен своей мощной атакой и защитой." },
    { name: "Ювентус", hint: "Этот клуб из Италии, его символ - лошадь." },
    { name: "ПСЖ", hint: "Этот клуб из Франции, его цвета - синий и красный." },
    { name: "Реал Мадрид", hint: "Этот клуб из Испании, его называют королевским." },
    { name: "Челси", hint: "Этот клуб из Англии, их цвета - синий." },
    { name: "Милан", hint: "Этот клуб из Италии, знаменит своими победами в Лиге чемпионов." },
    { name: "Ливерпуль", hint: "Этот клуб из Англии, их символ - печать с изображением лайма." },
    { name: "Арсенал", hint: "Этот клуб из Англии, известен своей долгой историей." },
    { name: "Атлетико Мадрид", hint: "Этот клуб из Испании, часто конкурирует с Реалом и Барселоной." },
    { name: "Тоттенхэм Хотспур", hint: "Этот клуб из Англии, их символ - петух." },
    { name: "Боруссия Дортмунд", hint: "Этот клуб из Германии, известен своими мощными атаками." },
    { name: "Наполи", hint: "Этот клуб из Италии, их цвет - синий, и они из Неаполя." },
    { name: "Лацио", hint: "Этот клуб из Италии, их символ - орел." },
    { name: "Севилья", hint: "Этот клуб из Испании, часто выигрывает Лигу Европы." },
    { name: "Фиорентина", hint: "Этот клуб из Италии, его символ - фиолетовый цвет." },
    { name: "Шахтер Донецк", hint: "Этот клуб из Украины, играет в Донецке." },
    { name: "Зенит", hint: "Этот клуб из России, их цвета - синий и голубой." },
    { name: "Бенфика", hint: "Этот клуб из Португалии, их символ - орел." }
];

let currentClubIndex = 0;
let score = 0;

document.getElementById("hint").textContent = `Подсказка: ${clubs[currentClubIndex].hint}`;

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const correctAnswer = clubs[currentClubIndex].name.toLowerCase();

    if (userInput === correctAnswer) {
        score++;
        alert("Правильно!");
    } else {
        alert("Неправильно! Попробуйте еще раз.");
    }

    currentClubIndex++;

    if (currentClubIndex < clubs.length) {
        document.getElementById("hint").textContent = `Подсказка: ${clubs[currentClubIndex].hint}`;
        document.getElementById("user-input").value = '';
    } else {
        const endMessage = document.getElementById("endMessage");
        endMessage.classList.add("show");
        setTimeout(() => {
            endMessage.classList.remove("show");
            currentClubIndex = 0;
            score = 0;
            document.getElementById("score").textContent = "Очки: 0";
            document.getElementById("hint").textContent = `Подсказка: ${clubs[currentClubIndex].hint}`;
            document.getElementById("user-input").value = '';
        }, 3000);
    }

    document.getElementById("score").textContent = `Очки: ${score}`;
}
