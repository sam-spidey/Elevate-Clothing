import { productsList } from "./products.js";

const products = document.querySelectorAll(".product");
const productViewPage = document.getElementById("product-view-page");
const productViewPageNextbtn = document.getElementById(
  "productViewPageNextbtn"
);
const productViewPagePrevbtn = document.getElementById(
  "productViewPagePrevbtn"
);

const productViewPageCloseBtn = document.querySelector(
  ".product-view-page .close-btn"
);
const cartIcon = document.getElementById("cart-icon");
const cartPopup = document.getElementById("cart-popup");
const cartIconContainer = document.getElementById("cartIconContainer");

document.addEventListener("click", (event) => {
  if (
    !cartPopup.contains(event.target) &&
    !cartIconContainer.contains(event.target)
  ) {
    cartPopup.classList.remove("shown");
  }
});

cartIcon.addEventListener("click", () => {
  cartPopup.classList.toggle("shown");
});

productViewPageCloseBtn.addEventListener("click", () => {
  productViewPage.classList.remove("shown");
});

products.forEach((product, i) => {
  product.addEventListener("click", () => {
    productViewPage.classList.toggle("shown");
    let productViewPageImage = document.getElementById(
      "product-image-container"
    );

    let image;

    if (i < 6) {
      image = productsList[i].frontImage;
    } else {
      image = productsList[i].image;
    }

    productViewPageImage.innerHTML = `<img
                  class="product-image"
                  src="${image}"
                  alt="Product Image"
                />`;

    if (i >= 6) {
      productViewPageNextbtn.style.display = "none";
      productViewPagePrevbtn.style.display = "none";
    } else {
      productViewPageNextbtn.style.display = "inline-block";
      productViewPagePrevbtn.style.display = "inline-block";
    }

    productViewPageNextbtn.addEventListener("click", () => {
      if (i < 6) {
        productViewPageImage.innerHTML = `<img
                  class="product-image"
                  src="${productsList[i].backImage}"
                  alt="Product Image"
                />`;
      }
    });

    productViewPagePrevbtn.addEventListener("click", () => {
      if (i < 6) {
        productViewPageImage.innerHTML = `<img
                  class="product-image"
                  src="${productsList[i].frontImage}"
                  alt="Product Image"
                />`;
      }
    });
  });
});
