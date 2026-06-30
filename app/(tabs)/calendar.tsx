import { StyleSheet, Text, View } from "react-native";

import { COLORS, TYPOGRAPHY } from "@/src/theme";

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendario</Text>

      <Text style={styles.subtitle}>
        Aquí podrás planear y organizar outfits.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  title: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
    marginBottom: 12,
  },

  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});
