window.onload = function () {

    addButtonClickHandler()
}

const btnsState = [false, false, false]; // true - кнопка нажата
const cardsBlured = [false, false, false, false, false, false]; 
const buttons = document.querySelectorAll('.service__buttons .button');

addButtonClickHandler = () => {
    buttons.forEach((button, buttonIndex)=> {
        button.addEventListener('click', ()=> buttonClickHandler(buttonIndex))
    })
}

const buttonClickHandler = (buttonIndex) => {
    btnsState.forEach(btn=>buttonIndex?btnsState[buttonIndex] : !btnsState[buttonIndex])
    console.log(btnsState)
}