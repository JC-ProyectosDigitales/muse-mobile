import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

import {
  COLORS,
  RADIUS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

interface Props {
  label: string

  active?: boolean

  onPress?: () => void
}

export default function Chip({
  label,
  active,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        active && styles.active,
      ]}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,

    paddingVertical: SPACING.sm,

    borderRadius: RADIUS.full,

    backgroundColor: COLORS.surface,

    marginRight: SPACING.sm,
  },

  active: {
    backgroundColor: COLORS.primary,
  },

  text: {
    fontSize: TYPOGRAPHY.caption,

    color: COLORS.text,
  },

  activeText: {
    fontWeight: '600',
  },
})