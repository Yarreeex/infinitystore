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

function calculateLevelAndPoint(totalPurchase) {
  const levels = [
    { name: 'Iron', pointThreshold: 0 },
    { name: 'Bronze', pointThreshold: 100 },
    { name: 'Silver', pointThreshold: 300 },
    { name: 'Gold', pointThreshold: 600 },
    { name: 'Platinum', pointThreshold: 1000 },
    { name: 'Diamond', pointThreshold: 1500 },
    { name: 'Ascendant', pointThreshold: 2100 },
    { name: 'Immortal', pointThreshold: 2800 },
    { name: 'Radiant', pointThreshold: 3600 },
  ];

  let level = 'Iron';
  let point = 0;

  for (const lvl of levels) {
    if (totalPurchase >= lvl.pointThreshold) {
      level = lvl.name;
    } else {
      break;
    }
  }

  if (level !== 'Iron') {
    const previousLevelPointThreshold = levels.find((lvl) => lvl.name === level)?.pointThreshold || 0;
    const previousLevelPercentage = (totalPurchase - previousLevelPointThreshold) / (levels.find((lvl) => lvl.name === level)?.pointThreshold || 1);
    point = Math.floor(previousLevelPointThreshold + previousLevelPercentage * 0.05 * (levels.find((lvl) => lvl.name === level)?.pointThreshold || 1));
  }

  return { level, point };
}

// Fungsi untuk meng-update informasi level dan point
function updateLevelAndPoint(totalPurchase) {
  const { level, point } = calculateLevelAndPoint(totalPurchase);
  document.getElementById('display-level').textContent = `Level: ${level}`;
  document.getElementById('display-point').textContent = `Point: ${point}`;
}

// Fungsi untuk menambahkan item ke cart dan meng-update total pembelian
function addToCart(name, price) {
  // ... (kode sebelumnya) ...

  // Menghitung total pembelian dan update level dan point
  const totalPurchase = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  updateLevelAndPoint(totalPurchase);
}

// Fungsi untuk menghapus item dari cart dan meng-update total pembelian
function removeFromCart(index) {
  // ... (kode sebelumnya) ...

  // Menghitung total pembelian dan update level dan point
  const totalPurchase = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  updateLevelAndPoint(totalPurchase);
}


  // Fungsi untuk menambahkan item ke dalam cart
  function addToCart(itemName, itemPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Cek apakah item sudah ada di cart, jika sudah, tambahkan jumlahnya
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      // Jika belum ada, tambahkan item baru ke dalam cart
      cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }

  // Fungsi untuk menampilkan cart pada dropdown
  function updateCartDisplay() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const totalItems = document.querySelector('.total-items');
    const totalPrice = document.querySelector('.total-price');

    // Hapus semua item dari tampilan cart
    cartList.innerHTML = '';

    let total = 0;
    let totalQuantity = 0;

    // Tampilkan item-item di cart
    cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} x ${item.quantity} - IDR ${item.price * item.quantity}`;
      cartList.appendChild(listItem);

      total += item.price * item.quantity;
      totalQuantity += item.quantity;
    });

    // Tampilkan total harga dan jumlah item di cart
    totalItems.textContent = `Total Items: ${totalQuantity}`;
    totalPrice.textContent = `Total Price: IDR ${total}`;
  }

  // Fungsi untuk menghapus semua item dari cart
  function resetCart() {
    localStorage.removeItem('cart');
    updateCartDisplay();
  }

  // Panggil fungsi updateCartDisplay() saat halaman dimuat ulang
  window.onload = updateCartDisplay;

  // Tambahkan event listener untuk tombol "Delete" dan "Checkout"
  document.querySelector('.reset-btn').addEventListener('click', resetCart);
  // Anda dapat menambahkan logika untuk redirect ke halaman pembayaran jika diperlukan
  // document.querySelector('.checkout-btn').addEventListener('click', redirectToCheckout);


  function fillPaymentForm() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const paymentForm = document.getElementById('payment-form');

    // Hapus semua elemen input dari form pembayaran
    paymentForm.innerHTML = '';

    cartItems.forEach(item => {
      // Tambahkan input tersembunyi untuk menyimpan informasi item di form pembayaran
      const itemNameInput = document.createElement('input');
      itemNameInput.type = 'hidden';
      itemNameInput.name = 'item_name[]';
      itemNameInput.value = item.name;
      paymentForm.appendChild(itemNameInput);

      const itemPriceInput = document.createElement('input');
      itemPriceInput.type = 'hidden';
      itemPriceInput.name = 'item_price[]';
      itemPriceInput.value = item.price;
      paymentForm.appendChild(itemPriceInput);

      const itemQuantityInput = document.createElement('input');
      itemQuantityInput.type = 'hidden';
      itemQuantityInput.name = 'item_quantity[]';
      itemQuantityInput.value = item.quantity;
      paymentForm.appendChild(itemQuantityInput);
    });
  }