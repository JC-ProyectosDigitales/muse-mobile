import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native'

import {
  router
} from 'expo-router'

import {
  Heart,
} from 'lucide-react-native'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

const categories = [
  'Casual',
  'Oficina',
  'Cita',
  'Fiesta',
]

const outfits = [
  {
    id: '1',
    category: 'Casual',

    generatedBy: 'mock-ai',
    confidence: 0.94,

    items: {
      top: 'https://i.imgur.com/qn6Y8b4.png',
      bottom: 'https://i.imgur.com/JW9XK7n.png',
      accessory: 'https://i.imgur.com/BxQ9V7B.png',
      shoes: 'https://i.imgur.com/r8w2Y7M.png',
    },
  },

  {
    id: '2',
    category: 'Oficina',

    generatedBy: 'mock-ai',
    confidence: 0.92,

    items: {
      top: 'https://i.imgur.com/4Qy7R7Y.png',
      bottom: 'https://i.imgur.com/JW9XK7n.png',
      accessory: 'https://i.imgur.com/BxQ9V7B.png',
      shoes: 'https://i.imgur.com/r8w2Y7M.png',
    },
  },

  {
    id: '3',
    category: 'Cita',

    generatedBy: 'mock-ai',
    confidence: 0.91,

    items: {
      top: 'https://i.imgur.com/0R9QZ6S.png',
      bottom: 'https://i.imgur.com/JW9XK7n.png',
      accessory: 'https://i.imgur.com/BxQ9V7B.png',
      shoes: 'https://i.imgur.com/r8w2Y7M.png',
    },
  },

  {
    id: '4',
    category: 'Fiesta',

    generatedBy: 'mock-ai',
    confidence: 0.89,

    items: {
      top: 'https://i.imgur.com/fY4G5Qp.png',
      bottom: 'https://i.imgur.com/9Yk5z6w.png',
      accessory: 'https://i.imgur.com/T8m6K2x.png',
      shoes: 'https://i.imgur.com/Z8mQ2Bx.png',
    },
  },
]

export default function OutfitsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={
        styles.content
      }
      showsVerticalScrollIndicator={
        false
      }
    >
      <Text style={styles.title}>
        Outfits para ti
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={
          false
        }
        style={styles.categories}
      >
        {categories.map(
          (category, index) => (
            <Pressable
              key={category}
              style={[
                styles.categoryButton,

                index === 0 &&
                  styles.categoryActive,
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
          )
        )}
      </ScrollView>

      <View style={styles.grid}>
        {outfits.map((outfit) => (
          <Pressable
            key={outfit.id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/outfit-detail',
                params: {
                  id: outfit.id,
                },
              })
            }
          >
            <Pressable
              style={styles.favorite}
            >
              <Heart
                size={20}
                color={COLORS.primary}
              />
            </Pressable>

            <View style={styles.images}>
              <View style={styles.leftColumn}>
                <Image
                  source={{
                    uri: outfit.items.top,
                  }}
                  style={
                    styles.largeImage
                  }
                />

                <Image
                  source={{
                    uri: outfit.items.bottom,
                  }}
                  style={
                    styles.largeImage
                  }
                />
              </View>

              <View style={styles.rightColumn}>
                <Image
                  source={{
                    uri:
                      outfit.items.accessory,
                  }}
                  style={
                    styles.smallImage
                  }
                />

                <Image
                  source={{
                    uri: outfit.items.shoes,
                  }}
                  style={
                    styles.smallImage
                  }
                />
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      COLORS.background,
  },

  content: {
    paddingTop: 70,
    paddingHorizontal:
      SPACING.lg,
    paddingBottom: 140,
  },

  title: {
    fontSize:
      TYPOGRAPHY.h1.fontSize,

    lineHeight:
      TYPOGRAPHY.h1.lineHeight,

    fontWeight: '700',
    color: COLORS.text,

    marginBottom: SPACING.lg,
  },

  categories: {
    marginBottom: SPACING.xl,
  },

  categoryButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 12,

    marginRight: 10,
  },

  categoryActive: {
    backgroundColor:
      COLORS.primary,
  },

  categoryText: {
    fontSize:
      TYPOGRAPHY.body.fontSize,

    color:
      COLORS.textSecondary,

    fontWeight: '500',
  },

  categoryTextActive: {
    color: COLORS.white,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:
      'space-between',
  },

  card: {
    width: '48%',

    backgroundColor:
      COLORS.surface,

    borderRadius: 24,

    padding: 12,

    marginBottom: 16,

    position: 'relative',
  },

  favorite: {
    position: 'absolute',

    top: 12,
    right: 12,

    zIndex: 10,
  },

  images: {
    flexDirection: 'row',
  },

  leftColumn: {
    flex: 1,
    alignItems: 'center',
  },

  rightColumn: {
    justifyContent:
      'space-between',

    marginLeft: 8,
  },

  largeImage: {
    width: 82,
    height: 120,

    resizeMode: 'contain',
  },

  smallImage: {
    width: 44,
    height: 44,

    resizeMode: 'contain',
  },
})