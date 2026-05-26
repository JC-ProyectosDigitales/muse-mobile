import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { Ionicons }
from '@expo/vector-icons'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

interface Props {
  title: string

  description: string
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="sparkles-outline"
        size={52}
        color={COLORS.textSecondary}
      />

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: SPACING.xl,
  },

  title: {
    marginTop: SPACING.lg,

    ...TYPOGRAPHY.h3,
    fontWeight: '700',

    color: COLORS.text,
  },

  description: {
    marginTop: SPACING.sm,

    ...TYPOGRAPHY.body,

    textAlign: 'center',

    color: COLORS.textSecondary,

    lineHeight: 24,
  },
})