import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '@/src/theme/colors'
import { SPACING } from '@/src/theme/spacing'
import { TYPOGRAPHY } from '@/src/theme/typography'
import { RADIUS } from '@/src/theme/radius'

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>
          Hola, Sophia ✨
        </Text>

        <Text style={styles.title}>
          ¿Qué look creamos hoy?
        </Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          A
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
    marginBottom: SPACING.xl,
  },

  textContainer: {
    flex: 1,
    paddingRight: SPACING.md,
  },

  greeting: {
    ...TYPOGRAPHY.body,

    color: COLORS.textSecondary,
    marginBottom: 6,
  },

  title: {
    ...TYPOGRAPHY.hero,

    color: COLORS.text,
    fontWeight: '700',
    letterSpacing: -1,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 999,

    backgroundColor: COLORS.primary,

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    ...TYPOGRAPHY.h3,

    color: COLORS.primary,
    fontWeight: '700',
  },
})