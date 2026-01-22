// Product database (all game info)
const products = {
  "1": {
    id: "1",
    name: "God Of War 2",
    price: 19.99,
    image: "/src/assets/God_of_War_(2005)_cover.png",
    category: "Action",
  },
  "2": {
    id: "2",
    name: "Mario Kart World",
    price: 49.99,
    image: "/src/assets/mario-card.png",
    category: "Racing",
  },
  "3": {
    id: "3",
    name: "Need for Speed",
    price: 29.99,
    image: "/src/assets/NFS-UnderCover-Card.png",
    category: "Racing",
  },
  "4": {
    id: "4",
    name: "Call of Duty: Black Ops 6",
    price: 59.99,
    image: "/src/assets/COD-card.png",
    category: "Shooter",
  },
};
// Should show console.log(products["1"]); God of War data

function getCart() {
  const cartData = localStorage.getItem("cart");

  if (cartData) {
    return JSON.parse(cartData);
  } else {
    return {};
  }
}

function addToCart(productId) {
  const cart = getCart();

  if (cart[productId]) {
    cart[productId].quantity += 1;
  } else {
    cart[productId] = {
      productId: productId,
      quantity: 1,
    };
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

if (document.querySelector("[data-game-id]")) {
  const addToCartButtons = document.querySelectorAll("[data-add-to-cart]");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-game-id]");
      const productId = card.dataset.gameId;
      console.log(productId);
      addToCart(productId);
      window.location.href = "cart.html";
    });
  });
}

function displayCart() {
  const cart = getCart();

  const cartItemsContainer = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");

  if (Object.keys(cart).length === 0) {
    emptyCartMessage.classList.remove("hidden");  // Fix typo
    cartItemsContainer.innerHTML = "";  // Fix typo
    return;
  }

  emptyCartMessage.classList.add("hidden");
  cartItemsContainer.innerHTML = "";  // Fix capitalization

  for (const productId in cart) {
    const cartItem = cart[productId];
    const product = products[productId];  // ADD THIS LINE

    const itemHTML = `
    <div class="flex gap-4 bg-white p-4 rounded-lg shadow">
        <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded">
        <div class="flex-1">
            <h3 class="text-xl font-bold">${product.name}</h3>
            <p class="text-gray-600">${product.category}</p>
            <p class="text-green-600 font-bold">$${product.price}</p>
        </div>
        <div class="flex items-center gap-2">
            <span>Quantity: ${cartItem.quantity}</span>
        </div>
    </div>
    `;
    
    cartItemsContainer.innerHTML += itemHTML;  // Change = to +=
  }
}

if (document.getElementById('cart-items')) {
    displayCart();
}