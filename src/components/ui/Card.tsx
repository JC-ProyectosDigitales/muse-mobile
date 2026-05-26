import {
  View,
  StyleSheet,
  ViewProps,
} from 'react-native'

import {
  COLORS,
  RADIUS,
  SHADOWS,
  SPACING,
} from '@/src/theme'

interface Props extends ViewProps {
  children: React.ReactNode
}

export default function Card({
  children,
  style,
}: Props) {
  return (
    <View
      style={[
        styles.card,
        style,
      ]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,

    borderRadius: RADIUS.lg,

    padding: SPACING.lg,

    ...SHADOWS.card,
  },
})