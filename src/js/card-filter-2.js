// window.onload = function () {

//     addButtonClickHandler()
// }

const btnsState = [false, false, false]; // true - кнопка нажата
const cardsBlured = [false, false, false, false, false, false]; 
const buttons = document.querySelectorAll('.service__buttons .button');

function addButtonClickHandler () {
    buttons.forEach((button, buttonIndex)=> {
        button.addEventListener('click', ()=> buttonClickHandler(buttonIndex))
    })
}

const buttonClickHandler = (buttonIndex) => {
    let arr = btnsState
    
    for (let i = 0; i < arr.length; i++) {
        !arr[buttonIndex] ? arr[buttonIndex] = true : arr[buttonIndex] = false
    }
    
    for (let j = 0; j < cardsBlured.length; j++) {
        if (arr[0]) {cardsBlured[0] = true; cardsBlured[4] = true }
        else {cardsBlured[0] = false; cardsBlured[4] = false}
        if(arr[1]) {cardsBlured[2] = true; }
        else {cardsBlured[2] = false; }
        if (arr[2]) {cardsBlured[1] = true; cardsBlured[3] = true; cardsBlured[5] = true }
        else {cardsBlured[1] = false; cardsBlured[3] = false; cardsBlured[5] = false} 
    }

    
    console.log(cardsBlured)
}

addButtonClickHandler()