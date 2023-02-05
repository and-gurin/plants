

const btnsState = [false, false, false];
const cardsBlured = [false, false, false, false, false, false]; 
const buttons = document.querySelectorAll('.service__buttons .button');
let cards = document.querySelectorAll(".service__cards .card");
    

function addButtonClickHandler () {
    buttons.forEach((button, btnIndex)=> {
         
        button.addEventListener('click', ()=>buttonClickHandler(btnIndex))
    })
}

const buttonClickHandler = (btnIndex) => {
    btnsState[btnIndex] = !btnsState[btnIndex]
    
    for (let j = 0; j < cardsBlured.length; j++) {
        if (btnsState[0]) {cardsBlured[0] = false; cardsBlured[4] = false }
        else {cardsBlured[0] = true; cardsBlured[4] = true}
        if (btnsState[1]) {cardsBlured[2] = false; }
        else {cardsBlured[2] = true; }
        if (btnsState[2]) {cardsBlured[1] = false; cardsBlured[3] = false; cardsBlured[5] = false }
        else {cardsBlured[1] = true; cardsBlured[3] = true; cardsBlured[5] = true} 
        
    }

    btnsState.forEach((isButtonSelected, index) => {
        const button = buttons[index]
        isButtonSelected ? button.classList.add('button_colored_active') : button.classList.remove('button_colored_active')
    })

    cardsBlured.forEach((isCardSelected, index) => {
        const card = cards[index];
        isCardSelected ? card.classList.add('blur') : card.classList.remove('blur');
        
    })

    cards.forEach(card=>{
        let activeButtons = document.querySelectorAll(".service__buttons .button_colored_active");
        if (activeButtons.length === 0) {
            card.classList.remove('blur')
        }
    })

    const blockActiveButton = () => {
    let buttons = document.querySelectorAll(".service__buttons .button");
        buttons.forEach(button => {
            let activeButtons = document.querySelectorAll(".service__buttons .button_colored_active")
            if (activeButtons.length > 1) {
            if (!button.classList.contains('button_colored_active')) {
                button.setAttribute("disabled", true)
            } 
            } else {button.removeAttribute("disabled")}
        })
    }
    blockActiveButton()
            
}

addButtonClickHandler()