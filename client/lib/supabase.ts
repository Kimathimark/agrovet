import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          name: string
          category: string
          description: string
          price: string | null
          rating: number
          features: string[]
          icon: string | null
          color: string | null
          active_ingredient: string | null
          composition: string | null
          target_pests: string[] | null
          target_diseases: string[] | null
          target_weeds: string[] | null
          benefits: string[] | null
          usage: string
          pack_sizes: string[]
          in_stock: boolean
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          name: string
          category: string
          description: string
          price?: string | null
          rating?: number
          features: string[]
          icon?: string | null
          color?: string | null
          active_ingredient?: string | null
          composition?: string | null
          target_pests?: string[] | null
          target_diseases?: string[] | null
          target_weeds?: string[] | null
          benefits?: string[] | null
          usage: string
          pack_sizes: string[]
          in_stock?: boolean
          image_url?: string | null
        }
        Update: {
          name?: string
          category?: string
          description?: string
          price?: string | null
          rating?: number
          features?: string[]
          icon?: string | null
          color?: string | null
          active_ingredient?: string | null
          composition?: string | null
          target_pests?: string[] | null
          target_diseases?: string[] | null
          target_weeds?: string[] | null
          benefits?: string[] | null
          usage?: string
          pack_sizes?: string[]
          in_stock?: boolean
          image_url?: string | null
        }
      }
      agronomists: {
        Row: {
          id: number
          name: string
          title: string
          specialization: string[]
          location: string
          phone: string
          email: string
          experience: string | null
          education: string | null
          languages: string[]
          rating: number
          consultations: number
          certifications: string[]
          bio: string | null
          avatar: string | null
          image_url: string | null
          is_available: boolean
          price_per_hour: string | null
          response_time: string | null
          working_hours: string | null
          counties: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          name: string
          title: string
          specialization: string[]
          location: string
          phone: string
          email: string
          experience?: string | null
          education?: string | null
          languages: string[]
          rating?: number
          consultations?: number
          certifications: string[]
          bio?: string | null
          avatar?: string | null
          image_url?: string | null
          is_available?: boolean
          price_per_hour?: string | null
          response_time?: string | null
          working_hours?: string | null
          counties: string[]
        }
        Update: {
          name?: string
          title?: string
          specialization?: string[]
          location?: string
          phone?: string
          email?: string
          experience?: string | null
          education?: string | null
          languages?: string[]
          rating?: number
          consultations?: number
          certifications?: string[]
          bio?: string | null
          avatar?: string | null
          image_url?: string | null
          is_available?: boolean
          price_per_hour?: string | null
          response_time?: string | null
          working_hours?: string | null
          counties?: string[]
        }
      }
      services: {
        Row: {
          id: number
          title: string
          description: string
          icon: string | null
          color: string | null
          image_url: string | null
          features: string[]
          duration: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description: string
          icon?: string | null
          color?: string | null
          image_url?: string | null
          features: string[]
          duration?: string | null
          is_active?: boolean
        }
        Update: {
          title?: string
          description?: string
          icon?: string | null
          color?: string | null
          image_url?: string | null
          features?: string[]
          duration?: string | null
          is_active?: boolean
        }
      }
      categories: {
        Row: {
          id: number
          name: string
          description: string | null
          image_url: string | null
          color: string | null
          icon: string | null
          sort_order: number
          is_active: boolean
          created_at: string
        }
        Insert: {
          name: string
          description?: string | null
          image_url?: string | null
          color?: string | null
          icon?: string | null
          sort_order?: number
          is_active?: boolean
        }
        Update: {
          name?: string
          description?: string | null
          image_url?: string | null
          color?: string | null
          icon?: string | null
          sort_order?: number
          is_active?: boolean
        }
      }
    }
  }
}
