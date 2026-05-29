import { createGarment }
  from './garment.service'

export async function testInsert() {
  try {
    const result =
      await createGarment({
        imageUrl:
          'https://images.unsplash.com/photo-1564257631407-4deb1f99d992',
        category:
          'Blusa',
      })

    console.log(
      'INSERT OK',
      result
    )

    alert('INSERT OK')
  } catch (error) {
    console.log(
      'INSERT ERROR',
      error
    )

    alert(
      JSON.stringify(error)
    )
  }
}