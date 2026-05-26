import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { COLORS } from '../../src/theme/colors'

export default function UploadScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        UPLOAD
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