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
