const cardsArray =[
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"

    },
    {
        name: "fries",
        img: "images/fries.png"

    },
    {
        name: "hotdog",
        img: "images/hotdog.png"

    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"

    },
    {
        name: "milkshake",
        img: "images/milkshake.png"

    },
    {
        name: "pizza",
        img: "images/pizza.png"

    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"

    },
    {
        name: "fries",
        img: "images/fries.png"

    },
    {
        name: "hotdog",
        img: "images/hotdog.png"

    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"

    },
    {
        name: "milkshake",
        img: "images/milkshake.png"

    },
    {
        name: "pizza",
        img: "images/pizza.png"

    }

]

cardsArray.sort(() => 0.5 - Math.random())

const grid =document.querySelector("section")
const result=document.querySelector("#result")
result.textContent="Score: 0";
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard () {

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
        alert("Oups! Vous avez cliqué sur la même carte!")
        cards[card1].classList.toggle("toggleCard")
        cards[card2].classList.toggle("toggleCard")

    }else if (cardsChosen[0] === cardsChosen[1]){
        //click on 2 same cards
        alert("Bravo! Vous avez trouvé une paire!")
        //cards[card1].setAttribute("src", "images/white.png")
        //cards[card2].setAttribute("src", "images/white.png")
        cards[card1].removeEventListener("click", flipCard)
        cards[card2].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)

    }else {
        //no match 
        alert("Pas de chance! Réessayez!")
        cards[card1].classList.toggle("toggleCard")
        cards[card2].classList.toggle("toggleCard")
    }

    cardsChosen = []
    cardsChosenId = []

    result.textContent = "Score : " + cardsWon.length
    if (cardsWon.length === cardsArray.length/2){
        result.textContent = "Félicitations! Vous avez gagné la partie!"
    }
}

//appel de fonction
createBoard ()