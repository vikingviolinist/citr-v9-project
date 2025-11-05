import { createElement } from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza
        name="Pepperoni"
        description="pep, cheese, stuff..."
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Hawai"
        description="pineapple"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="Americano"
        description="frech fries"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(createElement(App));
