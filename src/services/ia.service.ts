export interface AIAnalysis {
  category: string
  color: string
  season: string
  style: string
  description: string
  tags: string[]
  brand: string
}

export async function analyzeGarment(
  imageUrl: string
): Promise<AIAnalysis> {
  await new Promise(
    resolve =>
      setTimeout(resolve, 1500)
  )

  return {
    category: 'Blusa',

    color: 'Negro',

    season: 'Otoño',

    style: 'Casual',

    description:
      'Prenda casual ideal para uso diario.',

    tags: [
      'casual',
      'minimalista',
      'urbano',
    ],

    brand:
      'No identificada',
  }
}