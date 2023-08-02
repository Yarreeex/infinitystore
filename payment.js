document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const paymentForm = document.getElementById('payment-form');
  
    if (cartItems.length === 0) {
      paymentForm.innerHTML = '<p>Your cart is empty. Please go back to the store and add some items.</p>';
    } else {
      let totalPrice = 0;
      const paymentDetails = document.createElement('div');
  
      cartItems.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.innerHTML = `
          <p><strong>Item:</strong> ${item.name}</p>
          <p><strong>Price:</strong> IDR ${item.price}</p>
          <p><strong>Quantity:</strong> ${item.quantity}</p>
          <hr>
        `;
        paymentDetails.appendChild(itemRow);
        totalPrice += item.price * item.quantity;
      });
  
      const totalPriceElement = document.createElement('p');
      totalPriceElement.innerHTML = `<strong>Total Price:</strong> IDR ${totalPrice}`;
  
      paymentDetails.appendChild(totalPriceElement);
      paymentForm.appendChild(paymentDetails);
    }
  });
  