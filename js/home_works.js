const gmail_input = document.getElementById("gmail_input")
const gmail_button = document.getElementById("gmail_button")
const gmail_result = document.getElementById("gmail_result")

const  regex =  /^\w{3,}@\w+\.\w{2,4}\D$/

gmail_button.onclick = () => {
    if (regex.test(gmail_input.value)) {
        gmail_result.innerText= 'Ok'
        gmail_result.style.color = 'green'
    } else {
        gmail_result.innerText = 'No'
        gmail_result.style.color = 'red' 
    }
}

//2) Задача

const childBlock = document.querySelector(".child_block")
const parentBlock = document.querySelector(".parent_block")
console.log(parentBlock);


let moveX = 0
let sizeX  = parentBlock.clientWidth - childBlock.offsetWidth;


const moveBlock = () => {
    if (moveX < sizeX) {
        moveX++;
    childBlock.style.left = moveX   + 'px';
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()