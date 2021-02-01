// EXO 1

let maDiv = document.querySelector('#content')

maDiv.addEventListener('click', (e) => {
    let cible = e.target
    if (cible.tagName ==  "DIV") {
        cible.style = "border: 2px black solid"
    }
    else if (cible.tagName == "P") {
        cible.style = "font-weight: bold; color: red"
    }
    else if (cible.tagName == "H1") {
        cible.style = "background-color: yellow"
    }
    else if (cible.tagName == "H2") {
        cible.innerText = cible.innerText.slice(cible.innerText.length - (cible.innerText.length -1));
    }
})

// EXO 2

let titreDiv = document.querySelectorAll('div')[1].children[0]
let mySectionP = document.querySelector('section').children[0]

let monTexte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"

titreDiv.addEventListener('mouseover', (e) => {
    mySectionP.innerText = monTexte
})