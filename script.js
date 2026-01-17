let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("cart-count").innerText = cart.length;
}

function sendWhatsApp() {
  if (cart.length === 0) {
    alert("السلة فاضية");
    return;
  }

  let message = "طلب جديد:%0A";
  cart.forEach(item => {
    message += `- ${item.name} : ${item.price} د.ك%0A`;
  });
  message += `المجموع: ${total} د.ك`;

  window.open(`https://wa.me/96500000000?text=${message}`, "_blank");
}
