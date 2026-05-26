import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native'

import {
  COLORS,
  RADIUS,
  SPACING,
} from '@/src/theme'

interface Props {
  label: string
  active?: boolean
  onPress?: () => void
}

export function Chip({
  label,
  active,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,

        active &&
          styles.activeChip,
      ]}
    >
      <Text
        style={[
          styles.text,

          active &&
            styles.activeText,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  chip: {
    height: 40,

    paddingHorizontal:
      SPACING.md,

    borderRadius:
      RADIUS.full,

    backgroundColor:
      COLORS.surface,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
  },

  activeChip: {
    backgroundColor:
      COLORS.primary,
  },

  text: {
    color: COLORS.text,
  },

  activeText: {
    color: COLORS.white,
  },
})