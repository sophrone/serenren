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
      title: "Maddona Set",
      image: "/image1.jpg",
      description: "The Maddona Set combines style and comfort with its chic design and versatile pieces, perfect for effortless day-to-night wear.",
      price: "$45",
    },
    {
      title: "Nina Bodycon dress",
      image: "/image2.jpg",
      description: "The Nina Bodycon Dress features a flattering silhouette in premium stretch fabric, perfect for any occasion, from cocktail parties to dinner dates.",
      price: "$40",
    },
    {
      title: "Sasha Set",
      image: "/image3.jpg",
      description: "The Sasha Set offers a stylish and comfortable look, perfect for any occasion.",
      price: "$40",
    },
    {
      title: "Rainbow Set",
      image: "/image4.jpg",
      description: "The Rainbow Set features vibrant colors and playful designs, perfect for adding a fun flair to your wardrobe.",
      price: "$45",
    },
    {
      title: "Maddona Top and Sasha Pant",
      image: "/image5.jpg",
      description: "The Maddona Top and Sasha Pant offers versatile styling with chic elegance for any occasion.",
      price: "$45",
    },
    {
      title: "Mimi Girlfriend Dress",
      image: "/image6.jpg",
      description: "The Mimi Girlfriend Dress combines comfort and style for a relaxed yet chic look.",
      price: "$40",
    },
    {
      title: "Kente Organdy Kimono",
      image: "/image7.jpg",
      description: "The Kente Organdy Kimono features vibrant prints and lightweight fabric, adding a touch of elegance to any outfit.",
      price: "$45",
    },
    {
      title: "Rich Aunty Bubu",
      image: "/image8.jpg",
      description: "The Rich Aunty Bubu exudes sophistication and comfort with its stylish, loose fit.",
      price: "$50",
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
                width={300} 
                height={300} 
                layout="responsive" 
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
