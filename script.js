
let cartCount = 0;

const cartDisplay = document.querySelector("#cart-count");
const buttons = document.querySelectorAll(".addcart");

function handleClick(event) {
  cartCount++;
  
  cartDisplay.textContent = cartCount;
  
  event.target.textContent = "Added TO CART!";
  
  setTimeout(function() {
    event.target.textContent = "Purchase";
  },9000);
}

for (let button of buttons) {
  button.addEventListener("click", handleClick);
}