// src/components/Header/header.tsx
import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <h1>Мої автомобілі</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Головна</a>
            </li>
            <li>
              <a href="#">Автомобілі</a>
            </li>
            <li>
              <a href="#">Про нас</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
