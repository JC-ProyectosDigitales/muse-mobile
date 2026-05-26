import { View, Text, StyleSheet } from 'react-native'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Good Morning
        </Text>

        <Text style={styles.title}>
          MUSE
        </Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          JC
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: SPACING.xl,
  },

  greeting: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textSecondary,

    marginBottom: 4,
  },

  title: {
    fontSize: TYPOGRAPHY.hero,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: -1,
  },

  avatar: {
    width: 52,
    height: 52,

    borderRadius: 999,

    backgroundColor: COLORS.primary,

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 18,
  },
})