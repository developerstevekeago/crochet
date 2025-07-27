// Sample product data
const products = [
  {
    id: 1,
    name: "Full woven jacket",
    price: 1000,
    oldPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1679847628912-4c3e7402abc7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JvY2hldCUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "Made from 100% organic cotton, this t-shirt is soft, breathable, and perfect for everyday wear. Available in multiple colors.",
    sizes: ["S", "M", "L", "XL"],
    discount: true,
  },
  {
    id: 2,
    name: "multi-wooven hat",
    price: 400,
    oldPrice: 99.99,
    image:
      "https://plus.unsplash.com/premium_photo-1725914369106-d4f4b3ca90cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNyb2NoZXQlMjBjbG90aGVzfGVufDB8fDB8fHww",
    description:
      "Eco-friendly denim jeans made with recycled materials. Comfortable fit with a modern style.",
    sizes: ["28", "30", "32", "34", "36"],
    discount: true,
  },
  {
    id: 3,
    name: "Wooven shirt",
    price: 2000,
    oldPrice: 69.99,
    image:
      "https://i.pinimg.com/736x/6a/29/82/6a2982d85c173890ba67dbf6cea976c4.jpg",
    description:
      "Soft and warm hoodie made from bamboo fibers. Perfect for cool evenings and casual outings.",
    sizes: ["S", "M", "L", "XL"],
    discount: false,
  },
  {
    id: 4,
    name: "Wooven bra",
    price: 89.99,
    oldPrice: 109.99,
    image:
      "https://i.pinimg.com/1200x/94/dc/df/94dcdf49a8cdefb9d56ddc63806d19d6.jpg",
    description:
      "Water-resistant jacket made from recycled polyester. Lightweight yet durable for outdoor activities.",
    sizes: ["S", "M", "L", "XL"],
    discount: true,
  },
  {
    id: 5,
    name: "Scarf",
    price: 600,
    oldPrice: 34.99,
    image:
      "https://i.pinimg.com/736x/a4/fd/0a/a4fd0aa061837544bfd41af955aa3da6.jpg",
    description:
      "Stylish and sturdy tote bag made from hemp canvas. Perfect for shopping or everyday use.",
    sizes: ["One Size"],
    discount: false,
  },
  {
    id: 6,
    name: "Beanie ",
    price: 400,
    oldPrice: 59.99,
    image:
      "https://i.pinimg.com/736x/6f/3e/9d/6f3e9dede6db42e8f025cf434f5db722.jpg",
    description:
      "Lightweight linen shirt for warm weather. Naturally breathable and comfortable.",
    sizes: ["S", "M", "L", "XL"],
    discount: true,
  },
  {
    id: 7,
    name: "Sweater",
    price: 1000,
    oldPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JvY2hldCUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
    description:
      "Comfortable sneakers made from recycled and plant-based materials. Great for everyday wear.",
    sizes: ["7", "8", "9", "10", "11"],
    discount: true,
  },
  {
    id: 8,
    name: "Bra",
    price: 600,
    oldPrice: 89.99,
    image:
      "https://i.pinimg.com/736x/c5/bc/44/c5bc443151784301d9161b02d37c8982.jpg",
    description:
      "Warm and cozy sweater made from ethically sourced wool. Perfect for winter months.",
    sizes: ["S", "M", "L", "XL"],
    discount: false,
  },
];

// DOM Elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("themeToggle");
const cartIcon = document.getElementById("cartIcon");
const cartCount = document.querySelector(".cart-count");
const discountProductsContainer = document.getElementById("discountProducts");
const productsContainer = document.getElementById("productsContainer");
const productModal = document.getElementById("productModal");
const closeProductModal = document.getElementById("closeProductModal");
const productModalContent = document.getElementById("productModalContent");
const cartModal = document.getElementById("cartModal");
const closeCartModal = document.getElementById("closeCartModal");
const cartItems = document.getElementById("cartItems");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const continueShopping = document.getElementById("continueShopping");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutModal = document.getElementById("closeCheckoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const orderSummaryItems = document.getElementById("orderSummaryItems");
const orderSummaryTotal = document.getElementById("orderSummaryTotal");
const searchInput = document.querySelector(".search-input");

// Cart state
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Initialize the app
function init() {
  renderProducts();
  renderDiscountProducts();
  updateCartCount();
  setupEventListeners();
}

// Render all products
function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

// Render discount products
function renderDiscountProducts() {
  discountProductsContainer.innerHTML = "";
  const discountProducts = products.filter((product) => product.discount);
  discountProducts.forEach((product) => {
    const productCard = createProductCard(product);
    discountProductsContainer.appendChild(productCard);
  });
}

// Create product card HTML
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";
  productCard.innerHTML = `
                <img src="${product.image}" alt="${
    product.name
  }" class="product-img" data-id="${product.id}">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        Ksh ${product.price.toFixed(2)}
                        ${
                          product.oldPrice
                            ? `<span>$${product.oldPrice.toFixed(2)}</span>`
                            : ""
                        }
                    </div>
                    <button class="add-to-cart" data-id="${
                      product.id
                    }">Add to Cart</button>
                </div>
            `;
  return productCard;
}

// Setup event listeners
function setupEventListeners() {
  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Check for saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Product image click (open modal)
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("product-img")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      openProductModal(productId);
    }

    // Add to cart button click
    if (e.target.classList.contains("add-to-cart")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      addToCart(productId);
    }

    // Size selection in product modal
    if (e.target.classList.contains("size-option")) {
      const options = document.querySelectorAll(".size-option");
      options.forEach((option) => option.classList.remove("selected"));
      e.target.classList.add("selected");
    }
  });

  // Cart icon click
  cartIcon.addEventListener("click", openCartModal);

  // Close modals
  closeProductModal.addEventListener("click", () =>
    productModal.classList.remove("open")
  );
  closeCartModal.addEventListener("click", () =>
    cartModal.classList.remove("open")
  );
  closeCheckoutModal.addEventListener("click", () =>
    checkoutModal.classList.remove("open")
  );
  continueShopping.addEventListener("click", () =>
    cartModal.classList.remove("open")
  );

  // Checkout button
  checkoutBtn.addEventListener("click", openCheckoutModal);

  // Form submission
  checkoutForm.addEventListener("submit", handleFormSubmission);

  // Search functionality
  searchInput.addEventListener("input", handleSearch);
}

// Toggle dark/light theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Open product modal
function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  productModalContent.innerHTML = `
                <div class="product-modal-img-container">
                    <img src="${product.image}" alt="${
    product.name
  }" class="product-modal-img">
                </div>
                <div class="product-modal-info">
                    <h2 class="product-modal-name">${product.name}</h2>
                    <div class="product-modal-price">
                        $${product.price.toFixed(2)}
                        ${
                          product.oldPrice
                            ? `<span>$${product.oldPrice.toFixed(2)}</span>`
                            : ""
                        }
                    </div>
                    <p class="product-modal-desc">${product.description}</p>
                    
                    ${
                      product.sizes.length > 1
                        ? `
                    <div class="product-modal-sizes">
                        <h4>Size</h4>
                        <div class="size-options">
                            ${product.sizes
                              .map(
                                (size) =>
                                  `<div class="size-option">${size}</div>`
                              )
                              .join("")}
                        </div>
                    </div>
                    `
                        : ""
                    }
                    
                    <button class="btn add-to-cart" data-id="${
                      product.id
                    }" style="margin-top: 20px;">Add to Cart</button>
                </div>
            `;

  productModal.classList.add("open");
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  updateCart();
  showAddToCartFeedback();
}

// Show feedback when item is added to cart
function showAddToCartFeedback() {
  const feedback = document.createElement("div");
  feedback.textContent = "Item added to cart!";
  feedback.style.position = "fixed";
  feedback.style.bottom = "20px";
  feedback.style.left = "50%";
  feedback.style.transform = "translateX(-50%)";
  feedback.style.backgroundColor = "var(--green-9)";
  feedback.style.color = "white";
  feedback.style.padding = "10px 20px";
  feedback.style.borderRadius = "var(--border-radius)";
  feedback.style.boxShadow = "var(--box-shadow)";
  feedback.style.zIndex = "1000";
  feedback.style.transition = "var(--transition)";

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.style.opacity = "0";
    feedback.style.transform = "translateX(-50%) translateY(20px)";
    setTimeout(() => feedback.remove(), 300);
  }, 2000);
}

// Update cart state and UI
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  if (cartModal.classList.contains("open")) {
    renderCartItems();
  }
}

// Update cart count in header
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Open cart modal
function openCartModal() {
  renderCartItems();
  cartModal.classList.add("open");
}

// Render cart items
function renderCartItems() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
    cartTotalPrice.textContent = " Ksh 0.00";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
                    <img src="${item.image}" alt="${
      item.name
    }" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <div class="cart-item-price">$${item.price.toFixed(
                          2
                        )}</div>
                        <div class="remove-item" data-id="${
                          item.id
                        }">Remove</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${
                          item.id
                        }">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${
                          item.id
                        }">+</button>
                    </div>
                `;

    cartItems.appendChild(cartItem);
  });

  cartTotalPrice.textContent = `$${total.toFixed(2)}`;

  // Add event listeners for quantity buttons and remove
  document.querySelectorAll(".decrease").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      updateQuantity(id, -1);
    });
  });

  document.querySelectorAll(".increase").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      updateQuantity(id, 1);
    });
  });

  document.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      removeFromCart(id);
    });
  });
}

// Update item quantity in cart
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  }

  updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Open checkout modal
function openCheckoutModal() {
  if (cart.length === 0) return;

  renderOrderSummary();
  checkoutModal.classList.add("open");
  cartModal.classList.remove("open");
}

// Render order summary
function renderOrderSummary() {
  orderSummaryItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemElement = document.createElement("div");
    itemElement.className = "order-summary-item";
    itemElement.innerHTML = `
                    <span>${item.name} (x${item.quantity})</span>
                    <span>$${itemTotal.toFixed(2)}</span>
                `;

    orderSummaryItems.appendChild(itemElement);
  });

  orderSummaryTotal.textContent = `$${total.toFixed(2)}`;
}

// Handle form submission
function handleFormSubmission(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const notes = document.getElementById("notes").value;

  // In a real app, you would send this data to your backend or Formspree/EmailJS
  console.log("Order submitted:", {
    customer: { name, email, address, phone, notes },
    items: cart,
    total: orderSummaryTotal.textContent,
  });

  // Show confirmation
  alert(
    "Thank you for your order! A confirmation has been sent to your email."
  );

  // Reset cart and close modals
  cart = [];
  updateCart();
  checkoutModal.classList.remove("open");
  checkoutForm.reset();
}

// Handle search
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === "") {
    renderProducts();
    renderDiscountProducts();
    return;
  }

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  // Render filtered products
  productsContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });

  // Filter discount products
  const filteredDiscountProducts = products.filter(
    (product) =>
      product.discount && product.name.toLowerCase().includes(searchTerm)
  );

  discountProductsContainer.innerHTML = "";
  filteredDiscountProducts.forEach((product) => {
    const productCard = createProductCard(product);
    discountProductsContainer.appendChild(productCard);
  });
}

// Initialize the app
init();
