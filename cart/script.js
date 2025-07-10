const products = [
  {
    "id": 1,
    "title": "Camp shirt ",
    "price": "RS.500.95 /-",
    "description": "a loose, straight-cut, short sleeved shirt or blouse with a simple placket front-opening and a camp collar. Dinner shirt – a shirt specifically made to be worn with male evening wear, e.g. a black tie or white tie.",
    "category": "men's clothing",
    "image": "images/s1.jfif",
    "qty": 1,

  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": "RS.800.99 /-",
    "description": "Men's shirts encompass a wide variety of styles, from casual tees to formal dress shirts, each with its own unique characteristics and uses. Key features include collar type, sleeve length, fabric, fit, and details like buttons or closures. Understanding these variations allows for selecting the right shirt for any occasion. ",
    "category": "men's clothing",
    "image": "images/s2.jfif",
    "qty": 1,
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Shirt",
    "price": "RS.600.99 /-",
    "description": "In British English, a shirt is more specifically a garment with a collar, sleeves with cuffs, and a full vertical opening with buttons or snaps (North Americans would call that a dress shirt, a specific type of collared shirt). A shirt can also be worn with a necktie under the shirt collar.",
    "category": "men's clothing",
    "image": "images/s3.jfif",
    "qty": 1,
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": "RS.1000.99 /-",
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "images/s4.jfif",
    "qty": 1,
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "Levi's Men's Straight Fit Cargo Trousers",
    "price": "RS.1500.99 /-",
    "description": "a piece of clothing covering the lower part of the body from the waist to the foot, and including separate sections, joined at the top, for each leg: I need a new pair of gray pants to go with this jacket. Br Pants are underpants. A pants/pant leg is either of the separate sections covering a leg in a pair of pants.",
    "category": "men's clothing",
    "image": "images/p1.avif",
    "qty": 1,
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "EMPORIO ARMANI Logo Detailing Loose Fit Jeans For Men ",
    "price": "RS.1800.99 /-",
    "description": "a piece of clothing covering the lower part of the body from the waist to the foot, and including separate sections, joined at the top, for each leg: I need a new pair of gray pants to go with this jacket. Br Pants are underpants. A pants/pant leg is either of the separate sections covering a leg in a pair of pants.",
    "category": "men's clothing",
    "image": "images/p2.avif",
    "qty": 1,
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "Diesel Men's Slim Jeans",
    "price": "RS.1200.99 /-",
    "description": "a piece of clothing covering the lower part of the body from the waist to the foot, and including separate sections, joined at the top, for each leg: I need a new pair of gray pants to go with this jacket. Br Pants are underpants. A pants/pant leg is either of the separate sections covering a leg in a pair of pants.",
    "category": "men's clothing",
    "image": "images/p5.avif",
    "qty": 1,
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Studio NEXX Men's Mid-Rise Heavy Fade Baggy Jeans",
    "price": "RS.1400.99 /-",
    "description": "a piece of clothing covering the lower part of the body from the waist to the foot, and including separate sections, joined at the top, for each leg: I need a new pair of gray pants to go with this jacket. Br Pants are underpants. A pants/pant leg is either of the separate sections covering a leg in a pair of pants.",
    "category": "men's clothing",
    "image": "images/p4.avif",
    "qty": 1,
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "Titan watch for man ",
    "price": "RS.9000.99 /-",
    "description": "A watch is a portable timepiece, typically worn on the wrist or carried in a pocket, that displays the current time. Watches come in various forms, including wristwatches, pocket watches, and even smartwatches that offer additional functionalities beyond timekeeping. ",
    "category": "Men's watch",
    "image": "images/tw1.avif",
    "qty": 1,
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "Rolex",
    "price": "RS.15000.99 /-",
    "description": "A watch is a portable timepiece, typically worn on the wrist or carried in a pocket, that displays the current time. Watches come in various forms, including wristwatches, pocket watches, and even smartwatches that offer additional functionalities beyond timekeeping. ",
    "category": "Men's watch",
    "image": "images/rw2.avif",
    "qty": 1,
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Rado",
    "price": "RS.12000.99 /-",
    "description": "A watch is a portable timepiece, typically worn on the wrist or carried in a pocket, that displays the current time. Watches come in various forms, including wristwatches, pocket watches, and even smartwatches that offer additional functionalities beyond timekeeping.",
    "category": "Men's watch",
    "image": "images/ew4.avif",
    "qty": 1,
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "Fossil",
    "price": "RS.8000.99 /-",
    "description": "A watch is a portable timepiece, typically worn on the wrist or carried in a pocket, that displays the current time. Watches come in various forms, including wristwatches, pocket watches, and even smartwatches that offer additional functionalities beyond timekeeping.",
    "category": "electronics",
    "image": "images/fw4.avif",
    "qty": 1,
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Nike Men's Air Force 1'07 Shoes",
    "price": "RS.5500.99 /-",
    "description": "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items.",
    "category": "Men's shoes",
    "image": "images/nk1.avif",
    "qty": 1,
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "NEW BALANCE ",
    "price": "RS.5000.99 /-",
    "description": "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items.",
    "category": "Men's shoes",
    "image": "images/nb2.avif",
    "qty": 1,
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "Samba OG Shoes(adidas)",
    "price": "RS.7000.99 /-",
    "description": "Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.",
    "category": "Men's shoes",
    "image": "images/ad3.avif",
    "qty": 1,
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "id": 16,
    "title": "GEOX (Men's U Terence D Black Chelsea Boots)",
    "price": "RS.10000.99 /-",
    "description": "Embrace modern flair with the Terence Chelsea boots, designed to deliver both comfort and breathability. Inspired by the timeless appeal of the Chelsea boot, these boots offer a seamless blend of versatility and style. The printed leather construction adds an authentic touch to their impeccable aesthetic, making them an ideal choice for enhancing a range of looks.",
    "category": "Men's shoes",
    "image": "images/cs4.avif",
    "qty": 1,
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "adidas men's sweat tshirt",
    "price": "RS.1000.99 /-",
    "description": "T-shirts are typically made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth. Some modern versions have a body made from a continuously knitted tube, produced on a circular knitting machine, such that the torso has no side seams.",
    "category": "Men's clothing",
    "image": "images/adt1.avif",
    "qty": 1,
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "id": 18,
    "title": "NIKE men's sweat tshirt ",
    "price": "RS.2500.99 /-",
    "description": "T-shirts are typically made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth. Some modern versions have a body made from a continuously knitted tube, produced on a circular knitting machine, such that the torso has no side seams.",
    "category": "Men's clothing",
    "image": "images/nkt2.jfif",
    "qty": 1,
    "rating": {
      "rate": 4.7,
      "count": 130
    }

  },
  {
    "id": 19,
    "title": "UNDER ARMOUR TSHIRT",
    "price": "RS.1500.99 /-",
    "description": "T-shirts are typically made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth. Some modern versions have a body made from a continuously knitted tube, produced on a circular knitting machine, such that the torso has no side seams.",
    "category": "Mes's clothing",
    "image": "images/umt3.jfif",
    "qty": 1,
    "rating": {
      "rate": 4.5,
      "count": 146
    }

  },
  {
    "id": 20,
    "title": "GUCCI men's sweat tshirt",
    "price": "RS.3000.99 /-",
    "description": "T-shirts are typically made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth. Some modern versions have a body made from a continuously knitted tube, produced on a circular knitting machine, such that the torso has no side seams.",
    "category": "Mes's clothing",
    "image": "images/ct4.jfif",
    "qty": 1,
    "rating": {
      "rate": 3.6,
      "count": 145

    }

  }

];



// <div class="product-box">
//   <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="LD01 Chair">
//   <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
//   <h5>109.95,</h5>
//   <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
//   <button>Add To Cart</button>
// </div>

// const main = document.querySelector(".product-list")
const pro = document.querySelector(".products");
const sub = document.querySelector(".cart");
let cartList = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  pro.innerHTML = ""; // clear previous display
  products.map((product, idx) => {
    const box = document.createElement("div");
    box.className = "product";

    const img = document.createElement("img");
    img.src = product.image;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const price = document.createElement("h2");
    price.textContent = product.price;

    const dis = document.createElement("p");
    dis.textContent = product.description;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.addEventListener("click", () => addToCart(product));

    box.append(img, title, price, dis, button);
    pro.appendChild(box);
  });
}

function displayCart() {
  sub.innerHTML = ""; // clear previous cart view
  let total = 0;

  cartList.map((item, idx) => {
    const cartDiv = document.createElement("div");
    cartDiv.className = "cart-item";

    const img = document.createElement("img");
    img.src = item.image;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const price = document.createElement("h2");
    price.textContent = item.price;

    const qty = document.createElement("p");
    qty.textContent = `Qty: ${item.qty || 1}`;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => removeFromCart(idx));

    cartDiv.append(img, title, price, qty, button);
    sub.appendChild(cartDiv);

    total += parseFloat(item.price) * item.qty;
      });

      const totalDisplay = document.createElement("h1");
      totalDisplay.textContent =  "Total : " + total + " /-"
      sub.appendChild(totalDisplay);

}

function addToCart(product) {
  const existing = cartList.find(item => item.id === product.id);
  if (existing) {
    existing.qty = parseInt(existing.qty || 1) + 1;
  } else {
    cartList.push({ ... product, qty: 1 });
  }
  updateStorage();
  displayCart();
}

function removeFromCart(index) {
  cartList.splice(index, 1);
  updateStorage();
  displayCart();
}

function updateStorage() {
  localStorage.setItem("cart", JSON.stringify(cartList));
}



displayProducts();
displayCart();













