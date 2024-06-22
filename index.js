function napravi_raspored() {
    niz = [];
    for (let i = 1; i <= 6; i++) {
        niz.push(i, i);
        console.log(i, i);
    }

    let shuffled = shuffle(niz);
    console.log(shuffled);

    return shuffled;
}

function shuffle(niz) {
    var trenutniIndex = niz.length;
    var randomIndex;
    var temp;

    while (trenutniIndex !== 0) {
        randomIndex = Math.floor(Math.random() * trenutniIndex);
        trenutniIndex--;

        temp = niz[trenutniIndex];
        niz[trenutniIndex] = niz[randomIndex];
        niz[randomIndex] = temp;
    }

    return niz;
}

const cards = document.querySelectorAll(".item");

let otvoreneKarte = [];
let pogodjeni = 0
let pokusaji = 0
let pogodjeniText = document.querySelector(".correct")
let pokusajiText = document.querySelector(".moves")

const btn = document.querySelector(".btn")

const shuffled = napravi_raspored()

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", (event) => {
        const cardID = event.target.id;
        const path = "<img src='images/" + shuffled[cardID] + ".png'>";

        if (otvoreneKarte.length < 2) {

            cards[cardID].innerHTML = path;
            cards[cardID].backgroundColor = "white";
            otvoreneKarte.push({ id: cardID, path: path });

            if (otvoreneKarte.length === 2) {

                if (otvoreneKarte[0].path === otvoreneKarte[1].path) {
                    pogodjeni++;
                    otvoreneKarte = [];
                    pogodjeniText.innerHTML = "Correct " + pogodjeni + "/6"
                }
                else {

                    setTimeout(() => {

                        cards[otvoreneKarte[0].id].innerHTML = "?";
                        cards[otvoreneKarte[1].id].innerHTML = "?";
                        otvoreneKarte = [];
                    }, 1000);
                }
                pokusaji++;
                pokusajiText.innerHTML = "Moves: " + pokusaji;
            }
            if (pogodjeni == 6) {
                console.log("Čestitam! Svi parovi su pronađeni.");
                alert("Čestitamo, svi parovi su pronađeni!")
            }
        }
    });
}

