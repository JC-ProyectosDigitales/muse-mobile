import {
  View,
  Text,
  StyleSheet,
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

export default function Header({
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
    marginBottom: SPACING.xl,
  },

  title: {
    fontSize: TYPOGRAPHY.hero,
    fontWeight: '700',
    color: COLORS.text,
  },

  subtitle: {
    marginTop: SPACING.sm,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textSecondary,
  },
})