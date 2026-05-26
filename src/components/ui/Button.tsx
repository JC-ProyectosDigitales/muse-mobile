import {
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native'

import {
  COLORS,
  RADIUS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

interface Props {
  title: string
  onPress: () => void
  style?: ViewStyle
}

export function Button({
  title,
  onPress,
  style,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 56,

    backgroundColor:
      COLORS.primary,

    borderRadius:
      RADIUS.full,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal:
      SPACING.lg,
  },

  pressed: {
    opacity: 0.85,

    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  text: {
    color: COLORS.white,

    fontSize:
      TYPOGRAPHY.body.fontSize,

    fontWeight: '600',
  },
})