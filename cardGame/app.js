const cardsArray =[
    {
        name: "spark",
        img: "images/spark.png"

    },
    {
        name: "light",
        img: "images/light.png"

    },
    {
        name: "heart",
        img: "images/heart.png"

    },
    {
        name: "ball",
        img: "images/ball.png"

    },
    {
        name: "stars",
        img: "images/stars.png"


    },
    {
        name: "moon",
        img: "images/moon.png"

    },
    {
        name: "spark",
        img: "images/spark.png"

    },
    {
        name: "light",
        img: "images/light.png"

    },
    {
        name: "heart",
        img: "images/heart.png"

    },
    {
        name: "ball",
        img: "images/ball.png"

    },
    {
        name: "stars",
        img: "images/stars.png"

    },
    {
        name: "moon",
        img: "images/moon.png"

    }

]

//cardsArray.sort(() => 0.5 - Math.random())

const grid =document.querySelector("#sectionGame")
const result=document.querySelector("#result")
const message = document.querySelector("#messageTpPlayer")
const buttonRestart = document.querySelector("#buttonPos");
buttonRestart.addEventListener("click", restart)
result.textContent="Score: 0";
message.textContent="C'est parti!"
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function restart () {
    window.location.reload();
}


function createBoard () {
    cardsArray.sort(() => 0.5 - Math.random())
    //on va créer des cartes qui ont comme element
    //container - cards - face - backface
    for(let i =0; i< cardsArray.length; i++){
        const cards = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        cards.classList ="card";
        face.classList = "face";
        back.classList = "back";

        //attach info to the cards
        cards.setAttribute("data-id", i);
        face.src= cardsArray[i].img;
        cards.addEventListener("click", flipCard)

        //attach cards to the section
        grid.appendChild(cards)
        cards.appendChild(face)
        cards.appendChild(back)
    }
}

function flipCard(){
    let cardId = this.getAttribute("data-id")

    cardsChosen.push(cardsArray[cardId].name)
    cardsChosenId.push(cardId)
    //this.setAttribute("src", cardsArray[cardId].img)
    this.classList.toggle("toggleCard")

    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    let cards = document.querySelectorAll(".card")
    let card1= cardsChosenId[0]
    let card2= cardsChosenId[1]


    //click on same image
    if (card1 === card2){
        message.textContent="Oups! Vous avez cliqué sur la même carte!"
        cards[card1].classList.toggle("toggleCard")
        cards[card2].classList.toggle("toggleCard")

    }else if (cardsChosen[0] === cardsChosen[1]){
        //click on 2 same cards
        message.textContent="Bravo! Vous avez trouvé une paire!"
        //cards[card1].setAttribute("src", "images/white.png")
        //cards[card2].setAttribute("src", "images/white.png")
        cards[card1].removeEventListener("click", flipCard)
        cards[card2].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)

    }else {
        //no match 
        message.textContent="Pas de chance! Réessayez!"
        cards[card1].classList.toggle("toggleCard")
        cards[card2].classList.toggle("toggleCard")
    }

    cardsChosen = []
    cardsChosenId = []

    result.textContent = "Score : " + cardsWon.length
    if (cardsWon.length === cardsArray.length/2){
        message.textContent = "Félicitations! Vous avez gagné la partie!"
    }
}

//appel de fonction
createBoard ()