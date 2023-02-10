const addAccordionClickHandler = () => {
    let accordionLabel = document.querySelectorAll('.accordion__label');

    accordionLabel.forEach(label => {
      
        label.addEventListener('click', function (e) {
          //accordionLabelHandler();
          this.classList.toggle('accordion_active')
        })
        

    })

    // function accordionLabelHandler () {
    //   accordionLabel.forEach(label=>{
    //     label.classList.remove('accordion_active')
    //   })
      
      
    // }     
}

addAccordionClickHandler()