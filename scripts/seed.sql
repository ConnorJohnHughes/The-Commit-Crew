-- =================================================================
-- POWER DRIP - Seed Data
-- This script inserts initial product data into the products table.
-- Run AFTER schema.sql
-- =================================================================

-- Remove existing product data so this file can be rerun safely
DELETE FROM products; 

-- Insert POWER DRIP products below
INSERT INTO products (name, price, description, category, image_path)
VALUES
('Power Drip - Berry Surge Smoothie (12oz)', 6.99, 'Berry blend smoothie with whey isolate and chia for a clean post-workout boost.', 'smoothie', '/images/placeholder.jpg'),
('Power Drip - Tropical Charge Smoothie (12oz)', 6.99, 'Mango and pineapple smoothie packed with electrolytes for recovery.', 'smoothie', '/images/placeholder.jpg'),
('Power Drip - Green Detox Smoothie (12oz)', 7.49, 'Spinach, kale, green apple and ginger for a refreshing detox.', 'smoothie', '/images/placeholder.jpg'),
('Power Drip - Chocolate Muscle Shake (12oz)', 7.99, 'Rich chocolate protein shake designed for muscle recovery.', 'smoothie', '/images/placeholder.jpg'),

('Power Drip - Vanilla Protein Powder (1lb)', 24.99, 'High quality vanilla whey protein for meal replacement or recovery.', 'powder', '/images/placeholder.jpg'),
('Power Drip - Chocolate Protein Powder (1lb)', 24.99, 'Smooth chocolate whey protein for strength training support.', 'powder', '/images/placeholder.jpg'),
('Power Drip - Strawberry Protein Powder (1lb)', 24.99, 'Strawberry flavored whey protein with essential amino acids.', 'powder', '/images/placeholder.jpg'),
('Power Drip - Plant Based Protein (1lb)', 29.99, 'Vegan-friendly plant protein blend for clean energy.', 'powder', '/images/placeholder.jpg'),

('Power Drip - Pre-Workout Energy Drink', 3.99, 'Caffeinated fitness drink to power your workouts.', 'drink', '/images/placeholder.jpg'),
('Power Drip - Electrolyte Hydration Drink', 3.49, 'Low sugar hydration drink with added electrolytes.', 'drink', '/images/placeholder.jpg'),
('Power Drip - Recovery Amino Drink', 4.49, 'BCAA infused recovery drink for post-workout.', 'drink', '/images/placeholder.jpg'),
('Power Drip - Immune Boost Drink', 4.29, 'Vitamin packed drink to support immune health.', 'drink', '/images/placeholder.jpg'),

('Power Drip - Peanut Butter Protein Smoothie', 7.99, 'Creamy peanut butter smoothie packed with protein.', 'smoothie', '/images/placeholder.jpg'),
('Power Drip - Blueberry Oat Smoothie', 7.49, 'Blueberry smoothie blended with oats for sustained energy.', 'smoothie', '/images/placeholder.jpg'),
('Power Drip - Coffee Protein Shake', 7.99, 'Cold brew coffee shake with added protein.', 'smoothie', '/images/placeholder.jpg'),
('Power Drip - Banana Almond Smoothie', 7.49, 'Banana almond blend with natural sweetness.', 'smoothie', '/images/placeholder.jpg'),

('Power Drip - Creatine Performance Powder', 19.99, 'Creatine supplement for strength and endurance.', 'powder', '/images/placeholder.jpg'),
('Power Drip - Collagen Boost Powder', 21.99, 'Collagen powder for joint and skin support.', 'powder', '/images/placeholder.jpg'),
('Power Drip - Greens Superfood Powder', 26.99, 'Superfood greens powder packed with vitamins.', 'powder', '/images/placeholder.jpg'),
('Power Drip - Electrolyte Mix Powder', 18.99, 'Electrolyte powder mix for hydration support.', 'powder', '/images/placeholder.jpg');


