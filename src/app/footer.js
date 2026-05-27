import { useState } from "react";
import styles from "./footer.module.css";
export default function Footer() {
  const time = getTime();
  const [timeNow, setTimeNow] = useState(time);
  function getTime() {
    const now = new Date();
    return now.getHours();
  }
  setTimeout(() => {
    setTimeNow(getTime());
  }, 3600000);
  return (
    <div className={styles.footer}>
      <h2>
        {timeNow > 8 && timeNow < 21
          ? "We are currently open!!!"
          : "We are currently closed! See you tomorrow!!"}
      </h2>
    </div>
  );
}
