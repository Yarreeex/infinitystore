document.addEventListener('DOMContentLoaded', function() {
  const cartList = JSON.parse(localStorage.getItem('cartList'));
  const selectedItemsList = document.getElementById('selected-items');
  const totalPriceElement = document.getElementById('total-price');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Display selected items in the payment page
  let totalPrice = 0;
  for (const item of cartList) {
      if (item.checked) {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.item} - IDR ${item.price}K`;
          selectedItemsList.appendChild(listItem);
          totalPrice += item.price;
      }
  }

  // Update total price
  totalPriceElement.textContent = `Total Price: IDR ${totalPrice}K`;

  checkoutBtn.addEventListener('click', function() {
      // Perform checkout or payment process here
      // For this example, we'll just display an alert message
      alert('Payment successful!');
      // Clear the cartList and updateCart in localStorage
      cartList.forEach(item => item.checked = false);
      localStorage.setItem('cartList', JSON.stringify(cartList));
      // Redirect back to cart.html
      window.location.href = '../homepage/valorant/valorant.html';
  });
});

        // Mengambil data cart dari localstorage
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Menampilkan detail item yang dibeli pada form pembayaran
        const orderSummary = document.getElementById('orderSummary');
        let totalPrice = 0;
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} x ${item.quantity} - IDR ${item.price * item.quantity}`;
            orderSummary.appendChild(listItem);

            totalPrice += item.price * item.quantity;
        });

        // Menambahkan total harga ke form pembayaran
        const totalElement = document.createElement('li');
        totalElement.textContent = `Total Price: IDR ${totalPrice}`;
        orderSummary.appendChild(totalElement);

        const paymentForm = document.getElementById('paymentForm');
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const fullName = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const paymentMethod = document.getElementById('paymentMethod').value;
    
            // Perform the form validation here if needed
            if (fullName.trim() === '' || email.trim() === '' || paymentMethod.trim() === '') {
                alert('Please fill in all the required fields before proceeding with the payment.');
                return;
            }

        // Show the "Transaksi Sukses" pop-up
        showTransaksiSuksesPopup();
                // Redirect to "../pilih-game/pilih_game.html" after the pop-up is displayed
                setTimeout(() => {
                    window.location.href = '../pilih-game/pilih_game.html';
                }, 3000); // 3 seconds (adjust as needed)
            

        function showTransaksiSuksesPopup() {
            const popup = document.createElement('div');
            popup.className = 'popup';
    
            const checkmark = document.createElement('div');
            checkmark.className = 'checkmark';
            popup.appendChild(checkmark);
    
            const text = document.createElement('div');
            text.textContent = 'Transaksi Sukses';
            popup.appendChild(text);
    
            const body = document.getElementsByTagName('body')[0];
            body.appendChild(popup);
    
            // Remove the pop-up after a few seconds
            setTimeout(() => {
                body.removeChild(popup);
            }, 3000); // 3 seconds (adjust as needed)
        }
});

function goBack() {
    window.history.back();
}