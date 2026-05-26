import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { COLORS } from '../../src/theme/colors'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        HOME
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 32,
    fontWeight: '700',
  },
})