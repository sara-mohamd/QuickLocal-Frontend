// fetch categories from an endpoints and display it

document.addEventListener("DOMContentLoaded", function () {
  fetch('./category.html')  // Replace with your actual endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const categoriesContainer = document.querySelector('.categories');
      data.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.innerHTML = `
          <a href="category.html?id=${category.id}">
            <img src="${category.image}" alt="${category.name}">
            <h2>${category.name}</h2>
            <p>${category.description}</p>
          </a>
        `;
        categoriesContainer.appendChild(categoryElement);
      });
    })
    .catch(error => console.error('Error fetching categories:', error));
});
