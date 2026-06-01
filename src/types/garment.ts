export interface Garment {
  id: string

  imageUrl: string

  category?: string

  color?: string

  season?: string

  style?: string

  description?: string

  tags?: string[]

  brand?: string

  aiProcessed?: boolean

  createdAt?: string
}