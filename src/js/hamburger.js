const hamburger = document.querySelector("#hamburger");
const popup = document.querySelector("#popup");

const navigation = document.querySelector("#navigation").cloneNode(1);

hamburger.addEventListener("click", hamburgerHandler);

function hamburgerHandler (e){
    e.preventDefault();
    hamburger.classList.toggle("active");
    popup.classList.toggle("open");

    renderPopup()
}

function renderPopup (){
    popup.appendChild(navigation);
}