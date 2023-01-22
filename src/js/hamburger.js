const hamburger = document.querySelector("#hamb");
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

const links = Array.from(navigation.children);

links.forEach(link=>{
    link.addEventListener("click", closeOneClick)
})

function closeOneClick () {
    hamburger.classList.remove("active");
    popup.classList.remove("open");
}