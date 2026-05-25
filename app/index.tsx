import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '@/styles/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MUSE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.background,

    justifyContent: 'center',

    alignItems: 'center',
  },

  logo: {
    fontSize: 42,

    fontWeight: '700',

    color: COLORS.text,
  },
});