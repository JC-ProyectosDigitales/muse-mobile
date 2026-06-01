import { supabase } from './supabase'

import * as FileSystem
  from 'expo-file-system'

import { decode }
  from 'base64-arraybuffer'

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

export async function updateGarment(
  id: string,
  garment: {
    category?: string
    color?: string
    season?: string
    style?: string
    description?: string
    tags?: string[]
    brand?: string
    aiProcessed?: boolean
  }
) {
  const { data, error } =
    await supabase
      .from('garments')
      .update({
        category:
          garment.category,

          color:
            garment.color,

            season:
              garment.season,

            style:
              garment.style,

            description:
              garment.description,

            tags:
              garment.tags,

            brand:
              garment.brand,
      })
      .eq('id', id)
      .select()
      .single()

  if (error) {
    throw error
  }

  return data
}

export async function deleteGarment(
  id: string
) {
  const garment =
    await getGarmentById(id)

  if (!garment) {
    return
  }

  const fileName =
    garmemt.image_url
      .split('/')
      .pop()

  if (fileName) {
    await supabase.storage
      .from('garments')
      .remove([
        fileName
      ])
  }

  const { error } =
    await supabase
      .from('garments')
      .delete()
      .eq('id', id)

  if (error) {
    throw error
  } 
}

export async function uploadImage(
  imageUri: string
) {
  const fileName =
    `${Date.now()}.jpg`

  const base64 =
    await FileSystem.readAsStringAsync(
      imageUri,
      {
        encoding:
          FileSystem.EncodingType.Base64,
      }
    )

  const { error } =
    await supabase.storage
      .from('garments')
      .upload(
        fileName,
        decode(base64),
        {
          contentType:
            'image/jpeg',
        }
      )

  if (error) {
    throw error
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from('garments')
    .getPublicUrl(fileName)

  return publicUrl
}