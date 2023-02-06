const addAccordionClickHandler = () => {
    let accordionLabel = document.querySelectorAll('.accordion__label');

    accordionLabel.forEach(label => {
        label.addEventListener('click', accordionLabelHandler)
    })

    function accordionLabelHandler () {
      
      this.classList.toggle('accordion_active')
        
      let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
    }

        
}

addAccordionClickHandler()