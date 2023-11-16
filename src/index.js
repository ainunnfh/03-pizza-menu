"use strict";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const numPizza = pizzas.length;

  const numPizza = [];

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 Creative dishes choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizza">
            {pizzas.map((item) => {
              return (
                <Pizza
                  name={item.name}
                  ingredients={item.ingredients}
                  photoName={item.photoName}
                  price={"$" + item.price}
                  soldOut={item.soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>We're still working for our menu. Please Come Back Later</p>
      )}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  if (props.soldOut) return null;
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
        <span>{props.soldOut}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 10;
  const close = 22;
  const isOpen = hour >= open && hour <= close;

  if (!isOpen) {
    return "CLOSED";
  }

  return (
    <footer className="footer">
      {isOpen && <Order openHour={open} closeHour={close} />}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour} until {closeHour}. Come visit us Or Order
        Online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
