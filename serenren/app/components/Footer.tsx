import React from 'react';
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Serenren. All rights reserved.</p>
        <nav className={styles.nav}>
          <a href="/about">About Us</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className={styles.socialMedia}>
          <a href="https://web.facebook.com/profile.php?id=100081109714486" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/serenren__" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
