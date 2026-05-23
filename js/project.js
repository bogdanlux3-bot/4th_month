const cards = document.querySelector("#cards");

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    data.forEach((item) => {
      cards.innerHTML += `
        <div class="card">

          <img
            src="https://picsum.photos/300/200"
            alt="image"
          >

          <h2>${item.title}</h2>

          <p>${item.body}</p>

        </div>
      `;
    });
  } catch (error) {
    console.log("Ошибка:", error);
  }
}

getPosts();
