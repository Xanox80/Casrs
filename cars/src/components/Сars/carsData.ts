import bmwImage1 from "../Сars/Picture/x5m_101.jpg";
import bmwImage2 from "../Сars/Picture/x5m_100.jpg";
import mercedesImage1 from "../Сars/Picture/AMG_101.jpg";
import mercedesImage2 from "../Сars/Picture/AMG.jpg";

export interface Car {
  name: string;
  images: string[];
  year: number;
  engine: string;
}

export const cars: Car[] = [
  {
    name: "BMW X5",
    images: [bmwImage1, bmwImage2],
    year: 2021,
    engine: "3.0L TwinPower Turbo",
  },
  {
    name: "Mercedes-Benz E-Class",
    images: [mercedesImage1, mercedesImage2],
    year: 2020,
    engine: "2.0L Inline-4 Turbo",
  },
  {
    name: "Mercedes-Benz E-Class",
    images: [mercedesImage1, mercedesImage2],
    year: 2020,
    engine: "2.0L Inline-4 Turbo",
  },
];
