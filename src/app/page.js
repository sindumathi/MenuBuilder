"use client";
import React from "react";
import pizzaData from "../../data/pizzas";
import Header from "./header";
import Footer from "./footer";
import styles from "./page.module.css";
import Menu from "./menu";

import { useState, useEffect } from "react";

export default function Home() {
  const [totalPrice, setTotalPrice] = useState(0);
  function updateTotalPrice(price, isAdd) {
    if (isAdd) {
      setTotalPrice((totalPrice) => totalPrice + price);
    } else {
      setTotalPrice((totalPrice) => totalPrice - price);
    }
  }

  function handleOrder() {
    if (totalPrice > 0) {
      alert("You placed your order");
    } else {
      alert("Please add pizza to order!!!");
    }
  }
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Menu />
      <div className={styles.priceContainer}>
        <span id={styles.totalPrice}>{`Total: $${totalPrice}`}</span>
        <button id={styles.order} onClick={handleOrder}>
          Order
        </button>
      </div>
      <div className={styles.outerContainer}>
        {pizzaData.map((data) => (
          <Pizza key={data.id} data={data} updatePrice={updateTotalPrice} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Pizza(props) {
  const { data, updatePrice } = props;
  const [count, setCount] = useState(0);
  function handleAdd() {
    if (count >= 10) {
      alert("You can order only 10 items per order");
    } else {
      setCount((count) => count + 1);
      updatePrice(data.price, true);
    }
  }
  function handleRemove() {
    if (count >= 1) {
      updatePrice(data.price, false);
      setCount((count) => count - 1);
    }
  }
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img src={data.photoName} alt={data.name} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.headerText}>{data.name}</div>
        <div className={`${styles.centerText} ${styles.smallText}`}>
          {data.ingredients}
        </div>
        <div
          className={`${styles.alignContainerRight} ${styles.priceText} ${styles.maroonText}`}
        >
          {`$${data.price}`}
        </div>
        <div className={styles.orderContainer}>
          <span id={styles.add} onClick={() => handleAdd(data)}>
            +
          </span>
          <span id={styles.total}>{count}</span>
          <span id={styles.minus} onClick={() => handleRemove(data)}>
            -
          </span>
        </div>
      </div>
    </div>
  );
}
