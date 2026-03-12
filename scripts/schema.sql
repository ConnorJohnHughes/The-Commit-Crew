-- ======================================================
-- POWER DRIP - Database Schema
-- This script drops and recreates the products table.
-- It can be safely run multiple times during development
-- ======================================================


-- Remove the products table if it already exists
DROP TABLE IF EXISTS products;

-- Create the products table
CREATE TABLE products (

  -- Unique ID for each product (auto-increments)
  id INT AUTO_INCREMENT PRIMARY KEY,

  -- Product name (ex: Berry Surge Smoothie)
  name VARCHAR(120) NOT NULL,

  -- Product price (supports dollars and cents)
  price DECIMAL(10,2) NOT NULL,

  -- Full product description (shown on product pages)
  description TEXT NOT NULL,

  -- Product category (smoothie, powder, drink, etc.)
  category VARCHAR(60) NOT NULL,

  -- Optional path to product image
  image_path VARCHAR(255),

  -- Automatically stores when the product was created
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS users (

    userId INT NOT NULL AUTO_INCREMENT,

    username VARCHAR(255) NOT NULL,

    password VARCHAR(255) NOT NULL,

    role ENUM('user','admin') NOT NULL DEFAULT 'user',

    PRIMARY KEY (userId)
);