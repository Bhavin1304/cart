

# 🛒 JavaScript Shopping Cart

![Typing Animation](https://readme-typing-svg.demolab.com?font=Fira+Code\&size=26\&duration=3000\&pause=1000\&color=00C853\&center=true\&vCenter=true\&width=700\&lines=Vanilla+JavaScript+Cart+System;Add+%2F+Remove+Products;LocalStorage+Powered+Cart)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge\&logo=javascript)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-blue?style=for-the-badge\&logo=googlechrome)
![Status](https://img.shields.io/badge/Project-Working-success?style=for-the-badge)

---

## 📌 Overview

This project is a **dynamic shopping cart system** built using **Vanilla JavaScript**.
It allows users to:

* 🛍 View Products
* ➕ Add Products to Cart
* ➖ Remove Products
* 🔢 Increase Quantity Automatically
* 💾 Store Cart Data in LocalStorage
* 🧮 Calculate Total Price

---

## ⚙️ Features

✨ Dynamic product rendering
✨ Add to cart functionality
✨ Auto quantity increment
✨ Delete from cart
✨ Real-time total calculation
✨ Persistent cart using `localStorage`

---

## 🧠 How It Works

### 🛍 `displayProducts()`

* Loops through product array
* Dynamically creates product cards
* Adds "Add to Cart" button

### 🛒 `displayCart()`

* Renders cart items
* Shows quantity
* Calculates total price
* Displays total amount

### ➕ `addToCart(product)`

* Checks if product already exists
* If yes → increases quantity
* If no → adds new product

### ❌ `removeFromCart(index)`

* Removes selected item from cart

### 💾 `updateStorage()`

* Saves cart data in `localStorage`

---

## 📂 Project Structure

```bash
project-folder/
│── index.html
│── script.js
│── style.css
│── products.js
```

---

## 🚀 How to Run

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/js-cart-project.git
```

2️⃣ Open `index.html` in your browser

That’s it 🎉

---

## 🖥 Example Cart Logic

```javascript
const existing = cartList.find(item => item.id === product.id);
if (existing) {
  existing.qty = parseInt(existing.qty || 1) + 1;
} else {
  cartList.push({ ...product, qty: 1 });
}
```

---

## 💡 Future Improvements

* 🧮 Increase / Decrease quantity buttons
* 🗑 Clear Cart button
* 💳 Checkout Page
* 🔔 Cart Count Badge
* 🎨 Better UI Styling

---

## 🛠 Technologies Used

* 🌐 HTML5
* 🎨 CSS3
* ⚡ JavaScript (ES6)
* 💾 LocalStorage API

---

