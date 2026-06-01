import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native'

import {
  Search,
  SlidersHorizontal,
  Plus,
} from 'lucide-react-native'

import {
  useEffect,
} from 'react'

import { router } from 'expo-router'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

import {
  getGarments,
} from '@/src/services/garment.service'

import {
  useGarmentStore,
} from '@/src/store/garmentStore'

const categories = [
  'Todo',
  'Blusas',
  'Pantalones',
  'Vestidos',
  'Zapatos',
]

export default function ClosetScreen() {
  const garments =
    useGarmentStore(
      state => state.garments
    )

  const setGarments =
    useGarmentStore(
      state => state.setGarments
    )

  useEffect(() => {
    async function loadGarments() {
      try {
        const data =
          await getGarments()

        const formatted =
          data.map(
            garment => ({
              id: garment.id,

              imageUrl:
                garment.image_url,

              category:
                garment.category,

              color:
                garment.color,

              season:
                garment.season,

              style:
                garment.style,

              createdAt:
                garment.created_at,
            })
          )

        setGarments(
          formatted
        )
      } catch (error) {
        console.log(error)
      }
    }

    loadGarments()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={
          styles.content
        }
      >
        {/* HEADER */}

        <View style={styles.header}>
          <Text style={styles.title}>
            Mi clóset
          </Text>

          <View
            style={styles.headerIcons}
          >
            <Pressable
              style={styles.iconButton}
            >
              <Search
                size={22}
                color={COLORS.text}
                strokeWidth={1.8}
              />
            </Pressable>

            <Pressable
              style={styles.iconButton}
            >
              <SlidersHorizontal
                size={22}
                color={COLORS.text}
                strokeWidth={1.8}
              />
            </Pressable>
          </View>
        </View>

        {/* CATEGORIES */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.categoriesContainer
          }
        >
          {categories.map(
            (
              category,
              index,
            ) => (
              <Pressable
                key={category}
                style={[
                  styles.categoryButton,

                  index === 0 &&
                    styles.categoryButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,

                    index === 0 &&
                      styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </Pressable>
            ),
          )}
        </ScrollView>

        {/* GRID */}

        <View style={styles.grid}>
          {garments.length > 0 &&
            garments.map(
              garment => (
                <Pressable
                  key={garment.id}
                  style={styles.card}
                  onPress={() =>
                    router.push({
                      pathname:
                        '/garment/[id]',
                      params: {
                        id: garment.id,
                      },
                    })
                  }
                >
                  <Image
                    source={{
                      uri:
                        garment.imageUrl,
                    }}
                    style={
                      styles.image
                    }
                    resizeMode="contain"
                  />
                </Pressable>
              ),
            )}

          {garments.length === 0 && (
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                color:
                  COLORS.textSecondary,
                marginTop: 30,
              }}
            >
              Aún no has agregado
              prendas
            </Text>
          )}

          <Pressable
            style={styles.fab}
          >
            <Plus
              size={32}
              color={COLORS.white}
              strokeWidth={2.2}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:
      '#F8F7FB',
  },

  content: {
    paddingTop: 72,

    paddingHorizontal:
      SPACING.lg,

    paddingBottom: 140,
  },

  header: {
    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',

    marginBottom: 28,
  },

  title: {
    fontSize:
      TYPOGRAPHY.h1.fontSize,

    lineHeight:
      TYPOGRAPHY.h1.lineHeight,

    fontWeight: '700',

    color: COLORS.text,
  },

  headerIcons: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 14,
  },

  iconButton: {
    width: 40,

    height: 40,

    borderRadius: 20,

    justifyContent:
      'center',

    alignItems: 'center',
  },

  categoriesContainer: {
    paddingBottom: 24,
  },

  categoryButton: {
    height: 36,

    paddingHorizontal: 16,

    borderRadius: 12,

    justifyContent:
      'center',

    alignItems: 'center',

    marginRight: 10,

    backgroundColor:
      COLORS.white,
  },

  categoryButtonActive: {
    backgroundColor:
      COLORS.primary,
  },

  categoryText: {
    fontSize:
      TYPOGRAPHY.caption.fontSize,

    fontWeight: '500',

    color:
      COLORS.textSecondary,
  },

  categoryTextActive: {
    color: COLORS.white,

    fontWeight: '600',
  },

  grid: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent:
      'space-between',

    rowGap: 14,
  },

  card: {
    width: '31%',

    aspectRatio: 0.82,

    backgroundColor:
      '#FAFAFA',

    borderRadius: 18,

    padding: 12,

    justifyContent:
      'center',

    alignItems: 'center',

    shadowColor:
      COLORS.black,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.04,

    shadowRadius: 10,

    elevation: 2,
  },

  image: {
    width: '100%',

    height: '100%',
  },

  fab: {
    width: '31%',

    aspectRatio: 0.82,

    borderRadius: 22,

    backgroundColor:
      COLORS.primary,

    justifyContent:
      'center',

    alignItems: 'center',

    shadowColor:
      COLORS.primary,

    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.25,

    shadowRadius: 20,

    elevation: 8,
  },
})