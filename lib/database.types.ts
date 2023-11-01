export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      listings: {
        Row: {
          area: string | null
          available: boolean | null
          available_dates_string: string | null
          created_at: string | null
          description: string | null
          host: string | null
          id: string
          location: string | null
          more_details_link: string | null
          name: string | null
          price: number | null
          price_unit: string | null
          profile_id: string | null
          thumbnail_image: string | null
          updated_at: string | null
          webflow_id: string | null
        }
        Insert: {
          area?: string | null
          available?: boolean | null
          available_dates_string?: string | null
          created_at?: string | null
          description?: string | null
          host?: string | null
          id?: string
          location?: string | null
          more_details_link?: string | null
          name?: string | null
          price?: number | null
          price_unit?: string | null
          profile_id?: string | null
          thumbnail_image?: string | null
          updated_at?: string | null
          webflow_id?: string | null
        }
        Update: {
          area?: string | null
          available?: boolean | null
          available_dates_string?: string | null
          created_at?: string | null
          description?: string | null
          host?: string | null
          id?: string
          location?: string | null
          more_details_link?: string | null
          name?: string | null
          price?: number | null
          price_unit?: string | null
          profile_id?: string | null
          thumbnail_image?: string | null
          updated_at?: string | null
          webflow_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          admin: boolean | null
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          admin?: boolean | null
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          admin?: boolean | null
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_avatar: {
        Args: {
          avatar_url: string
        }
        Returns: Record<string, unknown>
      }
      delete_storage_object: {
        Args: {
          bucket: string
          object: string
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
