const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".modal_close")

const openModal = () => {
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

closeBtn.onclick = () => {
    closeModal()
}

modal.onclick = () => {
    if (event.target === modal) {
        closeModal()
    }
}

window.onscroll = () => {
    if (window.scrollY > 1000) {
        openModal()
        window.onscroll = null
    }
}

setTimeout(() => {
    openModal()
},10000)