//  using querySelectorAll that allows to select everything that has a particular selector
 const tabs= document.querySelectorAll('[data-tab-target]')
 const tabContents= document.querySelectorAll('[data-tab-content]')

 //to get single tabs
 tabs.forEach(tab =>{
     tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('active')
        }) 
        //in order to make active class only visibe
        tabs.forEach(tab=>{
            tab.classList.remove('active')
        })
         tab.classList.add('active')
        // making only the tab that we click on active 
         target.classList.add('active')

     })
 })

