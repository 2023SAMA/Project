const sharedPath = "../shared/";

fetch(sharedPath + "header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;
    setupSearch();
  });

fetch(sharedPath + "footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });


function setupSearch() {
  let container = document.getElementById("searchContainer");
  if (!container) return;

  let searchBox = document.createElement("div");
  searchBox.className = "search-box";

  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search...";
  searchBox.appendChild(input);

  let dropdown = document.createElement("div");
  dropdown.className = "dropdown";
  searchBox.appendChild(dropdown);

  let categories = [
    { name: "Bags", link: "../Products_ProductId/index.html" },
    { name: "Dresses", link: "../Products_ProductId/index.html" },
    { name: "Shoes", link: "../Products_ProductId/index.html" },
    { name: "Jewllery", link: "../Products_ProductId/index.html" },
    { name: "Sunglasses", link: "../Products_ProductId/index.html" }
  ];

  function showCategories() {
    let text = input.value.toLowerCase();
    dropdown.innerHTML = "";
    let foundAny = false;

    for (let category of categories) {
      if (category.name.toLowerCase().includes(text)) {
        let item = document.createElement("div");
        item.textContent = category.name;
        item.onclick = () => window.location.href = category.link;
        dropdown.appendChild(item);
        foundAny = true;
      }
    }
    dropdown.style.display = foundAny ? "block" : "none";
  }

  searchBox.onmouseenter = showCategories;
  searchBox.onmouseleave = () => dropdown.style.display = "none";
  input.oninput = showCategories;

  container.appendChild(searchBox);
}
