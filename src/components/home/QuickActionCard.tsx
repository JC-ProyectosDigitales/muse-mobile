import React from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { COLORS } from '@/src/theme/colors'
import { RADIUS } from '@/src/theme/radius'
import { SPACING } from '@/src/theme/spacing'
import { TYPOGRAPHY } from '@/src/theme/typography'

type Props = {
  emoji: string
  title: string
  onPress?: () => void
}

export function QuickActionCard({
  emoji,
  title,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.emoji}>
          {emoji}
        </Text>
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '48%',

    backgroundColor: COLORS.surface,

    borderRadius: RADIUS.xl,

    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,

    marginBottom: SPACING.md,

    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 16,

    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 2,
  },

  iconContainer: {
    width: 54,
    height: 54,

    borderRadius: 18,

    backgroundColor: COLORS.primary,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: SPACING.md,
  },

  emoji: {
    fontSize: 26,
  },

  title: {
    ...TYPOGRAPHY.body,

    color: COLORS.text,
    fontWeight: '600',
    lineHeight: 24,
  },
})