import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

interface Props {
  title: string
  subtitle?: string
}

export function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      {subtitle && (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom:
      SPACING.lg,
  },

  title: {
    fontSize:
      TYPOGRAPHY.h1.fontSize,

    fontWeight: '700',

    color: COLORS.text,
  },

  subtitle: {
    marginTop: 6,

    color:
      COLORS.textSecondary,

    fontSize:
      TYPOGRAPHY.body.fontSize,
  },
})