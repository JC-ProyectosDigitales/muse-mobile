import {
  SafeAreaView,
  StyleSheet,
  ViewProps,
} from 'react-native'

import { COLORS } from '@/src/theme'

interface Props extends ViewProps {
  children: React.ReactNode
}

export default function Screen({
  children,
  style,
}: Props) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
})