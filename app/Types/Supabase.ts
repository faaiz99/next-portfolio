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
      repos: {
        Row: {
          created_at: string
          description: string | null
          forks_count: number | null
          html_url: string | null
          id: number
          language: string | null
          name: string | null
          open_issues_count: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          forks_count?: number | null
          html_url?: string | null
          id?: number
          language?: string | null
          name?: string | null
          open_issues_count?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          forks_count?: number | null
          html_url?: string | null
          id?: number
          language?: string | null
          name?: string | null
          open_issues_count?: number | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
