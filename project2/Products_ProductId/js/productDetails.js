document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(product => {
      console.log("✅ Product details:", product);

      document.getElementById("product-name").textContent = product.title;

      document.getElementById("product-desc").textContent = product.description;

      document.getElementById("product-details").innerHTML = `
        <strong>Brand:</strong> ${product.brand}<br>
        <strong>Category:</strong> ${product.category}<br>
        <strong>Stock:</strong> ${product.stock}
      `;

      document.getElementById("product-price").textContent = product.price + " EGP";

      document.getElementById("product-img").src = product.thumbnail;

      document.querySelector(".add-to-cart-btn").setAttribute("data-product-id", product.id);
      const colors = ["#ff0000", "#00ff00", "#0000ff"];
      const colorsContainer = document.getElementById("product-colors");
      colors.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.style.width = "20px";
        colorDiv.style.height = "20px";
        colorDiv.style.borderRadius = "50%";
        colorDiv.style.backgroundColor = color;
        colorDiv.style.border = "1px solid #000";
        colorsContainer.appendChild(colorDiv);
      });

      document.getElementById("product-sizes").textContent = "S, M, L, XL";

      const imagesContainer = document.getElementById("product-images");
      product.images.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.style.width = "80px";
        img.style.height = "80px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "5px";
        img.style.cursor = "pointer";
        img.style.marginRight = "8px";

        img.addEventListener("click", () => {
          document.getElementById("product-img").src = imgUrl;
        });

        imagesContainer.appendChild(img);
      });

    })
    .catch(err => console.error("❌ Error fetching product details:", err));


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
  window.location.href = "../LoginAndRegister/login.html";
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
