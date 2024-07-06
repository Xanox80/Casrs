import React, { useState } from "react";
import "./Main.css";
import { useTheme } from "./ThemeContext";
import Modal from "../Modal/Modal";
import useCartStore from "../../stores/useCartStore";
import { BsFilterSquare, BsSearch } from "react-icons/bs";
import { cars, Car } from "../Сars/carsData";

const Main: React.FC = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [sortedCars, setSortedCars] = useState<Car[]>(cars);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cart, addToCart, removeFromCart } = useCartStore();

  const openModal = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setIsModalOpen(false);
  };

  const sortCarsByYear = (ascending: boolean) => {
    const sortedCarsCopy = [...sortedCars].sort((a, b) =>
      ascending ? a.year - b.year : b.year - a.year
    );
    setSortedCars(sortedCarsCopy);
  };

  const filterCarsByQuery = (query: string) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setSortedCars(filteredCars);
  };

  const isCarInCart = (car: Car) => {
    return cart.some((c) => c.name === car.name);
  };

  return (
    <main className={`main ${theme}`}>
      <section className="filter-section">
        <div
          className="filter-icon"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <BsFilterSquare size={24} />
          {isFilterOpen && (
            <div className="dropdown-menu">
              <button onClick={() => sortCarsByYear(true)}>
                Sort by Year Ascending
              </button>
              <button onClick={() => sortCarsByYear(false)}>
                Sort by Year Descending
              </button>
            </div>
          )}
        </div>
        <div className="search-bar">
          <BsSearch size={24} />
          <input
            type="text"
            placeholder="Search cars..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              filterCarsByQuery(e.target.value);
            }}
          />
        </div>
      </section>
      <section className="car-list">
        {sortedCars.map((car) => (
          <article
            key={car.name}
            className="car"
            onClick={() => openModal(car)}
          >
            <h2>{car.name}</h2>
            <img src={car.images[0]} alt={car.name} />
            <p>Year: {car.year}</p>
            <p>Engine: {car.engine}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                isCarInCart(car) ? removeFromCart(car) : addToCart(car);
              }}
            >
              {isCarInCart(car) ? "Remove from Cart" : "Add to Cart"}
            </button>
          </article>
        ))}
      </section>
      {isModalOpen && selectedCar && (
        <Modal isOpen={isModalOpen} onClose={closeModal} car={selectedCar} />
      )}
    </main>
  );
};

export default Main;
