import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { COLORS } from '@/src/theme/colors'
import { RADIUS } from '@/src/theme/radius'
import { SPACING } from '@/src/theme/spacing'
import { TYPOGRAPHY } from '@/src/theme/typography'

type Props = {
  title: string
  subtitle: string
}

export function RecentOutfitCard({
  title,
  subtitle,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 220,

    backgroundColor: COLORS.surface,

    borderRadius: RADIUS.xl,

    overflow: 'hidden',

    marginRight: SPACING.md,

    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 16,

    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 2,
  },

  image: {
    height: 240,

    backgroundColor: COLORS.surface,
  },

  content: {
    padding: SPACING.lg,
  },

  title: {
    ...TYPOGRAPHY.h3,

    color: COLORS.text,
    fontWeight: '700',

    marginBottom: 6,
  },

  subtitle: {
    ...TYPOGRAPHY.body,

    color: COLORS.textSecondary,
  },
})