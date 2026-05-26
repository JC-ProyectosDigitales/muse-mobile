import {
  TouchableOpacity,
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

interface Props {
  title: string
  icon: string
}

export default function QuickActionCard({
  title,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
    >
      <Text style={styles.emoji}>
        ✨
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 120,

    backgroundColor: COLORS.surface,

    borderRadius: RADIUS.xl,

    padding: SPACING.lg,

    justifyContent:
      'space-between',

    marginRight: SPACING.md,

    ...SHADOWS.card,
  },

  emoji: {
    fontSize: 28,
  },

  title: {
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.text,
  },
})