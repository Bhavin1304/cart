function displayCart() {
  main.innerHTML = "";
  let total = 0;
  cartList.map((cart, index) => {
    const box = document.createElement("div");
    box.className = "p";

    const img = document.createElement("img");
    img.src = cart.image;

    const title = document.createElement("h4");
    title.textContent = cart.title;

    const price = document.createElement("p");
    price.textContent = "₹" + cart.price;

    const qty = document.createElement("p");
    qty.textContent = "Qty: " + cart.qyt;


    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.addEventListener("click", () => {
      removeFromCart(index)
    })

    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(price);   
    box.appendChild(btn);
    box.appendChild(qty);

    main.appendChild(box);

    total += cart.price * parseInt(cart.qyt);
  });


  const totalDisplay = document.createElement("h1");
  totalDisplay.textContent = "Total : " + total + " /-";
    main.appendChild(totalDisplay);


}


function addToCart(product) {
  const existing = cartList.find(item => item.id === product.id);
  if (existing) {
    existing.qyt = (parseInt(existing.qyt) + 1).toString();
  } else {
    cartList.push({ ...product });
  }
  localStorage.setItem("cart", JSON.stringify(cartList));
  displayCart();
}




function removeFromCart(index) {
  cartList.splice(index, 1); // [1,2], [1]
  localStorage.setItem("cart", JSON.stringify(cartList));
  displayCart(); // display remaing products in cart after deleting
}



displayProducts();
displayCart();