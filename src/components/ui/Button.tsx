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
  title: string
  onPress?: () => void
}

export default function Button({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 56,

    borderRadius: RADIUS.md,

    backgroundColor: COLORS.primary,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: SPACING.lg,
  },

  text: {
    fontSize: TYPOGRAPHY.body,

    fontWeight: '600',

    color: COLORS.text,
  },
})