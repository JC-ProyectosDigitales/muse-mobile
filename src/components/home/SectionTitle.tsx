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
  action?: string
}

export default function SectionTitle({
  title,
  action,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      {action && (
        <Text style={styles.action}>
          {action}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',

    marginBottom: SPACING.md,
  },

  title: {
    fontSize: TYPOGRAPHY.heading,
    fontWeight: '700',
    color: COLORS.text,
  },

  action: {
    color: COLORS.primary,
    fontWeight: '600',
  },
})