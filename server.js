const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  // ── Shoes ──────────────────────────────────────────────
  { id: 1, name: "Nike Air Max 90", price: 5000, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&fit=crop", category: "Shoes", tag: "New", rating: 4, description: "Iconic Nike cushioning for all-day comfort.", deliveryOptions: [] },
  { id: 2, name: "Adidas Ultraboost 22", price: 6000, img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&fit=crop", category: "Shoes", tag: "Hot", rating: 5, description: "Responsive Boost midsole for endless energy return.", deliveryOptions: [] },
  { id: 3, name: "Puma RS-X", price: 4500, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&fit=crop", category: "Shoes", tag: "Sale", rating: 3, description: "Bold retro running style with chunky sole.", deliveryOptions: [] },
  { id: 4, name: "New Balance 574", price: 4800, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&fit=crop", category: "Shoes", tag: "New", rating: 4, description: "Classic silhouette built for everyday wear.", deliveryOptions: [] },
  { id: 5, name: "Vans Old Skool", price: 3500, img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&fit=crop", category: "Shoes", tag: "Classic", rating: 5, description: "The original skate shoe with side stripe.", deliveryOptions: [] },
  { id: 6, name: "Converse Chuck Taylor All Star", price: 3200, img: "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=400&fit=crop", category: "Shoes", tag: "Classic", rating: 4, description: "Timeless canvas high-top loved by all generations.", deliveryOptions: [] },
  { id: 8, name: "Reebok Classic Leather", price: 3800, img: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=400&fit=crop", category: "Shoes", tag: "Sale", rating: 3, description: "Clean leather upper with soft foam midsole.", deliveryOptions: [] },

  // ── Bags ───────────────────────────────────────────────
  { id: 9, name: "Nike Brasilia Backpack", price: 2200, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&fit=crop", category: "Bags", tag: "New", rating: 4, description: "Durable everyday backpack with multiple compartments.", deliveryOptions: [] },
  { id: 10, name: "Adidas Defender Duffel", price: 2800, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&fit=crop", category: "Bags", tag: "Hot", rating: 4, description: "Spacious gym bag built to take on any workout.", deliveryOptions: [] },
  { id: 11, name: "Leather Tote Bag", price: 3500, img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&fit=crop", category: "Bags", tag: "New", rating: 5, description: "Premium full-grain leather tote for work or weekend.", deliveryOptions: [] },
  { id: 12, name: "Canvas Sling Bag", price: 1200, img: "https://images.unsplash.com/photo-1612521564730-62fc7691cd85?w=400&fit=crop", category: "Bags", tag: "Sale", rating: 3, description: "Lightweight crossbody bag for daily essentials.", deliveryOptions: [] },

  // ── Watches ────────────────────────────────────────────
  { id: 13, name: "Casio G-Shock GA-2100", price: 7500, img: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&fit=crop", category: "Watches", tag: "Hot", rating: 5, description: "Shock-resistant carbon core guard structure.", deliveryOptions: [] },
  { id: 14, name: "Seiko 5 Sports Automatic", price: 12000, img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&fit=crop", category: "Watches", tag: "New", rating: 5, description: "24-jewel automatic movement with day-date display.", deliveryOptions: [] },
  { id: 15, name: "Fossil Gen 6 Smartwatch", price: 15000, img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&fit=crop", category: "Watches", tag: "New", rating: 4, description: "Wear OS smartwatch with health and fitness tracking.", deliveryOptions: [] },
  { id: 16, name: "Timex Weekender", price: 2500, img: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&fit=crop", category: "Watches", tag: "Classic", rating: 4, description: "Simple, clean quartz watch with interchangeable straps.", deliveryOptions: [] },

  // ── Clothing ───────────────────────────────────────────
  { id: 17, name: "Nike Dri-FIT T-Shirt", price: 1200, img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&fit=crop", category: "Clothing", tag: "Hot", rating: 4, description: "Sweat-wicking fabric keeps you dry and comfortable.", deliveryOptions: [] },
  { id: 18, name: "Adidas Track Jacket", price: 3200, img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&fit=crop", category: "Clothing", tag: "New", rating: 4, description: "Iconic three-stripe jacket for the track or the street.", deliveryOptions: [] },
  { id: 19, name: "Levi's 511 Slim Jeans", price: 3800, img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&fit=crop", category: "Clothing", tag: "Classic", rating: 5, description: "Modern slim fit with just the right amount of stretch.", deliveryOptions: [] },
  
  { id: 21, name: "Ray-Ban Wayfarer Sunglasses", price: 8500, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&fit=crop", category: "Accessories", tag: "Classic", rating: 5, description: "Iconic acetate frames with UV400 protection.", deliveryOptions: [] },
  { id: 22, name: "Nike Running Cap", price: 900, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&fit=crop", category: "Accessories", tag: "New", rating: 4, description: "Lightweight Dri-FIT cap with adjustable strap.", deliveryOptions: [] },
  { id: 23, name: "Leather Belt", price: 1500, img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&fit=crop", category: "Accessories", tag: "Sale", rating: 3, description: "Full-grain leather belt with antique brass buckle.", deliveryOptions: [] },
  { id: 24, name: "Wireless Earbuds", price: 4500, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&fit=crop", category: "Accessories", tag: "Hot", rating: 5, description: "True wireless with active noise cancellation and 24hr battery.", deliveryOptions: [] },
];

let cart = [];
let orders = [];
let nextCartId = 1;
let nextOrderId = 1;

// ── PRODUCTS ──────────────────────────────────────────────
app.get('/products', (req, res) => res.json(products));

app.post('/products', (req, res) => {
  const product = { ...req.body, id: Date.now() };
  products.push(product);
  res.json(product);
});

app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  products[index] = { ...req.body, id };
  res.json(products[index]);
});

app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: 'Product deleted' });
});

// ── CART ──────────────────────────────────────────────────
app.get('/cart', (req, res) => res.json(cart));

app.post('/cart', (req, res) => {
  const cartItem = { ...req.body, id: nextCartId++ };
  cart.push(cartItem);
  res.json(cartItem);
});

app.delete('/cart/:id', (req, res) => {
  const id = Number(req.params.id);
  const exists = cart.find(c => c.id === id);
  if (!exists) return res.status(404).json({ message: 'Cart item not found' });
  cart = cart.filter(c => c.id !== id);
  res.json({ message: 'Removed from cart' });
});

// ── ORDERS ────────────────────────────────────────────────
app.get('/orders', (req, res) => res.json(orders));

app.post('/orders', (req, res) => {
  const order = { ...req.body, id: nextOrderId++, status: 'Pending' };
  orders.push(order);
  res.json(order);
});

app.patch('/orders/:id', (req, res) => {
  const id = Number(req.params.id);
  const order = orders.find(o => o.id === id);
  if (!order) return res.status(404).json({ message: 'Order not found' });
  order.status = req.body.status;
  res.json(order);
});

// ─────────────────────────────────────────────────────────
app.listen(3000, () => console.log('Server running on http://localhost:3000'));