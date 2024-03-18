const formElements = document.querySelectorAll(".form-element")

formElements.forEach((formElement) => {
    console.log(formElement.children[2].classList.add('hidden'))
})

const btn = document.querySelector(".vald")

btn.addEventListener('click', function(e) {
    if (formElements[0].children[1].value == "") {
        formElements[0].children[2].classList.remove('hidden')
    } else {
        formElements[0].children[2].classList.add('hidden')
    }

    if (formElements[1].children[1].value == "") {
        formElements[1].children[2].classList.remove('hidden')
    } else {
        formElements[1].children[2].classList.add('hidden')
    }

    if(formElements[3].children[1].value != formElements[4].children[1].value){
        formElements[4].children[2].classList.remove('hidden')
    } else {
        formElements[3].children[2].classList.add('hidden')
        formElements[4].children[2].classList.add('hidden')
    }

    if ((formElements[0].children[1].value == "" || formElements[1].children[1].value == "" || (formElements[3].children[1].value != formElements[4].children[1].value))) {
        e.preventDefault()
    }
})

console.log(btn);

/*
querySelector : sélectionne le premier element
querySelectorAll : sélectionne tous les elements
addEventListener("nature", fonction) : a lévènement nature exécute la fonction
children : les éléments enfants
classList
    add
    remove
    toggle
    contains
*/