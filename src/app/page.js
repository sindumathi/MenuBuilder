"use client";
import React from "react";
import pizzaData from "../../data/pizzas";
import Header from "./header";
import Footer from "./footer";
import styles from "./page.module.css";

import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.outerContainer}>
        {pizzaData.map((data) => (
          <Pizza key={data.id} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Pizza({ data }) {
  console.log("data", data);
  return (
    <div className={styles.itemContainer}>
      <div className={styles.inlineBoxContainer}>
        <div className={styles.headerText}>{data.name}</div>
        <div
          className={`${styles.alignContainerRight} ${styles.priceText} ${styles.maroonText}`}
        >
          {`Price:${data.price}$`}
        </div>
      </div>
      <div className={styles.smallText}>{data.ingredients}</div>
      <div className={styles.imageContainer}>
        <img src={data.photoName} alt={data.name} />
      </div>
    </div>
  );
}
