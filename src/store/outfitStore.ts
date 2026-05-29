import { create } from 'zustand'

import { Outfit } from '@/src/types/outfit'

interface OutfitStore {
  outfits: Outfit[]

  addOutfit: (
    outfit: Outfit
  ) => void
}

export const useOutfitStore =
  create<OutfitStore>(
    (set) => ({
      outfits: [],

      addOutfit: (
        outfit
      ) =>
        set((state) => ({
          outfits: [
            outfit,
            ...state.outfits,
          ],
        })),
    })
  )