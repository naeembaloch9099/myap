import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const initialMenu = [
    {
      id: 1,
      name: "Margherita Pizza",
      desc: "Classic cheese pizza",
      available: 7,
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      desc: "Pepperoni and cheese",
      available: 5,
    },
    { id: 3, name: "Veggie Pizza", desc: "Loaded with veggies", available: 10 },
    {
      id: 4,
      name: "BBQ Chicken Pizza",
      desc: "Chicken with BBQ sauce",
      available: 3,
    },
    { id: 5, name: "Hawaiian Pizza", desc: "Pineapple and ham", available: 4 },
    {
      id: 6,
      name: "Cheese Burst Pizza",
      desc: "Extra cheesy delight",
      available: 6,
    },
  ];

  const [menuItems, setMenuItems] = useState(initialMenu);
  const [orderVisible, setOrderVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    quantity: 1,
  });
  const [confirmation, setConfirmation] = useState("");

  const handleOrderClick = (item) => {
    if (item.available <= 0) return;
    setSelectedItem(item);
    setOrderVisible(true);
    setConfirmation("");
    setFormData({ name: "", address: "", phone: "", quantity: 1 });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const qty = parseInt(formData.quantity);

    if (qty <= 0 || qty > selectedItem.available) {
      alert(`Please enter a quantity between 1 and ${selectedItem.available}`);
      return;
    }

    // Reduce quantity in menu
    const updatedMenu = menuItems.map((item) =>
      item.id === selectedItem.id
        ? { ...item, available: item.available - qty }
        : item
    );
    setMenuItems(updatedMenu);

    setConfirmation(
      `Your order for ${qty} "${selectedItem.name}" has been confirmed!`
    );
    setOrderVisible(false);
    setFormData({ name: "", address: "", phone: "", quantity: 1 });
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">----Fast React Pizza CO----</h1>

      <div className="menu-divider">
        <span className="menu-text">Our MENU</span>
      </div>

      <div className="container">
        {menuItems.map((item) => (
          <div className="card" key={item.id}>
            <img src="logo192.png" alt="logo" />
            <h1>{item.name}</h1>
            <p className="desc">{item.desc}</p>
            <p className="available">{item.available} available</p>
            <button
              className="order-btn"
              onClick={() => handleOrderClick(item)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      {orderVisible && selectedItem && (
        <div className="order-card">
          <button className="close-btn" onClick={() => setOrderVisible(false)}>
            &times;
          </button>
          <h2>Ordering: {selectedItem.name}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              max={selectedItem.available}
              required
            />
            <button type="submit">Submit Order</button>
          </form>
        </div>
      )}

      {confirmation && <div className="confirmation">{confirmation}</div>}
      {/* ===== Footer ===== */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2025 Fast React Pizza CO. All Rights Reserved.</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
