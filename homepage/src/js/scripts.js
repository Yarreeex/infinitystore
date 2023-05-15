$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 72
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

// Mengaktifkan tombol hamburger
$('.navbar-toggler').click(function () {
    $('.navbar-collapse').toggleClass('show');
});

// Menambahkan efek highlight pada navbar ketika scroll
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

// Mengatur tinggi navbar ketika halaman dimuat
$(window).on('load', function () {
    if ($(window).width() > 992) {
        $('nav.navbar').addClass('navbar-desktop');
    } else {
        $('nav.navbar').addClass('navbar-mobile');
    }
});

// Mengatur tinggi navbar ketika jendela diubah ukurannya
$(window).resize(function () {
    if ($(window).width() > 992) {
        $('nav.navbar').removeClass('navbar-mobile');
        $('nav.navbar').addClass('navbar-desktop');
    } else {
        $('nav.navbar').removeClass('navbar-desktop');
        $('nav.navbar').addClass('navbar-mobile');
    }
});

// Menampilkan jumlah barang di keranjang belanja pada tombol cart
function showCartItemsCount() {
    var itemCount = $('input[type="checkbox"]:checked').length;
    $('.dropdown-toggle').find('.badge').text(itemCount);
}

// Memanggil fungsi showCartItemsCount ketika halaman dimuat
$(document).ready(function () {
    showCartItemsCount();
});

// Memanggil fungsi showCartItemsCount ketika checkbox barang diubah
$('input[type="checkbox"]').change(function () {
    showCartItemsCount();
});

// Menghapus semua barang di keranjang belanja
$('.reset-btn').click(function () {
    $('input[type="checkbox"]').prop('checked', false);
    showCartItemsCount();
});

// Menghitung total harga barang di keranjang belanja
function calculateTotalPrice() {
    var totalPrice = 0;
    $('input[type="checkbox"]:checked').each(function () {
        var priceString = $(this).parent().find('.item-price').text().trim();
        var price = parseInt(priceString.substr(4));
        totalPrice += price;
    });
    $('.harga').text('IDR ' + totalPrice + 'K');
}

// Memanggil fungsi calculateTotalPrice ketika halaman dimuat
$(document).ready(function () {
    calculateTotalPrice();
});

// Memanggil fungsi calculateTotalPrice ketika checkbox barang diubah
$('input[type="checkbox"]').change(function () {
    calculateTotalPrice();
});

// Mengaktifkan tombol Checkout
$('.checkout-btn').click(function () {
    var itemCount = $('input[type="checkbox"]:checked').length;
    if (itemCount == 0) {
        alert('Keranjang belanja masih kosong!');
    } else {
        alert('Terima kasih telah berbelanja di Infinity Gaming Store! Total harga: ' + $('.harga').text());
        $('input[type="checkbox"]').prop('checked', false);
        showCartItemsCount();
        calculateTotalPrice();
    }
});

// Toggle navbar collapse
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

// Toggle cart dropdown
const cartDropdown = document.querySelector('.dropdown');

cartDropdown.addEventListener('click', (event) => {
  if (event.target.id === 'cartDropdown') {
    cartDropdown.classList.toggle('show');
  }
});

// Calculate total price
const itemPrices = document.querySelectorAll('.item-price');
const totalPrice = document.querySelector('.harga');

let total = 0;

itemPrices.forEach((itemPrice) => {
  total += parseInt(itemPrice.textContent.replace(/[^\d]/g, ''));
});

totalPrice.textContent = `IDR ${total}K`;

// Delete cart items
const resetBtn = document.querySelector('.reset-btn');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

resetBtn.addEventListener('click', () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  total = 0;
  totalPrice.textContent = `IDR ${total}K`;
});

// Checkout
const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', () => {
  alert('Thank you for your purchase!');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentElement.parentElement.remove();
    }
  });
  total = 0;
  totalPrice.textContent = `IDR ${total}K`;
});

// membuat variabel untuk mengakses tombol Checkout dan Reset
const checkoutButton = document.querySelector('.checkout-btn');
const resetButton = document.querySelector('.reset-btn');

// membuat variabel untuk mengakses semua item dalam dropdown menu Cart
const cartItems = document.querySelectorAll('.dropdown-menu li');

// membuat variabel untuk mengakses harga dan total pada dropdown menu Cart
const totalPrice = document.querySelector('.harga');
const totalText = document.querySelector('.total');

// membuat event listener ketika tombol Checkout ditekan
checkoutButton.addEventListener('click', () => {
  // membuat variabel untuk menyimpan jumlah total harga item yang tercentang pada dropdown menu Cart
  let total = 0;
  // membuat array untuk menyimpan item yang dipilih
  const selectedItems = [];
  
  // menghitung total harga item yang tercentang dan menyimpan item yang dipilih
  cartItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const itemName = item.querySelector('.item-name').textContent;
    const itemPrice = parseInt(item.querySelector('.item-price').textContent.replace(/IDR |,/g, ''));
    
    if (checkbox.checked) {
      selectedItems.push(itemName);
      total += itemPrice;
    }
  });
  
  // menampilkan pesan pop-up dengan item yang dipilih dan total harga
  if (selectedItems.length > 0) {
    const selectedItemsText = selectedItems.join('\n');
    alert(`You have selected the following items:\n\n${selectedItemsText}\n\nTotal price: IDR ${total}K`);
  } else {
    alert('Please select at least one item.');
  }
});

// membuat event listener ketika tombol Reset ditekan
resetButton.addEventListener('click', () => {
  // menghapus centang pada semua checkbox dan mengatur total harga menjadi 0
  cartItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    checkbox.checked = false;
    totalText.textContent = 'Total';
    totalPrice.textContent = 'IDR 0K';
  });
});

$(document).ready(function() {
    // handle checkbox changes
    $('input[type=checkbox]').change(function() {
      var total = 0;
      $('input[type=checkbox]:checked').each(function() {
        var price = parseFloat($(this).parent().find('.item-price').text().replace('IDR ', '').replace('K', '000'));
        total += price;
      });
      $('.harga').text('IDR ' + total.toString() + 'K');
      var count = $('input[type=checkbox]:checked').length;
      $('.badge').text(count.toString());
    });
    
    // handle reset button
    $('.reset-btn').click(function() {
      $('input[type=checkbox]').prop('checked', false);
      $('.harga').text('IDR 0K');
      $('.badge').text('0');
    });
    
    // handle checkout button
    $('.checkout-btn').click(function() {
      var items = [];
      $('input[type=checkbox]:checked').each(function() {
        var name = $(this).parent().find('.item-name').text();
        var price = parseFloat($(this).parent().find('.item-price').text().replace('IDR ', '').replace('K', '000'));
        items.push({name: name, price: price});
      });
      var total = parseFloat($('.harga').text().replace('IDR ', '').replace('K', '000'));
      // do something with the items and total, e.g. send to server or redirect to payment page
    });
  });
  