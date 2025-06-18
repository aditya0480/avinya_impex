function loadCategorySection(containerId, categoryData, append = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    const wrapper = document.createElement('div');
    wrapper.className = 'row';
    wrapper.innerHTML = `
      
      <div class="product-category-item-5">
        <div class="cate-thumbnail">
          <img src="${categoryData.thumbnail}" alt="category thumbnail">
        </div>
        <div class="outter-product-wrapper">
          <h3 class="cate-title">${categoryData.name}</h3>
          <div class="inner-product-wrapper">
            ${categoryData.products.map(product => `
              <figure class="item">
                <div class="product product-style-1">
                  <div class="img-wrapper">
                    <a href="${product.link}">
                      <img class="img-responsive" src="${product.image}" alt="product thumbnail">
                    </a>
                    <div class="product-control-wrapper bottom-right">
                      <div class="wrapper-control-item">
                        <a class="js-quick-view" href="#" type="button" data-toggle="modal" data-target="#quick-view-product">
                          <span class="lnr lnr-eye"></span>
                        </a>
                      </div>
                      <div class="wrapper-control-item item-wish-list">
                        <a class="js-wish-list js-notify-add-wish-list" href="#">
                          <span class="lnr lnr-heart"></span>
                        </a>
                      </div>
                      <div class="wrapper-control-item item-add-cart js-action-add-cart">
                        <a class="animate-icon-cart" href="#">
                          <span class="lnr lnr-cart"></span>
                        </a>
                        <svg x="0px" y="0px" width="36px" height="32px" viewBox="0 0 36 32">
                          <path stroke-dasharray="19.79 19.79" fill="none" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"></path>
                        </svg>
                      </div>
                    </div>
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
    `;
  
    // Append or Replace
    if (append) {
      container.appendChild(wrapper);
    } else {
      container.innerHTML = '';
      container.appendChild(wrapper);
    }
  }
  