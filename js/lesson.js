const tabBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

const hideBlocks = () => {
  tabBlocks.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};
const showBlock = (index = 0) => {
  tabBlocks[index].style.display = "block";
  tabs[index].classList.add("tab_content_item_active");
};

hideBlocks();
showBlock(2);
tabsParent.onclick = (event) => {
  if (event.target.tagName.toLowerCase() === "button") {
    tabs.forEach((item, index) => {
      if (event.target === item) {
        hideBlocks();
        showBlock(index);
      }
    });
  }
};

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");
const error = document.querySelector("#error");

const converter = (element) => {
  element.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.onload = () => {
      if (request.status === 200) {
        const data = JSON.parse(request.response);

        if (element.value === "") {
          somInput.value = "";
          usdInput.value = "";
          eurInput.value = "";
          return;
        }

        if (element.id === "som") {
          usdInput.value = (element.value / data.usd).toFixed(2);
          eurInput.value = (element.value / data.eur).toFixed(2);
        }

        if (element.id === "usd") {
          somInput.value = (element.value * data.usd).toFixed(2);
          eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
        }

        if (element.id === "eur") {
          somInput.value = (element.value * data.eur).toFixed(2);
          usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
        }
      } else {
        error.style.color = "red";
        error.innerHTML = "Ошибка";
      }
    };
  });
};

converter(somInput);
converter(usdInput);
converter(eurInput);

//ivent loop задачки на сосбесе
const card = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");

let cardId = 1;

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = () => {
  fetch(`${BASE_URL}/${cardId}`)
    .then((response) => {
      if (response.status !== 200) {
        card.style.color = "red";
        card.innerHTML = "Произошла ошибка на сервере";
      } else {
        return response.json();
      }
    })
    .then((data) => {
      const { id, title, completed } = data;

      const color = completed ? "green" : "red";

      card.style.borderColor = color;

      card.innerHTML = `
        <p>${id}</p>
        <p>${title}</p>
        <p style="color:${color}">
          ${completed ? "Completed" : "Not Completed"}
        </p>
      `;
    });
};

btnNext.onclick = () => {
  cardId++;

  if (cardId > 200) {
    cardId = 1;
  }

  fetchTodos();
};

btnPrev.onclick = () => {
  cardId--;

  if (cardId < 1) {
    cardId = 200;
  }

  fetchTodos();
};

fetchTodos();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      console.log(post.title);
    });
  });