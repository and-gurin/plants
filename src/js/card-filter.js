window.onload = function () {
    console.log('hellow')

    addButtonClickHandler()
}

const addButtonClickHandler = () => {
    document.querySelector(".service__buttons").addEventListener("click", (e) => {
        if (e.target.classList.contains("button")){
            let clickedButton = e.target;
            selectButton(clickedButton);
            blockActiveButton()
            filterCardBySelectButton(clickedButton);
        }
        
        
    })
}

const selectButton = (clickedButton) => {
    clickedButton.classList.toggle("button_colored_active");
    
}

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

const filterCardBySelectButton = (clickedButton) => {
    let activeButtons = document.querySelectorAll(".service__buttons .button");
    
    let cards = document.querySelectorAll(".service__cards .card");
    console.log(cards);

    const btnsState = [false, false, false]; // true - кнопка нажата
    const cardsBlured = [false, false, false, false, false, false];

    activeButtons.forEach((buttonDOM, btnIndex) => buttonDOM.addEventListener("click", () => ОбработчикНажатияКнопки(btnIndex)));


        if (clickedButton.innerText === "Gardens" && clickedButton.classList.contains("button_colored_active")) {btnsState[0] = true 
        }
        else if (clickedButton.innerText === "Lawn" && clickedButton.classList.contains("button_colored_active")) btnsState[1] = true 
        
        else if (clickedButton.innerText === "Planting" && clickedButton.classList.contains("button_colored_active")) btnsState[2] = true

    console.log(btnsState)
}

//card.querySelectorAll(".card__title").forEach(title => {
            //if (clickedButton.innerText === "Gardens") {
                //if (title.innerText.indexOf("Garden") > -1) {
                    //card.classList.remove("blur");
               // }       
            //}else {card.classList.add("blur")}



    

    // cards.forEach(card => {
    //     activeButtons.forEach(button=>{
    //         if (button.innerText === "Gardens") {
    //             if (button.classList.contains("button_colored_active")&&card.classList.contains("card-2") || button.classList.contains("button_colored_active")&&card.classList.contains("card-3") || button.classList.contains("button_colored_active")&&card.classList.contains("card-4") || button.classList.contains("button_colored_active")&&card.classList.contains("card-6")) card.classList.add("blur")  
    //             else card.classList.remove("blur"); 
    //         }
    //     })  
    // })