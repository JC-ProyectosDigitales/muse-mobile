import {
  ReactNode,
} from 'react'

import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'

import {
  COLORS,
  SPACING,
} from '@/src/theme'

interface Props {
  children: ReactNode
}

export function ScreenContainer({
  children,
}: Props) {
  return (
    <SafeAreaView
      style={styles.safe}
    >
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,

    backgroundColor:
      COLORS.background,
  },

  container: {
    flex: 1,

    paddingHorizontal:
      SPACING.lg,
  },
})