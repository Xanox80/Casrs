import React from "react";
import useCartStore from "../../stores/useCartStore";
import "./Cart.css";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="cart">
      <h2>Кошик</h2>
      {cart.length === 0 ? (
        <p>Ваш кошик порожній</p>
      ) : (
        <ul>
          {cart.map((car) => (
            <li key={car.name}>
              <span>{car.name}</span>
              <button onClick={() => removeFromCart(car)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
