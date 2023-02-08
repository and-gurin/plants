const addAccordionClickHandler = () => {
    let accordionLabel = document.querySelectorAll('.accordion__container');
    console.log(accordionLabel)

    accordionLabel.forEach(label => {
        label.addEventListener('click',(e)=>{
          let openContent = document.querySelectorAll('.accordion__content')
          let openItems = document.querySelectorAll('.accordion_active')
          console.log(openItems)
          // openContent.forEach(content=>{
          //   content.style.display = "none";
          // })
          // openItems.forEach(openItem=>{
          //   openItem.classList.remove('accordion_active')
          // })
          let content = label.lastElementChild;
          let openItem = document.getElementsByClassName('accordion_active');
          openItem.forEach(item=>{
            if (item) {
            e.target.classList.remove('accordion_active');
            content.style.display = "none";
          }
          if (e.target.classList.contains('accordion__label')) {
            
              e.target.classList.toggle('accordion_active')
            } 
          })
          
          
           
      
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
        })
    })
        
}


addAccordionClickHandler()