let cartList = [];

function addToCart(item, price) {
  cartList.push({ item, price, checked: false });
  updateCart();
}

function updateCart() {
  let cartListHTML = '';
  let cartTotal = 0;
  let cartItems = 0;
  
  for (let i = 0; i < cartList.length; i++) {
    let item = cartList[i];
    let isChecked = '';
    
    if (item.checked) {
      cartTotal += item.price;
      isChecked = 'checked';
    }
    
    cartListHTML += `
      <li>
        <div class="d-flex justify-content-between">
          <div>
            <span>${item.item} - IDR ${item.price}K</span>
          </div>
          <div class="checkbox-kotak">
            <input class="form-check-input remove-item" type="checkbox" value="${i}" ${isChecked}>
          </div>
        </div>
      </li>
    `;
    
    cartItems += 1;
  }
  
  document.querySelector('#cart-list').innerHTML = cartListHTML;
  document.querySelector('.total-items').innerHTML = `Total Items: ${cartItems}`;
  document.querySelector('.total-price').innerHTML = `Price: IDR ${cartTotal}K`;
  document.querySelector('.badge').innerHTML = cartItems;
}

document.querySelector('#cart-list').addEventListener('change', function(event) {
  if (event.target.classList.contains('remove-item')) {
    const itemIndex = parseInt(event.target.value);
    cartList[itemIndex].checked = event.target.checked;
    updateCart();
  }
});

document.querySelector('.reset-btn').addEventListener('click', function(event) {
  cartList = cartList.filter(function(item) {
    return !item.checked;
  });
  updateCart();
});
