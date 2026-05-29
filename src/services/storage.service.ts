import { supabase } from './supabase'

export async function uploadGarmentImage(
  uri: string
) {
  const response =
    await fetch(uri)

  const blob =
    await response.blob()

  const fileName =
    `${Date.now()}.jpg`

  const { error } =
    await supabase.storage
      .from('garments')
      .upload(
        fileName,
        blob,
        {
          contentType:
            'image/jpeg',
        }
      )

  if (error) {
    throw error
  }

  const { data } =
    supabase.storage
      .from('garments')
      .getPublicUrl(
        fileName
      )

  return data.publicUrl
}