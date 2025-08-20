import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">----fast react Pizza CO----</h1>

      <div className="menu-divider">
        <span className="menu-text">Our MENU</span>
      </div>

      <p className="description">
        Do you want me to add these lines inside your React app JSX with CSS
        styling so they show beautifully under your heading
      </p>
      <div class="container">
        <div class="card">
          <img src="logo192.png" alt="logo" />
          <h1>Lorem.</h1>
          <p class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p class="available">7</p>
        </div>

        <div class="card">
          <img src="logo192.png" alt="logo" />
          <h1>Lorem.</h1>
          <p class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p class="available">7</p>
        </div>

        <div class="card">
          <img src="logo192.png" alt="logo" />
          <h1>Lorem.</h1>
          <p class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p class="available">7</p>
        </div>

        <div class="card">
          <img src="logo192.png" alt="logo" />
          <h1>Lorem.</h1>
          <p class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p class="available">7</p>
        </div>

        <div class="card">
          <img src="logo192.png" alt="logo" />
          <h1>Lorem.</h1>
          <p class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p class="available">7</p>
        </div>

        <div class="card">
          <img src="logo192.png" alt="logo" />
          <h1>Lorem.</h1>
          <p class="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p class="available">7</p>
        </div>
      </div>
      <div class="opening-section">
        <div>We are open at 12 pm</div>
        <button type="submit">Order Now</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
