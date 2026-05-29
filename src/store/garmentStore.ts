import { create } from 'zustand'
import { Garment } from '@/src/types/garment'

interface GarmentStore {
  garments: Garment[]

  addGarment: (
    garment: Garment
  ) => void

  removeGarment: (
    id: string
  ) => void
}

export const useGarmentStore =
  create<GarmentStore>(
    set => ({
      garments: [],

      addGarment: garment =>
        set(state => ({
          garments: [
            garment,
            ...state.garments,
          ],
        })),

      removeGarment: id =>
        set(state => ({
          garments:
            state.garments.filter(
              garment =>
                garment.id !== id
            ),
        })),
    })
  )