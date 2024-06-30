// src/components/Modal/Modal.tsx
import React from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: {
    name: string;
    image: string;
    year: number;
    engine: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, car }) => {
  if (!isOpen || !car) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>{car.name}</h2>
        <img src={car.image} alt={car.name} />
        <p>Рік випуску: {car.year}</p>
        <p>Двигун: {car.engine}</p>
      </div>
    </div>
  );
};

export default Modal;
