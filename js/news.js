const group = document.querySelector(".group");
const searchInput = document.querySelector(".search-input");
const headTitle = document.querySelector(".ctg");
const selectInput = document.getElementById("sel");

let url = `https://api.codetabs.com/v1/proxy?quest=https://inshorts.deta.dev/news?category=${searchInput.value}`;

// Render Element And Searching
const handelSearch = (news) => {
  news.forEach((item) => {
    DOMElement(item);
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
};

// Fetch Url and handle Search
httpRequest(url, handelSearch);

selectInput.addEventListener("change", (e) => {
  headTitle.textContent = e.target.value;
  url = `https://api.codetabs.com/v1/proxy?quest=https://inshorts.deta.dev/news?category=${e.target.value}`;
  group.innerHTML = "";
  httpRequest(url, handelSearch);
});
