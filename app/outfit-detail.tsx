import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native'

import {
  ArrowLeft,
  Bookmark,
  Camera,
  MoreHorizontal,
} from 'lucide-react-native'

import {
  router,
  useLocalSearchParams,
} from 'expo-router'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

export default function OutfitDetailScreen() {
  const { id } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
        >
          <ArrowLeft
            size={22}
            color={COLORS.text}
          />
        </Pressable>

        <Pressable>
          <MoreHorizontal
            size={22}
            color={COLORS.text}
          />
        </Pressable>
      </View>

      <Text style={styles.title}>
        Outfit casual
      </Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://i.imgur.com/0R9QZ6S.png',
          }}
          style={styles.shirt}
        />

        <Image
          source={{
            uri: 'https://i.imgur.com/JW9XK7n.png',
          }}
          style={styles.pants}
        />

        <Image
          source={{
            uri: 'https://i.imgur.com/BxQ9V7B.png',
          }}
          style={styles.bag}
        />

        <Image
          source={{
            uri: 'https://i.imgur.com/r8w2Y7M.png',
          }}
          style={styles.shoes}
        />
      </View>

      <View style={styles.infoRow}>
        <View>
          <Text style={styles.weatherTitle}>
            Perfecto para
          </Text>

          <Text style={styles.weather}>
            24°C • Soleado
          </Text>
        </View>

        <Pressable
          style={styles.circleButton}
        >
          <Camera
            size={20}
            color={COLORS.text}
          />
        </Pressable>
      </View>

      <Pressable
        style={styles.useButton}
      >
        <Text
          style={styles.useButtonText}
        >
          Usar este outfit
        </Text>
      </Pressable>

      <Pressable
        style={styles.bookmarkButton}
      >
        <Bookmark
          size={20}
          color={COLORS.text}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      COLORS.background,
    paddingTop: 60,
    paddingHorizontal:
      SPACING.lg,
  },

  header: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize:
      TYPOGRAPHY.h1.fontSize,

    lineHeight:
      TYPOGRAPHY.h1.lineHeight,

    fontWeight: '700',

    color: COLORS.text,

    marginBottom: 24,
  },

  card: {
    backgroundColor:
      COLORS.surface,

    borderRadius: 28,

    height: 450,

    position: 'relative',

    marginBottom: 24,
  },

  shirt: {
    position: 'absolute',
    top: 40,
    left: 50,

    width: 140,
    height: 160,

    resizeMode: 'contain',
  },

  pants: {
    position: 'absolute',
    top: 120,
    right: 40,

    width: 130,
    height: 240,

    resizeMode: 'contain',
  },

  bag: {
    position: 'absolute',
    bottom: 90,
    left: 50,

    width: 90,
    height: 90,

    resizeMode: 'contain',
  },

  shoes: {
    position: 'absolute',
    bottom: 70,
    left: 40,

    width: 100,
    height: 60,

    resizeMode: 'contain',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  weatherTitle: {
    fontSize:
      TYPOGRAPHY.body.fontSize,

    color:
      COLORS.textSecondary,
  },

  weather: {
    fontSize:
      TYPOGRAPHY.body.fontSize,

    fontWeight: '600',

    color: COLORS.text,

    marginTop: 4,
  },

  circleButton: {
    width: 52,
    height: 52,

    borderRadius: 26,

    borderWidth: 1,

    borderColor:
      COLORS.border,

    justifyContent: 'center',
    alignItems: 'center',
  },

  useButton: {
    height: 56,

    borderRadius: 18,

    backgroundColor:
      COLORS.primary,

    justifyContent: 'center',
    alignItems: 'center',
  },

  useButtonText: {
    color: COLORS.white,

    fontWeight: '600',

    fontSize:
      TYPOGRAPHY.body.fontSize,
  },

  bookmarkButton: {
    position: 'absolute',

    right: 24,
    bottom: 40,

    width: 52,
    height: 52,

    borderRadius: 26,

    borderWidth: 1,

    borderColor:
      COLORS.border,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor:
      COLORS.background,
  },
})