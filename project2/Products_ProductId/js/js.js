document.addEventListener("DOMContentLoaded", () => {

  const allElements = document.querySelectorAll(".box, section, .card");
  allElements.forEach(el => {
    el.setAttribute("data-aos", "fade-up");
    el.setAttribute("data-aos-duration", "1200");
    el.setAttribute("data-aos-easing", "ease-in-out");
  });
  AOS.init();

  let productsData = [];

  function fetchCategory(apiUrl) {
    return fetch(apiUrl)
      .then(res => res.json())
      .then(data => data.products)
      .catch(err => {
        console.error(`❌ Error fetching ${apiUrl}:`, err);
        return [];
      });
  }

  function fetchAllProducts() {
    Promise.all([
      fetchCategory("https://dummyjson.com/products/category/womens-bags"),
      fetchCategory("https://dummyjson.com/products/category/womens-shoes"),
      fetchCategory("https://dummyjson.com/products/category/womens-dresses"),
      fetchCategory("https://dummyjson.com/products/category/womens-watches"),
      fetchCategory("https://dummyjson.com/products/category/womens-jewellery"),
    ])
    .then(results => {
      productsData = results.flat();
      console.log("✅ All products fetched:", productsData);

      initSlider(".slider-track-1", productsData);
      initSlider(".slider-track-2", productsData.slice(10, 30));
    })
    .catch(err => console.error("❌ Error fetching all products:", err));
  }

  fetchAllProducts();

function loadCategoryProducts(category) {
  fetchCategory(`https://dummyjson.com/products/category/${category}`)
    .then(products => {
      console.log(`✅ Loaded products for ${category}`, products);
      initSlider(".slider-track-1", products);

      initSlider(".slider-track-2", products.slice(0, 20));
    });
}

  function generateStars(rating) {
    let starsHTML = "";
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<i class="fas fa-star text-warning"></i>';
    }
    if (halfStar) {
      starsHTML += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<i class="far fa-star text-warning"></i>';
    }
    return starsHTML;
  }

  function createCardHTML(product) {
    const stars = generateStars(product.rating || 4);
    return `
    <div class="card text-center mx-2 view-details" data-id="${product.id}" style="cursor:pointer;">
        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <p class="card-text fw-bold">${product.title}</p>
          <p class="card-text text-success">${product.price} EGP</p>
          <p class="card-text small">${product.category}</p>
          <div>${stars}</div>
          <button class="btn btn-primary add-to-cart-btn mt-2" data-product-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
  }

  function initSlider(trackSelector, productsArray) {
    const sliderTrack = document.querySelector(trackSelector);
    if (!sliderTrack) return;

    sliderTrack.innerHTML = "";

    sliderTrack.innerHTML += createCardHTML(productsArray[productsArray.length - 1]);
    productsArray.forEach(product => {
      sliderTrack.innerHTML += createCardHTML(product);
    });
    sliderTrack.innerHTML += createCardHTML(productsArray[0]);

    let cards = sliderTrack.querySelectorAll('.card');
    let currentIndex = 1;
    const cardWidth = cards[0].offsetWidth + 16;

    sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    const nextBtn = sliderTrack.closest('.position-relative').querySelector('.next-btn');
    const prevBtn = sliderTrack.closest('.position-relative').querySelector('.prev-btn');
    let isTransitioning = false;

    nextBtn?.addEventListener('click', () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      sliderTrack.style.transition = "transform 0.9s ease";
      sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });

    prevBtn?.addEventListener('click', () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex--;
      sliderTrack.style.transition = "transform 0.9s ease";
      sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    });

    sliderTrack.addEventListener('transitionend', () => {
      isTransitioning = false;

      if (currentIndex >= cards.length - 1) {
        currentIndex = 1;
        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        sliderTrack.offsetHeight;
        sliderTrack.style.transition = "transform 0.8s ease";
      }

      if (currentIndex <= 0) {
        currentIndex = cards.length - 2;
        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        sliderTrack.offsetHeight;
        sliderTrack.style.transition = "transform 0.8s ease";
      }
    });
  }

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", function(e){
      e.preventDefault();
      const category = this.getAttribute("data-category");
      loadCategoryProducts(category);
    });
  });

  

function showToast() {
  document.getElementById("loginToast").classList.add("show");
  document.getElementById("toastBackdrop").style.display = "block";
}

window.closeToast = function() {
  document.getElementById("loginToast").classList.remove("show");
  document.getElementById("toastBackdrop").style.display = "none";
}


document.getElementById("cancelBtn").addEventListener("click", function() {
  document.getElementById("loginToast").classList.remove("show");
  document.getElementById("toastBackdrop").style.display = "none";
});

function goToLogin() {
  window.location.href = "/Login_Register/login.html";
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const token = localStorage.getItem("token");

    if (!token) {
      showToast();
    } else {
      console.log("User is logged in. Product ID:", e.target.getAttribute("data-product-id"));
    }

    e.stopPropagation();
    return;
  }

  const card = e.target.closest(".view-details");
  if (card) {
    const id = card.getAttribute("data-id");
    window.location.href = `productDetails.html?id=${id}`;
  }
});



});
