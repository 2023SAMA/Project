//slides between pages
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let slider = document.querySelector('.slider');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let index = 0;
let interval = setInterval(autoSlide, 3000); 

function showSlide(i) {
    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;
    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function autoSlide() {
    index++;
    showSlide(index);
}

next.addEventListener('click', () => {
    index++;
    showSlide(index);
    resetInterval();
});

prev.addEventListener('click', () => {
    index--;
    showSlide(index);
    resetInterval();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
        resetInterval();
    });
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 5000);
}

//fetch
document.addEventListener("DOMContentLoaded", function () {
  let productsContainer = document.getElementById("products-container");

  fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
      let filteredProducts = data.products.filter(product =>
        ["womens-dresses", "jewllery", "womens-shoes", "sunglasses", "fragrances"].includes(product.category)
      );

      let products = filteredProducts.slice(0, 6);

      products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}">
          <div class="product-info">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <a href="#" class="add-to-cart">Add to Cart</a>
          </div>
        `;

        //click
        productCard.querySelector(".add-to-cart").addEventListener("click", function (e) {
          e.preventDefault();
          addToCart(product);
        });

        productsContainer.appendChild(productCard);
      });
    })
    .catch(error => console.error("Error fetching products:", error));
});

 function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }



  function toggleMenu() {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    }




 
 