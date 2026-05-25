import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MUSE</Text>
      <Text style={styles.subtitle}>
        AI Fashion Assistant
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 42,
    fontWeight: '700',
    color: '#111111',
    letterSpacing: 2,
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: '#777777',
  },
});