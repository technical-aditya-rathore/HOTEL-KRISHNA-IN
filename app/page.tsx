"use client";

import React, { useState } from "react";

type MenuItem = {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  vegetarian?: boolean;
};

const menuItems: MenuItem[] = [
  { name: "Royal Paneer Thali", description: "Paneer curry, dal, rice, 2 rotis, salad and sweet", price: 249, category: "Thalis", vegetarian: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85" },
  { name: "Masala Dosa", description: "Crisp dosa with potato masala, sambar and chutneys", price: 139, category: "South Indian", vegetarian: true, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85" },
  { name: "Butter Chicken", description: "Tandoori chicken in a rich, creamy tomato gravy", price: 329, category: "Main Course", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85" },
  { name: "Dal Makhani", description: "Slow-cooked black lentils finished with butter and cream", price: 189, category: "Main Course", vegetarian: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85" },
  { name: "Tandoori Platter", description: "Smoky chicken tikka, seekh kebab and mint chutney", price: 379, category: "Starters", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85" },
  { name: "Gulab Jamun", description: "Warm soft dumplings soaked in saffron sugar syrup", price: 99, category: "Desserts", vegetarian: true, image: "https://images.unsplash.com/photo-1666190094762-5c5c4e3e8b2c?auto=format&fit=crop&w=900&q=85" },
];

const categories = ["All", "Thalis", "Starters", "Main Course", "South Indian", "Desserts"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const filteredItems = activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory);
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  const addToCart = (item: MenuItem) => setCart((currentCart) => [...currentCart, item]);

  return (
    <div className="hotel-site min-h-screen bg-[#fbf8f2] text-[#241c16]">
      <div className="top-strip">OPEN TODAY 11:00 AM - 11:00 PM <span>•</span> PURE VEGETARIAN OPTIONS AVAILABLE</div>
      <header className="site-header">
        <a href="#home" className="brand-mark"><span className="brand-icon">HK</span><span><strong>HOTEL KRISHNA IN</strong><small>Family Restaurant &amp; Banquet</small></span></a>
        <nav className="desktop-nav"><a href="/menu">Menu</a><a href="/about">Our story</a><a href="/contact">Contact</a><a href="/admin">Owner login</a></nav>
        <a href="/menu" className="header-order">Order online <span>→</span></a>
      </header>

      <main>
        <section id="home" className="restaurant-hero">
          <div className="hero-copy"><p className="eyebrow">A taste of home, served with heart</p><h1>Good food.<br /><em>Good times.</em><br />Great memories.</h1><p className="hero-text">From our family kitchen to your table, enjoy honest Indian flavours, warm hospitality and a meal worth coming back for.</p><div className="hero-actions"><a href="#menu" className="primary-button">Explore our menu <span>↗</span></a><a href="#about" className="text-link">Discover Hotel Krishna <span>→</span></a></div></div>
          <div className="hero-visual"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=90" onError={(event) => { event.currentTarget.src = "/food-fallback.svg"; }} alt="Warmly lit dining room at Hotel Krishna" /><div className="hero-badge"><strong>15+</strong><span>years of<br />serving love</span></div></div>
        </section>

        <section className="promise-row"><div><span className="promise-icon">✦</span><strong>Fresh ingredients</strong><small>Picked daily, cooked fresh</small></div><div><span className="promise-icon">⌁</span><strong>Family recipes</strong><small>Flavours passed down</small></div><div><span className="promise-icon">♡</span><strong>Made with care</strong><small>Every plate, every time</small></div></section>

        <section id="menu" className="menu-section section-wrap"><div className="section-heading"><div><p className="eyebrow">From our kitchen</p><h2>Something for<br /><em>every craving.</em></h2></div><p>Indian classics, family favourites and a few delicious surprises. Everything is made to order, just for you.</p></div><div className="category-tabs">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={activeCategory === category ? "active" : ""}>{category}</button>)}</div><div className="food-grid">{filteredItems.map((item) => <article className="food-card" key={item.name}><div className="food-image"><img src={item.image} onError={(event) => { event.currentTarget.src = "/food-fallback.svg"; }} alt={item.name} /><button className="quick-add" onClick={() => addToCart(item)} aria-label={`Add ${item.name} to order`}>+</button></div><div className="food-info"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>₹{item.price}</strong></div></article>)}</div></section>

        <section id="about" className="story-section"><div className="story-image"><img src="https://images.unsplash.com/photo-1552566626-52f8b828?auto=format&fit=crop&w=1100&q=85" onError={(event) => { event.currentTarget.src = "/food-fallback.svg"; }} alt="Chef preparing a fresh meal" /></div><div className="story-copy"><p className="eyebrow">The Krishna story</p><h2>Food that feels<br /><em>like coming home.</em></h2><p>Hotel Krishna IN began with a simple idea: serve food that brings people together. Today, our kitchen still follows the same recipes, the same patience and the same generous spirit.</p><a href="/about" className="text-link">Meet our family <span>→</span></a></div></section>

        <section id="payment" className="order-section section-wrap"><div className="order-panel"><div className="order-intro"><p className="eyebrow">Ready when you are</p><h2>Place your<br /><em>order.</em></h2><p>Add your favourites to the order, pay securely by UPI and send us your payment proof. We&apos;ll get cooking.</p>{cart.length > 0 && <div className="cart-summary"><span>{cart.length} item{cart.length > 1 ? "s" : ""} in your order</span><strong>₹{cartTotal}</strong></div>}</div><div className="payment-form"><div className="payment-step"><span>01</span><div><h3>Scan &amp; pay</h3><p>Use any UPI app to pay <strong>₹{cartTotal || "your bill"}</strong> to Hotel Krishna.</p><div className="qr-placeholder">UPI QR<br /><small>Scan to pay</small></div></div></div><div className="payment-step"><span>02</span><div className="proof-area"><h3>Send payment proof</h3>{!submitted ? <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><input type="text" placeholder="Your name" required /><input type="tel" placeholder="Phone number" required /><label className="upload-box"><input type="file" required /> <strong>↑ Upload screenshot</strong><small>JPG or PNG, max 5MB</small></label><button className="primary-button" type="submit">Confirm order <span>→</span></button></form> : <div className="success-message"><b>✓</b><h3>Order received!</h3><p>Thank you. We&apos;ll call you shortly to confirm your order.</p></div>}</div></div></div></div></section>
      </main>

      <footer id="contact" className="site-footer"><div className="footer-brand"><a href="#home" className="brand-mark"><span className="brand-icon">HK</span><span><strong>HOTEL KRISHNA IN</strong><small>Family Restaurant &amp; Banquet</small></span></a><p>Good food. Good times.<br />Great memories.</p></div><div><h4>Visit us</h4><p>12 Krishna Nagar, Main Road<br />Your City, India</p><p>+91 98765 43210<br />hello@hotelkrishna.in</p></div><div><h4>Explore</h4><a href="/menu">Our menu</a><a href="/about">Our story</a><a href="/terms">Terms of use</a><a href="/privacy">Privacy policy</a></div><div><h4>Follow along</h4><p>See what&apos;s cooking</p><div className="social-links"><a href="/contact">ig</a><a href="/contact">fb</a></div></div><div className="footer-bottom">© 2026 Hotel Krishna IN <span>Designed and developed by Aditya</span></div></footer>
  {cart.length > 0 && <a href="#payment" className="floating-cart"><span>🛒</span><span>{cart.length} item{cart.length > 1 ? "s" : ""}</span><strong>₹{cartTotal} →</strong></a>}
    </div>
  );
}
