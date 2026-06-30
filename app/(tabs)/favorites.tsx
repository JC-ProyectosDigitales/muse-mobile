import { StyleSheet, Text, View } from "react-native";

import { COLORS, TYPOGRAPHY } from "@/src/theme";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

      <Text style={styles.subtitle}>
        Aquí aparecerán tus outfits y prendas favoritas.
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
