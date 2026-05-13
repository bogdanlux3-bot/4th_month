/* const tabBlocks = document.querySelector(".tab_content_block")
const tabs = document.querySelector(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")

const hideBlocks = () => {
    tabBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabs_content_item_active')
    })
}

const showBock = (index = 0) =>{
    tabBlocks[index],style.display = 'block';
    tabs[index].classList.add('tab_content_item_active')
}
hideBlocks()
showBock()

tabsParent.onclick = (event) => {
    if(event.target.tagName.toLowerCase() === 'button') {
        console.log("ВЫ НАЖАЛИ КНОПКУ");
        
    }
}
 */


const  tabBlocks = document.querySelectorAll(".tab_content_block")
const tabs = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")

const hideBlocks = () => {
    tabBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}
const showBlock = (index = 0) => {
    tabBlocks[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active')
}
     
hideBlocks();
showBlock(2);
tabsParent.onclick = (event) => {
    if(event.target.tagName.toLowerCase() === 'button') {    
        tabs.forEach((item, index) =>{
            if (event.target === item) {
                hideBlocks();
                showBlock(index)
            }
        })    
    }
}