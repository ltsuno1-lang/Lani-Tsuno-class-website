// CSS styling
const style = document.createElement("style");

style.textContent = `
    body {
        margin: 0;
        min-height: 100vh;
        padding: 30px 15px;
        box-sizing: border-box;
        background-color: green;
        font-family: Arial, sans-serif;
        text-align: center;
    }

    .card {
        max-width: 600px;
        margin: 20px auto;
        padding: 25px;
        border-radius: 15px;
        background-color: white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    button {
        width: 100px;
        height: 40px;
        margin: 5px;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }

    #green {
        background-color: green;
    }

    #red {
        background-color: red;
    }

    #blue {
        background-color: blue;
    }

    #randomColor {
        background-color: gray;
    }

    #randomAnimal {
        width: 150px;
        background-color: darkgreen;
    }

    #animalEmoji {
        font-size: 90px;
    }
`;

document.head.appendChild(style);

const body = document.body;

// Color buttons
document.getElementById("green").addEventListener("click", function () {
    body.style.backgroundColor = "green";
});

document.getElementById("red").addEventListener("click", function () {
    body.style.backgroundColor = "red";
});

document.getElementById("blue").addEventListener("click", function () {
    body.style.backgroundColor = "blue";
});

document.getElementById("randomColor").addEventListener("click", function () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

// Animal generator// AI from here down
const animals = [
    ["🐶", "Dog", "Dogs are known for their loyalty."],
    ["🐱", "Cat", "Cats can rotate their ears almost 180 degrees."],
    ["🐘", "Elephant", "Elephants use their trunks to drink and grab food."],
    ["🐧", "Penguin", "Penguins have feathers that keep them warm."],
    ["🦊", "Fox", "Foxes use Earth's magnetic field to help them hunt."],
    ["🐼", "Panda", "Pandas spend most of their day eating bamboo."],
    ["🦁", "Lion", "A group of lions is called a pride."],
    ["🐬", "Dolphin", "Dolphins communicate with clicks and whistles."]
];

let currentAnimal = 0;

document.getElementById("randomAnimal").addEventListener("click", function () {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * animals.length);
    } while (randomIndex === currentAnimal);

    currentAnimal = randomIndex;

    document.getElementById("animalEmoji").textContent =
        animals[randomIndex][0];

    document.getElementById("animalName").textContent =
        animals[randomIndex][1];

    document.getElementById("animalFact").textContent =
        animals[randomIndex][2];
});