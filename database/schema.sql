-- Mutuchem Enterprises Database Schema
-- Products Table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  price VARCHAR(50),
  rating DECIMAL(2,1) DEFAULT 0,
  features TEXT[], -- Array of features
  icon VARCHAR(50),
  color VARCHAR(100),
  active_ingredient VARCHAR(255),
  composition VARCHAR(255),
  target_pests TEXT[], -- Array of target pests
  target_diseases TEXT[], -- Array of target diseases
  target_weeds TEXT[], -- Array of target weeds
  benefits TEXT[], -- Array of benefits
  usage TEXT NOT NULL,
  pack_sizes TEXT[], -- Array of pack sizes
  in_stock BOOLEAN DEFAULT true,
  image_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Agronomists Table
CREATE TABLE agronomists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  specialization TEXT[], -- Array of specializations
  location VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  experience VARCHAR(100),
  education TEXT,
  languages TEXT[], -- Array of languages
  rating DECIMAL(2,1) DEFAULT 0,
  consultations INTEGER DEFAULT 0,
  certifications TEXT[], -- Array of certifications
  bio TEXT,
  avatar VARCHAR(10),
  image_url VARCHAR(500),
  is_available BOOLEAN DEFAULT true,
  price_per_hour VARCHAR(50),
  response_time VARCHAR(100),
  working_hours VARCHAR(255),
  counties TEXT[], -- Array of counties served
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Services Table
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50),
  color VARCHAR(100),
  image_url VARCHAR(500),
  features TEXT[], -- Array of features
  duration VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Categories Table (for better organization)
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  image_url VARCHAR(500),
  color VARCHAR(100),
  icon VARCHAR(50),
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Insert default categories
INSERT INTO categories (name, description, color, icon, sort_order) VALUES
('insecticides', 'Effective pest control solutions for crop protection', 'from-red-500 to-orange-500', 'Zap', 1),
('fungicides', 'Advanced disease protection for healthier crops', 'from-blue-500 to-cyan-500', 'Shield', 2),
('herbicides', 'Comprehensive weed management solutions', 'from-green-500 to-emerald-500', 'Leaf', 3),
('fertilizers', 'Premium plant nutrition for maximum yield', 'from-yellow-500 to-amber-500', 'Sprout', 4);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE agronomists ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read access for agronomists" ON agronomists FOR SELECT USING (true);
CREATE POLICY "Public read access for services" ON services FOR SELECT USING (true);
CREATE POLICY "Public read access for categories" ON categories FOR SELECT USING (true);

-- Create functions for updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_agronomists_updated_at BEFORE UPDATE ON agronomists FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
