import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import {
  COLORS,
  RADIUS,
  SHADOWS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

export default function RecentOutfitCard() {
  return (
    <View style={styles.card}>
      <View style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Minimal Beige Fit
        </Text>

        <Text style={styles.subtitle}>
          Smart Casual
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,

    borderRadius: RADIUS.xl,

    overflow: 'hidden',

    marginBottom: SPACING.lg,

    ...SHADOWS.card,
  },

  image: {
    height: 220,
    backgroundColor: '#E9E4DD',
  },

  content: {
    padding: SPACING.lg,
  },

  title: {
    fontSize: TYPOGRAPHY.title,
    fontWeight: '700',
    color: COLORS.text,

    marginBottom: 4,
  },

  subtitle: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.body,
  },
})