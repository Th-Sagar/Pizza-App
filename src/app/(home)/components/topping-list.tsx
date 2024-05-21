"use client";
import React, { useState } from "react";
import ToppingCard, { Topping } from "./topping-card";

const toppings = [
  {
    id: "1",
    name: "Chicken",
    image: "/chicken.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "2",
    name: "jelapeno",
    image: "/Jelapeno.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Cheese",
    image: "/cheese.png",
    price: 50,
    isAvailable: true,
  },
];
const ToppingList = () => {
  const [selectedTopping, setSelectedTopping] = useState([toppings[0]]);

  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExists = selectedTopping.some(
      (elem) => elem.id === topping.id
    );

    if (isAlreadyExists) {
      setSelectedTopping((prev) =>
        prev.filter((elem) => elem.id !== topping.id)
      );
      return;
    }

    setSelectedTopping((prev) => [...prev, topping]);
  };
  return (
    <section className="mt-6">
      <h3>Extra toppings</h3>

      <div className=" grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => (
          <ToppingCard
            key={topping.id}
            topping={topping}
            selectedTopping={selectedTopping}
            handleCheckBoxCheck={handleCheckBoxCheck}
          />
        ))}
      </div>
    </section>
  );
};

export default ToppingList;
