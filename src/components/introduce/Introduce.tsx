import React from 'react';
import styles from '../styles/introduce.module.css';

const Introduce = () => {
  return (
    <aside className={styles.continer}>
      <img className={styles.image} src="images/icon_light.jpeg" />
      <div className={styles.text_continer}>
        <div className={styles.content}>소처럼 열심히! 음머~</div>
      </div>
    </aside>
  );
};

export default Introduce;
