// Data Migration Script
// This script migrates your existing data to Supabase

import { createClient } from '@supabase/supabase-js'

// You'll need to replace these with your actual Supabase credentials
const SUPABASE_URL = 'YOUR_SUPABASE_URL'
const SUPABASE_SERVICE_KEY = 'YOUR_SUPABASE_SERVICE_KEY' // Use service key for admin operations

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

// Import your existing data
const existingProducts = [
  // Copy your products from client/data/products.ts here
  {
    name: "AgriMax Insecticide",
    category: "insecticides",
    description: "Premium broad-spectrum insecticide for effective pest control across various crops. Fast-acting formula provides immediate knockdown and residual protection.",
    price: "KES 2,500",
    rating: 4.8,
    features: ["Fast Acting", "Long Lasting", "Crop Safe", "Residual Protection"],
    icon: "Zap",
    color: "from-red-500 to-orange-500",
    active_ingredient: "Cypermethrin 10% EC",
    target_pests: ["Aphids", "Thrips", "Whiteflies", "Bollworms", "Cutworms"],
    usage: "Mix 20-30ml per 20L of water. Apply during early morning or evening.",
    pack_sizes: ["100ml", "250ml", "500ml", "1L"],
    in_stock: true,
    image_url: "/images/products/agrimax-insecticide.jpg"
  }
  // Add all your products here...
]

const existingAgronomists = [
  // Copy your agronomists from client/data/agronomists.ts here
  {
    name: "Dr. James Kiprotich",
    title: "Senior Agronomist",
    specialization: ["Crop Protection", "Soil Management", "Organic Farming"],
    location: "Nairobi",
    phone: "+254 722 345 678",
    email: "j.kiprotich@agrovetpro.co.ke",
    experience: "15+ years",
    education: "PhD in Agronomy, University of Nairobi",
    languages: ["English", "Swahili", "Kalenjin"],
    rating: 4.9,
    consultations: 500,
    certifications: ["Certified Crop Advisor", "Organic Inspector"],
    bio: "Specialized in sustainable farming practices and integrated pest management with extensive experience in coffee and tea cultivation.",
    avatar: "JK",
    is_available: true,
    price_per_hour: "KES 2,500",
    response_time: "Within 2 hours",
    working_hours: "6:00 AM - 6:00 PM",
    counties: ["Nairobi", "Kiambu", "Murang'a"]
  }
  // Add all your agronomists here...
]

const existingServices = [
  {
    title: "Expert Agronomist Consultation",
    description: "Get personalized advice from certified agronomists for optimal crop management, disease diagnosis, and treatment planning.",
    icon: "Users",
    color: "from-green-600 to-green-800",
    image_url: "https://images.pexels.com/photos/7176027/pexels-photo-7176027.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Certified Agronomists",
      "On-site Farm Visits",
      "Crop Health Assessment",
      "Customized Treatment Plans",
      "Pest & Disease Identification",
      "Soil Management Advice"
    ],
    duration: "2-4 hours",
    is_active: true
  }
  // Add all your services here...
]

async function migrateProducts() {
  console.log('Migrating products...')
  
  for (const product of existingProducts) {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert({
          name: product.name,
          category: product.category,
          description: product.description,
          price: product.price,
          rating: product.rating,
          features: product.features,
          icon: product.icon,
          color: product.color,
          active_ingredient: product.active_ingredient,
          target_pests: product.target_pests,
          usage: product.usage,
          pack_sizes: product.pack_sizes,
          in_stock: product.in_stock,
          image_url: product.image_url
        })
      
      if (error) {
        console.error('Error inserting product:', product.name, error)
      } else {
        console.log('✅ Inserted product:', product.name)
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }
}

async function migrateAgronomists() {
  console.log('Migrating agronomists...')
  
  for (const agronomist of existingAgronomists) {
    try {
      const { data, error } = await supabase
        .from('agronomists')
        .insert({
          name: agronomist.name,
          title: agronomist.title,
          specialization: agronomist.specialization,
          location: agronomist.location,
          phone: agronomist.phone,
          email: agronomist.email,
          experience: agronomist.experience,
          education: agronomist.education,
          languages: agronomist.languages,
          rating: agronomist.rating,
          consultations: agronomist.consultations,
          certifications: agronomist.certifications,
          bio: agronomist.bio,
          avatar: agronomist.avatar,
          is_available: agronomist.is_available,
          price_per_hour: agronomist.price_per_hour,
          response_time: agronomist.response_time,
          working_hours: agronomist.working_hours,
          counties: agronomist.counties
        })
      
      if (error) {
        console.error('Error inserting agronomist:', agronomist.name, error)
      } else {
        console.log('✅ Inserted agronomist:', agronomist.name)
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }
}

async function migrateServices() {
  console.log('Migrating services...')
  
  for (const service of existingServices) {
    try {
      const { data, error } = await supabase
        .from('services')
        .insert({
          title: service.title,
          description: service.description,
          icon: service.icon,
          color: service.color,
          image_url: service.image_url,
          features: service.features,
          duration: service.duration,
          is_active: service.is_active
        })
      
      if (error) {
        console.error('Error inserting service:', service.title, error)
      } else {
        console.log('✅ Inserted service:', service.title)
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }
}

async function runMigration() {
  console.log('🚀 Starting data migration...')
  
  try {
    await migrateProducts()
    await migrateAgronomists()
    await migrateServices()
    
    console.log('✅ Migration completed successfully!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
  }
}

// Uncomment to run the migration
// runMigration()

export { runMigration }
