let DOMElement = (item) => {
  let box = document.createElement("div");
  box.className = "box";
  group.appendChild(box);

  let imgDiv = document.createElement("div");
  imgDiv.className = "image";
  box.appendChild(imgDiv);

  let image = document.createElement("img");
  image.src = item.imageUrl;
  imgDiv.appendChild(image);

  let contentDiv = document.createElement("div");
  contentDiv.className = "content";
  box.appendChild(contentDiv);

  let title = document.createElement("h2");
  title.className = "title";
  title.textContent = item.title;
  contentDiv.appendChild(title);

  let desc = document.createElement("p");
  desc.className = "desc";
  desc.textContent = item.content;
  contentDiv.appendChild(desc);

  let briefDiv = document.createElement("div");
  briefDiv.className = "brief";
  contentDiv.appendChild(briefDiv);

  let author = document.createElement("p");
  author.className = "author";
  author.textContent = "Write By: ";
  briefDiv.appendChild(author);

  let authorSpan = document.createElement("span");
  authorSpan.textContent = item.author;
  author.appendChild(authorSpan);

  let time = document.createElement("p");
  time.className = "time";
  time.textContent = "Time: ";
  briefDiv.appendChild(time);

  let timeSpan = document.createElement("span");
  timeSpan.textContent = item.time;
  time.appendChild(timeSpan);
};