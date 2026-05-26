import {
  TextInput,
  StyleSheet,
} from 'react-native'

import {
  COLORS,
  RADIUS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

interface Props {
  placeholder: string
  value: string
  onChangeText: (
    text: string
  ) => void
}

export function Input({
  placeholder,
  value,
  onChangeText,
}: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={
        COLORS.textSecondary
      }
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 56,

    backgroundColor:
      COLORS.surface,

    borderRadius:
      RADIUS.lg,

    paddingHorizontal:
      SPACING.md,

    color: COLORS.text,

    fontSize:
      TYPOGRAPHY.body.fontSize,

    borderWidth: 1,

    borderColor:
      COLORS.border,
  },
})