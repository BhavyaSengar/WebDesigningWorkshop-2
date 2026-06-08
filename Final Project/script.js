let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById("cartSidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function addToCart(name, price) {
    cart.push({
        name,
        price
    });

    total += price;
    updateCart();
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("cartCount").innerText = cart.length;

    document.getElementById("cartTotal").innerText =
        `Total: ₹${total.toLocaleString()}`;
}

document
    .getElementById("searchInput")
    .addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const products = document.querySelectorAll(".product-card");

        products.forEach(product => {
            const name = product.dataset.name.toLowerCase();

            product.style.display = name.includes(value)
                ? "block"
                : "none";
        });
    });

document
    .querySelector(".checkout-btn")
    .addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Cart is empty!");
            return;
        }

        alert(
            "Order placed successfully!\nTotal Amount: ₹" +
            total.toLocaleString()
        );

        cart = [];
        total = 0;

        updateCart();
        toggleCart();
    });

document
    .querySelector(".contact form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Message Sent Successfully!");
        this.reset();
    });