import React from "react";
import { useState } from "react";
import styles from "./NameAgeForm.module.css";

const NameAgeForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <form action="" className={styles.form}>
        <div className={styles['form-wrapper']}>
          <label htmlFor="" className={styles.label}>
            username
          </label>
          <input type="text" className={styles.input} />
        </div>

        <div className={styles['form-wrapper']}>
          <label htmlFor="" className={styles.label}>
            age
          </label>
          <input type="number" className={styles.input} />
        </div>
      </form>
    </div>
  );
};

export default NameAgeForm;
