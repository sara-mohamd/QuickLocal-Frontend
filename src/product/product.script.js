// Function to get query parameters from the URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get('id')
  };
}

// Get the product ID from the URL
const queryParams = getQueryParams();
const productId = queryParams.id;

// Fetch data from JSON or API
fetch("../../JSON/data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const product = data.shopping.find(item => item.productId === productId);
    if (product) {
      displayProductDetails(product);
    } else {
      console.error('Product not found');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Function to display product details
function displayProductDetails(product) {
  const productDetailContainer = document.getElementById('product-detail');

  if (productDetailContainer) {
    productDetailContainer.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p class="source">Source: ${product.source}</p>
      <p class="price">Price: ${product.price}</p>
      <p class="delivery">Delivery: ${product.delivery}</p>
      <p class="rating">Rating: ${product.rating} (${product.ratingCount} reviews)</p>
      ${product.offers ? `<p class="offers">Offers: ${product.offers}</p>` : ''}
    `;
  } else {
    console.error('Element with ID "product-detail" not found.');
  }
}

