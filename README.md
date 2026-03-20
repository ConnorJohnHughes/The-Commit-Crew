<p align="center">
  <img src="/public/images/LOGO.png" width="300" />
</p>

# The Commit Crew

## POWER DRIP
### Professional Fitness Drinks & Supplements Retailer

**Profesional Ecommerce Web Application**
Web Frameworks Capstone Project
<p align="center">
  <img src="/public/images/header.png" width="800" />
</p>

---

## Project Overview
<p align="center">
  <img src="/public/images/project overview.png" width="800" />
</p>

POWER DRIP is a professional ecommerce web application focused on high-quality fitness drinks, protein powders, and performance supplements. The store is designed to simulate a realistic retail store front for health-conscious consumers, athletes, and fitness enthusiasts.

The purpose of this project is to demonstrate full-stack web application architecture using:

- Server-Side Rendering (SSR)
- Node.js & Express
- MVC architecture
- MySQL database integration
- REST-style API endpoints
- Secure session-based state management
- Reusable EJS templating
- Structured CSS layout and styling

This project serves as a portfolio-ready example of structured, maintainable web application development.

---

# Product Category
<p align="center">
  <img src="/public/images/products.png" width="800" />
</p>

POWER DRIP specializes in:

- Protein Smoothies
- Performance energy drinks
- Recovery beverages
- Protein powders
- Fitness supplements

All products include realistic names, pricing, and descriptions, to simulate a professional ecommerce catalog.

---

# Team Members
<p align="center">
  <img src="/public/images/team.png" width="700" />
</p>

- **Connor Hughes**
- **Orion De Los Santos**
- **Xavier Lewis**

---

# Technology Stack
<p align="center">
  <img src="/public/images/tech stack.png" width="700" />
</p>

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS Templating Engine, CSS (Flexbox & Grid)  
- **Database:** MySQL  
- **Architecture:** MVC, Server-Side Rendering  
- **Security:** Session-based authentication & state management  

---
# SSR( Server Side Routes)
- **Pages with routes:**
  Dashboard/Home,
  Products,
  Single Products page,
  Login,
  Register

# Protected Pages
 - /products
 - /products/id
 - All /api/* endpoints related to cart behavior


- **In the future:**
  About
---

# **API Endpoints and Filtering**
- **GET /api/products?**
    - category
      - Enpoint: /api/products?category=smoothie
        - This will show all products that relate the smoothie category
    - minPrice
      - Endpoint: /api/products?minPrice=2
        - This will show all products with a minimum price of 2 dollars
    - maxPrice
      - Endpoint:  /api/products?maxPrice=10
        - This will show all products that have a maximum price of 10 dollars

      - Endpoint: /api/products?minPrice=2&maxPrice=10
        Addtional you can combine the minPrice and maxPrice for products within a range of 2 dollars for the minimum and a maximum of 10 dollars.

    - sort
      - Endpoint: /api/products?sort=price
        - This will show all products that are sorted by price in ascending order.( Smallest to largest price).
        - after "sort=" you can enter price, category, name, or id.

    - id
      - Endpoint: /api/products/:id 
        - This will show the product matching an ID

# **Session based Cart Api endpoints** 
  - **GET**
    - /api/cart
    - Get items currently in cart

  - **POST**
    - /api/cart/items
    - Add items to cart

  - **DELETE**
    - /api/cart/items/:productId
    - Delete product from cart using id

  - **POST**
    - /api/cart/clear
    - Clear the whole cart

# **Session-Based Cart Model**
The cart is stored in server-side session state.

  - req.session.cart


# Project setup instructions
1. Fork and clone repo
2. Open terminla and git clone repo
3. Open folder/root folder for project directory
4. In terminal in VS code or IDE of choice run the command "npm i"
5. Look in scripts folder in project for seed and schema data for database
6. Copy and run schema.sql in database of choice
7. In created database schema copy and run seed.sql to create data for table
8. Back in IDE open terminal and run command "npm run dev"
9. Terminal should show :
----------------------Connected to Database-----------------------------
Database Connected
Server started on http://localhost:8002
10. Ctrl + click the localhost link to redirect to website
11. Explore and enjoy the project 