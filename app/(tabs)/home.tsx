import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { CalendarDays, Heart, Shirt, Sparkles } from "lucide-react-native";

import { Header } from "@/src/components/home/Header";

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "@/src/theme";

import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Header />

      <Text style={styles.subtitle}>Lista para crear</Text>

      <Text style={styles.heading}>algo increíble hoy?</Text>

      <Pressable style={styles.suggestionCard}>
        <View style={styles.suggestionContent}>
          <Text style={styles.suggestionLabel}>Sugerencia del día</Text>

          <Text style={styles.suggestionLink}>Ver outfit →</Text>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
          }}
          style={styles.suggestionImage}
        />
      </Pressable>

      <Text style={styles.sectionTitle}>Accesos rápidos</Text>

      <View style={styles.grid}>
        <Pressable
          style={styles.quickCard}
          onPress={() => router.push("/closet")}
        >
          <Shirt size={22} color={COLORS.text} strokeWidth={1.8} />

          <Text style={styles.quickText}>Mi clóset</Text>
        </Pressable>

        <Pressable
          style={styles.quickCard}
          onPress={() => router.push("/outfits")}
        >
          <Sparkles size={22} color={COLORS.text} strokeWidth={1.8} />

          <Text style={styles.quickText}>Outfits</Text>
        </Pressable>

        <Pressable
          style={styles.quickCard}
          onPress={() => router.push("/favorites")}
        >
          <Heart size={22} color={COLORS.text} strokeWidth={1.8} />

          <Text style={styles.quickText}>Favoritos</Text>
        </Pressable>

        <Pressable
          style={styles.quickCard}
          onPress={() => router.push("/calendar")}
        >
          <CalendarDays size={22} color={COLORS.text} strokeWidth={1.8} />

          <Text style={styles.quickText}>Calendario</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingTop: 35,
    paddingHorizontal: SPACING.lg,

    paddingBottom: 140,
  },

  subtitle: {
    ...TYPOGRAPHY.bodySmall,

    color: COLORS.textSecondary,

    marginBottom: 4,
  },

  heading: {
    ...TYPOGRAPHY.h2,

    color: COLORS.text,

    fontWeight: "700",

    marginBottom: SPACING.xl,
  },

  suggestionCard: {
    height: 170,

    backgroundColor: "#E9DDFC",

    borderRadius: RADIUS.xl,

    padding: SPACING.lg,

    marginBottom: SPACING.xl,

    overflow: "hidden",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  suggestionContent: {
    flex: 1,
    zIndex: 2,
  },

  suggestionLabel: {
    ...TYPOGRAPHY.body,

    color: COLORS.text,

    fontWeight: "600",

    marginBottom: 10,
  },

  suggestionLink: {
    ...TYPOGRAPHY.bodySmall,

    color: COLORS.textSecondary,
  },

  suggestionImage: {
    width: 150,
    height: 185,

    resizeMode: "cover",

    position: "absolute",
    right: -8,
    bottom: 0,
  },

  sectionTitle: {
    ...TYPOGRAPHY.body,

    color: COLORS.text,

    fontWeight: "700",

    marginBottom: SPACING.lg,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  quickCard: {
    width: "48%",

    backgroundColor: COLORS.surface,

    borderRadius: RADIUS.xl,

    paddingVertical: 24,
    paddingHorizontal: 18,

    marginBottom: SPACING.md,

    borderWidth: 1,
    borderColor: "#F3F3F3",

    gap: 14,
  },

  quickText: {
    ...TYPOGRAPHY.body,

    color: COLORS.text,

    fontWeight: "600",
  },
});
