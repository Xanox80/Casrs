import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import useCartStore from "../../stores/useCartStore";
import { FaShopify } from "react-icons/fa";
import Cart from "../Cart/Cart";
import { useTheme } from "../Main/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { cart } = useCartStore();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <header className={theme}>
      <div className="header-container">
        <h1>Мої автомобілі</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/">Автомобілі</Link>
            </li>
            <li>
              <Link to="/about">Про нас</Link>
            </li>
            <li>
              <Link to="#">Контакти</Link>
            </li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ? "Dark" : "Light"}
              </button>
            </li>
            <li className="cart-icon" onClick={toggleCart}>
              <FaShopify />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </li>
          </ul>
        </nav>
      </div>
      {isCartOpen && <Cart />}
    </header>
  );
};

export default Header;
