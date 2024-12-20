"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import styles from './ProductPage.module.css';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner'; 

// Define the Product type
interface Product {
  title: string;
  image: string;
  description: string;
  price: string;
}

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page
  
  // Sorting state
  const [sortOption, setSortOption] = useState('title'); // Default sorting by title

  // Loading state
  const [loading, setLoading] = useState(true);

  const products: Product[] = [
    {
      title: "Product 1",
      image: "/image1.jpg",
      description: "Description of Product 1.",
      price: "$29.99",
    },
    {
      title: "Product 2",
      image: "/image2.jpg",
      description: "Description of Product 2.",
      price: "$39.99",
    },
    {
      title: "Product 3",
      image: "/image3.jpg",
      description: "Description of Product 3.",
      price: "$19.99",
    },
    {
      title: "Product 4",
      image: "/image4.jpg",
      description: "Description of Product 4.",
      price: "$19.99",
    },
    {
      title: "Product 5",
      image: "/image5.jpg",
      description: "Description of Product 5.",
      price: "$19.99",
    },
    {
      title: "Product 6",
      image: "/image6.jpg",
      description: "Description of Product 6.",
      price: "$19.99",
    },
    {
      title: "Product 7",
      image: "/image7.jpg",
      description: "Description of Product 7.",
      price: "$19.99",
    },
    {
      title: "Product 8",
      image: "/image8.jpg",
      description: "Description of Product 8.",
      price: "$19.99",
    },
    // ... other products
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products based on selected sort option
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'price') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    }
    return a.title.localeCompare(b.title); // Sort by title by default
  });

  // Calculate total pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Get current products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className={styles.productHeader}>
        <h1>Our Products</h1>
        <p>Explore our range of high-quality products designed to meet your needs.</p>
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />

        {/* Sorting Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="title">Sort by Title</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className={styles.productContainer}>
        {loading ? (
          <Spinner /> // Display the spinner while loading
        ) : currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <Image
                src={product.image}
                alt={product.title}
                className={styles.productImage}
                onClick={() => handleImageClick(product)}
                width={300} // Specify width
                height={300} // Specify height
                layout="responsive" // Maintain aspect ratio
              />
              <p>{product.description}</p>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
          className={`${styles.pageButton} ${currentPage === 1 ? styles.disabledButton : ''}`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : styles.pageButton}
          >
            {index + 1}
          </button>
        ))}

        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabledButton : ''}`}
        >
          Next
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct || { title: '', description: '', price: '', image: '' }}
      />
      <Footer /> 
    </div>
  );
};

export default ProductPage;
