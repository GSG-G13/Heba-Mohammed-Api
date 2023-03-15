const group = document.querySelector(".group");
const searchInput = document.querySelector(".search-input");
const apiKey = "a8b5329276ac4f60a90e30b4884c082f";
const url = `https://newsapi.org/v2/everything?q=tesla&apiKey=${apiKey}`;

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let response = JSON.parse(xhr.responseText);
    let news = response.articles;
    news.forEach((item, i) => {
      if (i !== 0 && i !== 1) {
        DOMElement(item);
      }
    });
    searchInput.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();
      group.innerHTML = "";
      news.forEach((ele) => {
        if (ele.title.toLowerCase().includes(value)) {
          DOMElement(ele);
        }
      });
    });
  }
};

xhr.open("GET", url, true);
xhr.send();

let DOMElement = (item) => {
  let box = document.createElement("div");
  box.className = "box";
  group.appendChild(box);

  let imgDiv = document.createElement("div");
  imgDiv.className = "image";
  box.appendChild(imgDiv);

  let image = document.createElement("img");
  image.src = item.urlToImage;
  imgDiv.appendChild(image);

  let contentDiv = document.createElement("content");
  contentDiv.className = "content";
  box.appendChild(contentDiv);

  let title = document.createElement("h2");
  title.className = "title";
  title.textContent = item.title;
  contentDiv.appendChild(title);

  let desc = document.createElement("p");
  desc.className = "desc";
  desc.textContent = item.description;
  contentDiv.appendChild(desc);

  let briefDiv = document.createElement("div");
  briefDiv.className = "brief";
  contentDiv.appendChild(briefDiv);

  let author = document.createElement("p");
  author.className = "author";
  author.textContent = "write By : ";
  briefDiv.appendChild(author);

  let authorSpan = document.createElement("span");
  authorSpan.textContent = item.author;
  author.appendChild(authorSpan);

  let time = document.createElement("p");
  time.className = "time";
  time.textContent = "Time : ";
  briefDiv.appendChild(time);

  let timeSpan = document.createElement("span");
  timeSpan.textContent = item.publishedAt;
  time.appendChild(timeSpan);
};
