import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { COLORS } from '../../src/theme/colors'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        PROFILE
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