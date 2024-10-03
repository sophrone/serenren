import React from 'react';
import Layout from './components/Layout'; 
import styles from './HomePage.module.css'; 
import Link from 'next/link'; // Import Link from next/link

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.background}>
        <div>
          <h1>Welcome to Serenren</h1>
          <h2>Fashion for the Modern Woman!</h2>
        </div>
      </div>
      
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Our RTW range includes...</h2>
      <div className={styles.services}>
        <Link href="/products" className={styles.serviceCard}>Party Dresses</Link>
        <Link href="/products" className={styles.serviceCard}>Work Wear</Link>
        <Link href="/products" className={styles.serviceCard}>Bubu</Link>
        <Link href="/products" className={styles.serviceCard}>Beach Dresses</Link>
      </div>
    </Layout>
  );
};

export default HomePage;