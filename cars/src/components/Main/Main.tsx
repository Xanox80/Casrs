import React, { useState } from "react";
import "./Main.css";
import bmwImage from "./x5m_100.jpg";
import mercedesImage from "./AMG.jpg";
import { useTheme } from "./ThemeContext";
import Modal from "../Modal/Modal";

const Main: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<{
    name: string;
    image: string;
    year: number;
    engine: string;
  } | null>(null);

  const cars = [
    {
      name: "BMW X5",
      image: bmwImage,
      year: 2022,
      engine: "3.0L TwinPower Turbo",
    },
    {
      name: "Mercedes-Benz E-Class",
      image: mercedesImage,
      year: 2023,
      engine: "2.0L Inline-4 Turbo",
    },
  ];

  const openModal = (car: {
    name: string;
    image: string;
    year: number;
    engine: string;
  }) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
  };

  return (
    <main className={`main ${theme}`}>
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
      <section className="car-list">
        {cars.map((car) => (
          <article
            key={car.name}
            className="car"
            onClick={() => openModal(car)}
          >
            <h2>{car.name}</h2>
            <img src={car.image} alt={car.name} />
            <p>Рік випуску: {car.year}</p>
            <p>Двигун: {car.engine}</p>
          </article>
        ))}
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} car={selectedCar} />
    </main>
  );
};

export default Main;
