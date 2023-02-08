const addAccordionClickHandler = () => {
    let accordionLabel = document.querySelectorAll('.accordion__label');

    accordionLabel.forEach(label => {
        label.addEventListener('click', accordionLabelHandler)
    })

    function accordionLabelHandler () {
      accordionLabel.forEach(label=>{
        label.classList.remove('accordion_active')
      })
      this.classList.toggle('accordion_active')
      
    }     
}

addAccordionClickHandler()