"use client";
import React from "react";
import pizzaData from "../../data/pizzas";
import Header from "./header";
import Footer from "./footer";
import styles from "./page.module.css";
import Menu from "./menu";

import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Menu />
      <div className={styles.outerContainer}>
        {pizzaData.map((data) => (
          <Pizza key={data.id} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Pizza(props) {
  const { data } = props;
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img src={data.photoName} alt={data.name} />
      </div>
      <div className="contentContainer">
        <div className={styles.headerText}>{data.name}</div>
        <div className={`${styles.centerText} ${styles.smallText}`}>
          {data.ingredients}
        </div>
        <div
          className={`${styles.alignContainerRight} ${styles.priceText} ${styles.maroonText}`}
        >
          {`$${data.price}`}
        </div>
      </div>
    </div>
  );
}
