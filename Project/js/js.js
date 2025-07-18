

document.addEventListener("DOMContentLoaded", function() {
    const allElements = document.querySelectorAll(".box, section, .card");
    
    allElements.forEach(el => {
      el.setAttribute("data-aos", "fade-up");
      el.setAttribute("data-aos-duration", "1200");
      el.setAttribute("data-aos-easing", "ease-in-out");
    });
    
    AOS.init();
});


const products = [
  {
    id: 1,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/bag1.jpeg",
    desc: "White Bag with flowers",
    rating: 5
  },
  {
    id: 2,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/bag2.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },
  {
    id: 3,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/bag3.jpeg",
    desc: "White Bag with flowers",
    rating: 3.5
  },
  {
    id: 4,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/bracelet1.jpeg",
    desc: "pink Bag with flowers",
    rating: 4
  },
  {
    id: 5,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/bracelet2.jpeg",
    desc: "White Bag with flowers",
    rating: 5
  },
  {
    id: 6,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/bracelet3.jpeg",
    desc: "pink Bag with flowers",
    rating: 3
  },
  {
    id: 7,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/bracelet4.jpeg",
    desc: "White Bag with flowers",
    rating: 4.5
  },
  {
    id: 8,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/chain1.jpeg",
    desc: "pink Bag with flowers",
    rating: 2.5
  },
  {
    id: 9,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/chain2.jpeg",
    desc: "pink Bag with flowers",
    rating: 5
  },
  {
    id: 10,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/chain3.jpeg",
    desc: "White Bag with flowers",
    rating: 4.5
  },
  {
    id: 11,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/chain4.jpeg",
    desc: "pink Bag with flowers",
    rating: 4
  },
  {
    id: 12,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/glasses1.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.75
  },
  {
    id: 13,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/glasses2.jpeg",
    desc: "White Bag with flowers",
    rating: 4.25
  },
  {
    id: 14,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/brecelit5.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },
  {
    id: 15,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/klibs1.jpeg",
    desc: "pink Bag with flowers",
    rating: 3.75
  },
  {
    id: 16,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/klibs2.jpeg",
    desc: "pink Bag with flowers",
    rating: 3.5
  },
  {
    id: 17,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/ring1.jpeg",
    desc: "pink Bag with flowers",
    rating: 3
  },
  {
    id: 18,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/ring2.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },
  
  {
    id: 3,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/bag3.jpeg",
    desc: "White Bag with flowers",
    rating: 3.5
  },
  {
    id: 4,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/bracelet1.jpeg",
    desc: "pink Bag with flowers",
    rating: 4
  },
  {
    id: 5,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/bracelet2.jpeg",
    desc: "White Bag with flowers",
    rating: 5
  },
  {
    id: 6,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/bracelet3.jpeg",
    desc: "pink Bag with flowers",
    rating: 3
  },
];


const products2 = [
  {
    id: 19,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/ring3.jpeg",
    desc: "White Bag with flowers",
    rating: 4.5
  },
  {
    id: 20,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/ring4.jpeg",
    desc: "pink Bag with flowers",
    rating: 5
  },
  {
    id:21,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/ring5.jpeg",
    desc: "White Bag with flowers",
    rating: 4
  },
  {
    id:22,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/ring6.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },
  {
    id:23,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/ring7.jpeg",
    desc: "White Bag with flowers",
    rating: 3
  },
  {
    id:24,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/ring8.jpeg",
    desc: "pink Bag with flowers",
    rating: 2
  },
  {
    id:25,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/scarf1.jpeg",
    desc: "White Bag with flowers",
    rating: 5
  },
  {
    id:26,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/chain1.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },
  {
    id:27,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/scarf2.jpeg",
    desc: "pink Bag with flowers",
    rating: 5
  },
  {
    id:28,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/sliber1.jpeg",
    desc: "White Bag with flowers",
    rating: 3
  },
  {
    id:29,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/sliber2.jpeg",
    desc: "pink Bag with flowers",
    rating: 2.5
  },
  {
    id:30,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/toka1.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },
  {
    id:31,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/toka2.jpeg",
    desc: "White Bag with flowers",
    rating: 3.5
  },
  {
    id:32,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/toka3.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.75
  },
  {
    id:33,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/toka4.jpeg",
    desc: "pink Bag with flowers",
    rating: 4
  },{
    id:34,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/toka5.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },{
    id:35,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/toka6.jpeg",
    desc: "pink Bag with flowers",
    rating: 2.5
  },{
    id:36,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/toka7.jpeg",
    desc: "pink Bag with flowers",
    rating: 3
  },{
    id:37,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/watch1.jpeg",
    desc: "pink Bag with flowers",
    rating: 5
  },,{
    id:38,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/watch2.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },,{
    id:39,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/watch3.jpeg",
    desc: "pink Bag with flowers",
    rating: 3.5
  },,{
    id:40,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/watch4.jpeg",
    desc: "pink Bag with flowers",
    rating: 3.25
  },,{
    id:41,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/watch1.jpeg",
    desc: "pink Bag with flowers",
    rating: 2
  },
  
  {
    id:22,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/ring6.jpeg",
    desc: "pink Bag with flowers",
    rating: 4.5
  },
  {
    id:23,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/ring7.jpeg",
    desc: "White Bag with flowers",
    rating: 3
  },
  {
    id:24,
    name: "pink Bag",
    price: "200 EGP",
    img: "../imges/acc/ring8.jpeg",
    desc: "pink Bag with flowers",
    rating: 2
  },
  {
    id:25,
    name: "White Bag",
    price: "120 EGP",
    img: "../imges/acc/scarf1.jpeg",
    desc: "White Bag with flowers",
    rating: 5
  }
];


document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart-btn")) {
      const productId = e.target.getAttribute("data-product-id");
      console.log("Add to cart:", productId);
    }
  });

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


  let currentIndex = 0;
  const productsPerPage = 6;
  function createCardHTML(product) {
    const stars = generateStars(product.rating);
    return `
      <div class="card text-center mx-2">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <p class="card-text fw-bold">${product.name}</p>
          <p class="card-text text-success">${product.price}</p>
          <p class="card-text small">${product.desc}</p>
          <div>${stars}</div>
          <button class="btn btn-primary add-to-cart-btn mt-2" data-product-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
  }

  function initSlider(trackSelector, productsArray) {
    const sliderTrack = document.querySelector(trackSelector);
    sliderTrack.innerHTML = "";

    sliderTrack.innerHTML += createCardHTML(productsArray[productsArray.length - 1]);

    productsArray.forEach(product => {
      sliderTrack.innerHTML += createCardHTML(product);
    });

    sliderTrack.innerHTML += createCardHTML(productsArray[0]);

    const cards = sliderTrack.querySelectorAll('.card');

    setTimeout(() => {
      const cardWidth = cards[0].offsetWidth + 16;
      currentIndex = 1;
      sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
const nextBtn = sliderTrack.closest('.position-relative').querySelector('.next-btn');
const prevBtn = sliderTrack.closest('.position-relative').querySelector('.prev-btn');



      let isTransitioning = false;

      nextBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex++;
        sliderTrack.style.transition = "transform 0.9s ease";
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      });

      prevBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex--;
        sliderTrack.style.transition = "transform 0.9s ease";
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      });

     sliderTrack.addEventListener('transitionend', () => {
  isTransitioning = false;

  if (currentIndex >= cards.length - 1) {
    productsArray.forEach((product, index) => {
    if (index !== 0) {
      sliderTrack.innerHTML += createCardHTML(product);
    }
  });

  cards = sliderTrack.querySelectorAll('.card');
  }

  if (currentIndex <= 0) {
    currentIndex = cards.length - 2; 
    sliderTrack.style.transition = "none";
    sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    sliderTrack.offsetHeight;
    sliderTrack.style.transition = "transform 0.8s ease";
  }
});


    }, 100); 
  }

  initSlider(".slider-track-1", products);
  initSlider(".slider-track-2", products2);

});
