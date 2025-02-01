// fetch the api

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Data not found");
    }

    const products = await response.json();
    return products;
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const products = await fetchProducts();
  const productContainer = document.querySelector("#featured-products");

  products.forEach((product) => {
    console.log(product);

    const card = displayProduct(product);
    productContainer.appendChild(card);
  });
});

function displayProduct(product) {
  const productCard = document.createElement("div");
  productCard.className = "product";
  productCard.innerHTML = `
        <img src=${product.image} alt=${product.image} />
        <h3 class="product-title"><b>${product.title}</b></h3>
        <p class="product-price">$${product.price}</p>
  `;
  return productCard;
}
