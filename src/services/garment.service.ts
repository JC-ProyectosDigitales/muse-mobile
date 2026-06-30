import { supabase } from './supabase'

import * as FileSystem
  from 'expo-file-system/legacy'

import { decode }
  from 'base64-arraybuffer'

const GARMENTS_BUCKET = 'garments'

function getStorageFileNameFromUrl(
  imageUrl: string
): string | null {
  try {
    const url = new URL(imageUrl)
    const marker = `/${GARMENTS_BUCKET}/`
    const index =
      url.pathname.indexOf(marker)

    if (index !== -1) {
      const path = url.pathname.slice(
        index + marker.length
      )

      const fileName = decodeURIComponent(
        path.split('/').filter(Boolean).join('/')
      )

      return fileName || null
    }
  } catch {
    // Fall through to legacy parsing.
  }

  const withoutQuery =
    imageUrl.split('?')[0]

  const segment = withoutQuery
    .split('/')
    .pop()

  return segment
    ? decodeURIComponent(segment)
    : null
}

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
    throw new Error(
      'La prenda no existe.'
    )
  }

  const { data, error } =
    await supabase
      .from('garments')
      .delete()
      .eq('id', id)
      .select('id')

  if (error) {
    throw error
  }

  if (!data?.length) {
    throw new Error(
      'No se pudo eliminar la prenda. Falta la política DELETE en Supabase.'
    )
  }

  const fileName =
    getStorageFileNameFromUrl(
      garment.image_url
    )

  if (!fileName) {
    return
  }

  const { error: storageError } =
    await supabase.storage
      .from(GARMENTS_BUCKET)
      .remove([fileName])

  if (storageError) {
    console.warn(
      'Storage cleanup failed:',
      storageError.message
    )
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
      .from(GARMENTS_BUCKET)
      .upload(
        fileName,
        decode(base64),
        {
          contentType:
            'image/jpeg',
        }
      )

  if (error) {
    console.log(
      'STORAGE ERROR:',
      error
    )

    throw error
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from(GARMENTS_BUCKET)
    .getPublicUrl(fileName)

  return publicUrl
}

export async function getGarmentById(
  id: string 
) {
  const { data, error } =
    await supabase
      .from('garments')
      .select('*')
      .eq('id', id)
      .single()

  if (error) {
    throw error
  }

  return data
}

export async function replaceGarmentImage(
  id: string,
  imageUri: string
) {
  const oldGarment =
    await getGarmentById(id)

  const imageUrl =
    await uploadImage(imageUri)

  const { data, error } =
    await supabase
      .from("garments")
      .update({
        image_url:
          imageUrl,
      })
      .eq("id", id)
      .select()
      .single()

  if (error) {
    throw error
  }

  try {
    const oldFile =
      oldGarment.image_url
        ?.split("/")
        .pop()

    if (oldFile) {
      await supabase.storage
        .from("garments")
        .remove([
          oldFile,
        ])
    }
  } catch {}

  return data
}

export async function toggleFavorite(
  id: string,
  favorite: boolean
) {
  const { data, error } =
    await supabase
      .from("garments")
      .update({
        is_favorite: favorite,
      })
      .eq("id", id)
      .select()
      .single()

  if (error) {
    throw error
  }

  return data
}

export async function getFavoriteGarments() {
  const { data, error } =
    await supabase
      .from("garments")
      .select("*")
      .eq("is_favorite", true)
      .order("created_at", {
        ascending: false,
      })

  if (error) {
    throw error
  }

  return data
}
