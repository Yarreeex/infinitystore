let cartList = [];

function addToCart(item, price) {
  cartList.push({ item, price, checked: false });
  updateCart();
}
// Mengatur tombol delete dan checkout menjadi awalnya disembunyikan
document.querySelector('.reset-btn').style.display = 'none';
document.querySelector('.checkout-btn').style.display = 'none';

const hrElement = document.querySelector('.cart-footer hr');
hrElement.style.display = 'none';

function updateCart() {
  let cartListHTML = '';
  let cartTotal = 0;
  let cartItems = 0;

  if (cartList.length === 0) {
    document.querySelector('#cart-list').innerHTML = '';
    document.querySelector('.total-items').innerHTML = '';
    document.querySelector('.total-price').innerHTML = '';
    document.querySelector('.badge').innerHTML = '';
    document.querySelector('.reset-btn').style.display = 'none';
    document.querySelector('.checkout-btn').style.display = 'none';
    hrElement.style.display = 'none'; // Sembunyikan garis horizontal jika tidak ada item dalam cart
    return;
  }

  // ...

  // Tampilkan garis horizontal jika ada item dalam cart
  hrElement.style.display = 'block';

  // ...

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
  document.querySelector('.reset-btn').style.display = 'block';
  document.querySelector('.checkout-btn').style.display = 'block';

  if (cartItems > 0) {
    document.querySelector('.cart-footer').style.display = 'block';
    document.querySelector('.total-items').innerHTML = `Total Items: ${cartItems}`;
    document.querySelector('.total-price').innerHTML = `Price: IDR ${cartTotal}K`;
  } else {
    document.querySelector('.cart-footer').style.display = 'none';
  }

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

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);

document.addEventListener('DOMContentLoaded', function() {
  var username = localStorage.getItem('username');
  var displayUsername = document.getElementById('display-username');
  if (username) {
    displayUsername.textContent = username;
  }

  var email = localStorage.getItem('email');
  var displayEmail = document.getElementById('display-email')
  if (email) {
    displayEmail.textContent = email;
  }
});