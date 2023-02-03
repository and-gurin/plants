const dropDownClickHandler = () => {
    let dropLabel = document.querySelectorAll('.drop__label');
    let dropTitle = document.querySelectorAll('.drop__item');
    let background = document.querySelector('.drop__label')
    let dropContainer = document.querySelectorAll('.drop__container');
    let dropIcon = document.querySelector('.drop__icon')
    let dropImg = document.querySelector('.contacts__img_mobile')
    
    dropLabel.forEach(drop=>{
        drop.addEventListener('click', dropToggle)
    })

    function backgroundAdd () {
        background.classList.add('drop__label_background');
        dropIcon.classList.add('drop__icon_active');
        dropImg.classList.add('hidden')
    }

    function backgroundRemove () {
        background.classList.remove('drop__label_background')
        dropIcon.classList.remove('drop__icon_active')
    }

    dropTitle.forEach(title => {
        title.addEventListener('click', selectItem)
    })

    function dropToggle () {
        this.parentElement.classList.toggle('drop__active')
        backgroundAdd()
        dropContainer.forEach(drop => {
            drop.classList.remove('active__container')
        })
    }

    function selectItem () {
        let text = this.innerText;
        let select = this.closest('.drop-down');
        let currentText = select.querySelector('.drop__title');
        currentText.innerText = text;
        select.classList.remove('drop__active');
        showContainer(text);
        console.log(text)
        backgroundRemove()
    }

    function showContainer (text) {
        let cutText = text.toLowerCase().slice(0, 3)

        
        console.log(cutText)
        dropContainer.forEach(drop => {
            drop.classList.remove('active__container')
            if (drop.classList.contains(cutText)){
                drop.classList.add('active__container')
            }
        })
    }
}

dropDownClickHandler();