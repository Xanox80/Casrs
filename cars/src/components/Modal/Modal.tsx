import React, { useState, useEffect } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: {
    name: string;
    images: string[];
    year: number;
    engine: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, car }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (isOpen && car) {
      setPhotoIndex(0); // Reset photo index when modal is opened with new car data
    }
  }, [isOpen, car]);

  if (!isOpen || !car) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>{car.name}</h2>
        <div className="modal-body">
          <img src={car.images[photoIndex]} alt={car.name} />
          <div className="photo-controls">
            <button
              onClick={() =>
                setPhotoIndex((prevIndex) =>
                  prevIndex === 0 ? car.images.length - 1 : prevIndex - 1
                )
              }
            >
              &lt;
            </button>
            <button
              onClick={() =>
                setPhotoIndex(
                  (prevIndex) => (prevIndex + 1) % car.images.length
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>
        <p>Рік випуску: {car.year}</p>
        <p>Двигун: {car.engine}</p>
      </div>
    </div>
  );
};

export default Modal;
