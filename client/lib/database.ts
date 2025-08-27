import { supabase } from './supabase'
import type { Database } from './supabase'

type Product = Database['public']['Tables']['products']['Row']
type Agronomist = Database['public']['Tables']['agronomists']['Row']
type Service = Database['public']['Tables']['services']['Row']
type Category = Database['public']['Tables']['categories']['Row']

// Products API
export const productsAPI = {
  // Get all products
  async getAll(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('in_stock', true)
      .order('name')
    
    if (error) throw error
    return data || []
  },

  // Get products by category
  async getByCategory(category: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .eq('in_stock', true)
      .order('name')
    
    if (error) throw error
    return data || []
  },

  // Search products
  async search(searchTerm: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
      .eq('in_stock', true)
      .order('name')
    
    if (error) throw error
    return data || []
  },

  // Get single product
  async getById(id: number): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Create product (admin function)
  async create(product: Database['public']['Tables']['products']['Insert']): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .insert(product)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Update product (admin function)
  async update(id: number, updates: Database['public']['Tables']['products']['Update']): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Delete product (admin function)
  async delete(id: number): Promise<void> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Agronomists API
export const agronomistsAPI = {
  // Get all agronomists
  async getAll(): Promise<Agronomist[]> {
    const { data, error } = await supabase
      .from('agronomists')
      .select('*')
      .order('name')
    
    if (error) throw error
    return data || []
  },

  // Get available agronomists
  async getAvailable(): Promise<Agronomist[]> {
    const { data, error } = await supabase
      .from('agronomists')
      .select('*')
      .eq('is_available', true)
      .order('rating', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Get agronomists by location
  async getByLocation(location: string): Promise<Agronomist[]> {
    const { data, error } = await supabase
      .from('agronomists')
      .select('*')
      .or(`location.ilike.%${location}%,counties.cs.{${location}}`)
      .order('name')
    
    if (error) throw error
    return data || []
  },

  // Search agronomists
  async search(searchTerm: string): Promise<Agronomist[]> {
    const { data, error } = await supabase
      .from('agronomists')
      .select('*')
      .or(`name.ilike.%${searchTerm}%,specialization.cs.{${searchTerm}},bio.ilike.%${searchTerm}%`)
      .order('name')
    
    if (error) throw error
    return data || []
  },

  // Get single agronomist
  async getById(id: number): Promise<Agronomist | null> {
    const { data, error } = await supabase
      .from('agronomists')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  // Update availability
  async updateAvailability(id: number, isAvailable: boolean): Promise<void> {
    const { error } = await supabase
      .from('agronomists')
      .update({ is_available: isAvailable })
      .eq('id', id)
    
    if (error) throw error
  }
}

// Services API
export const servicesAPI = {
  // Get all active services
  async getAll(): Promise<Service[]> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('id')
    
    if (error) throw error
    return data || []
  },

  // Get single service
  async getById(id: number): Promise<Service | null> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  }
}

// Categories API
export const categoriesAPI = {
  // Get all active categories
  async getAll(): Promise<Category[]> {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order')
    
    if (error) throw error
    return data || []
  }
}

// Real-time subscriptions
export const subscriptions = {
  // Subscribe to products changes
  subscribeToProducts(callback: (payload: any) => void) {
    return supabase
      .channel('products-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'products' }, 
        callback
      )
      .subscribe()
  },

  // Subscribe to agronomists changes
  subscribeToAgronomists(callback: (payload: any) => void) {
    return supabase
      .channel('agronomists-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'agronomists' }, 
        callback
      )
      .subscribe()
  },

  // Subscribe to services changes
  subscribeToServices(callback: (payload: any) => void) {
    return supabase
      .channel('services-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'services' }, 
        callback
      )
      .subscribe()
  }
}
