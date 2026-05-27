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
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

const categories = [
  'Todo',
  'Blusas',
  'Pantalones',
  'Vestidos',
  'Zapatos',
]

const garments = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
  },

  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
  },
]

export default function ClosetScreen() {
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

          <View style={styles.headerIcons}>
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
          {garments.map(
            garment => (
              <Pressable
                key={garment.id}
                style={styles.card}
              >
                <Image
                  source={{
                    uri: garment.image,
                  }}
                  style={
                    styles.image
                  }
                  resizeMode="contain"
                />
              </Pressable>
            ),
          )}

          {/* FAB CARD */}

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