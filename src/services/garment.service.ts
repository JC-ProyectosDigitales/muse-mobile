import { supabase } from './supabase'

export async function getGarments() {
  const { data, error } =
    await supabase
      .from('garments')
      .select('*')
      .order(
        'created_at',
        {
          ascending: false,
        }
      )

  if (error) {
    throw error
  }

  return data
}

export async function createGarment(
  garment: {
    imageUrl: string
    category?: string
    color?: string
    season?: string
    style?: string
  }
) {
  const { data, error } =
    await supabase
      .from('garments')
      .insert([
        {
          image_url:
            garment.imageUrl,

          category:
            garment.category,

          color:
            garment.color,

          season:
            garment.season,

          style:
            garment.style,
        },
      ])
      .select()

  if (error) {
    throw error
  }

  return data
}