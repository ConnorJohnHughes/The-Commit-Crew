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
('Berry Surge Smoothie', 6.99, 'Berry blend smoothie with whey isolate and chia for a clean post-workout boost.', 'smoothie', '/images/products/berrySurgeSmoothie.jpg'),
('Tropical Charge Smoothie', 6.99, 'Mango and pineapple smoothie packed with electrolytes for recovery.', 'smoothie', '/images/products/tropicalChargeSmoothie.jpg'),
('Green Detox Smoothie', 7.49, 'Spinach, kale, green apple and ginger for a refreshing detox.', 'smoothie', '/images/products/greenDetoxSmoothie.jpg'),
('Chocolate Muscle Shake', 7.99, 'Rich chocolate protein shake designed for muscle recovery.', 'smoothie', '/images/products/chocolateMuscleShake.jpg'),

('Vanilla Protein Powder', 24.99, 'High quality vanilla whey protein for meal replacement or recovery.', 'powder', '/images/products/vanillaProteinPowder.jpg'),
('Chocolate Protein Powder', 24.99, 'Smooth chocolate whey protein for strength training support.', 'powder', '/images/products/chocolateProteinPowder.jpg'),
('Strawberry Protein Powder', 24.99, 'Strawberry flavored whey protein with essential amino acids.', 'powder', '/images/products/strawberryProteinPowder.jpg'),
('Plant Based Protein', 29.99, 'Vegan-friendly plant protein blend for clean energy.', 'powder', '/images/products/plantBasedProtein.jpg'),

('Pre-Workout Energy Drink', 3.99, 'Caffeinated fitness drink to power your workouts.', 'drink', '/images/products/preworkoutEnergyDrink.jpg'),
('Electrolyte Hydration Drink', 3.49, 'Low sugar hydration drink with added electrolytes.', 'drink', '/images/products/electrolyteHydrationDrink.jpg'),
('Recovery Amino Drink', 4.49, 'BCAA infused recovery drink for post-workout.', 'drink', '/images/products/recoveryAminoDrink.jpg'),
('Immune Boost Drink', 4.29, 'Vitamin packed drink to support immune health.', 'drink', '/images/products/immuneBoostDrink.jpg'),

('Peanut Butter Protein Smoothie', 7.99, 'Creamy peanut butter smoothie packed with protein.', 'smoothie', '/images/products/peanutButterProteinSmoothie.jpg'),
('Blueberry Oat Smoothie', 7.49, 'Blueberry smoothie blended with oats for sustained energy.', 'smoothie', '/images/products/blueberryOatSmoothie.jpg'),
('Coffee Protein Shake', 7.99, 'Cold brew coffee shake with added protein.', 'smoothie', '/images/products/coffeeProteinShake.jpg'),
('Banana Almond Smoothie', 7.49, 'Banana almond blend with natural sweetness.', 'smoothie', '/images/products/bananaAlmondSmoothie.jpg'),

('Creatine Performance Powder', 19.99, 'Creatine supplement for strength and endurance.', 'powder', '/images/products/creatinePerformancePowder.jpg'),
('Collagen Boost Powder', 21.99, 'Collagen powder for joint and skin support.', 'powder', '/images/products/collagenBoostPowder.jpg'),
('Greens Superfood Powder', 26.99, 'Superfood greens powder packed with vitamins.', 'powder', '/images/products/greensSuperfoodPowder.jpg'),
('Electrolyte Mix Powder', 18.99, 'Electrolyte powder mix for hydration support.', 'powder', '/images/products/electrolyteMixPowder.jpg');

select * from products;
DELETE FROM users; 

INSERT INTO users (username, password) VALUES ('f00d', '$2b$10$DOGVagQ30JO/z.bDTeOaCOnspDwdiB52xYIRUjfGJgkSfh1rInepG');