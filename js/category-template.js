function loadCategorySection(containerId, categoryData, append = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    const wrapper = document.createElement('div');
    wrapper.className = 'row';
    wrapper.innerHTML = `
    <link rel="stylesheet" type="text/css" href="css/main.css" />
      <div class="product-category-item-5">
      <div class="cate-thumbnail">
      <img src="${categoryData.thumbnail}" alt="category thumbnail">
      </div>
      <div class="outter-product-wrapper">
      <h3 class="cate-title">${categoryData.name}</h3>
      <div class="inner-product-wrapper">
      <div class="product-slider">
        ${categoryData.products.map(product => `
        <figure class="item">
        <div class="product product-style-1">
        <div class="img-wrapper">
          <a href="${product.link}">
          <img class="img-responsive" src="${product.image}" alt="product thumbnail">
          </a>
        </div>
        <figcaption class="desc text-center">
          <h3><a class="product-name" href="${product.link}">${product.name}</a></h3>
        </figcaption>
        </div>
        </figure>
        `).join('')}
      </div>
      </div>
      </div>
      </div>
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      .product-slider {
      display: flex;
      gap: 10px;
      animation: scroll-left 20s linear infinite;
      white-space: nowrap;
      overflow: visible; /* Ensure all products are visible */
      }
      .product-slider:hover {
      animation-play-state: paused;
      }
      .item {
      flex: 0 0 auto;
      }
      .inner-product-wrapper {
      overflow: hidden;
      position: relative;
      }
    `;
    document.head.appendChild(style);
  
    // Append or Replace
    if (append) {
      container.appendChild(wrapper);
    } else {
      container.innerHTML = '';
      container.appendChild(wrapper);
    }
  }
  