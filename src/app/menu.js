import styles from "./menu.module.css";
export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuHeader}> Our Menu</div>
      <div className={styles.menuContent}>
        Authentic italian cuisine, Homestyle, crafted 6 dishes to choose from,
        All organic and created and shared with love!!
      </div>
    </div>
  );
}
