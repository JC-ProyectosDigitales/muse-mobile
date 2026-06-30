import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import {
  router,
} from "expo-router";

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from "@/src/theme";

import {
  getFavoriteGarments,
} from "@/src/services/garment.service";

import {
  Garment,
} from "@/src/types/garment";

export default function FavoritesScreen() {
  const [
    garments,
    setGarments,
  ] = useState<Garment[]>([])

  const [
    loading,
    setLoading,
  ] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getFavoriteGarments()

        setGarments(
          data.map(
            garment => ({
              id:
                garment.id,

              imageUrl:
                garment.image_url,

              category:
                garment.category,

              color:
                garment.color,

              season:
                garment.season,

              style:
                garment.style,

              isFavorite:
                garment.is_favorite,

              createdAt:
                garment.created_at,
            })
          )
        )
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return (
    <ScrollView
      style={
        styles.container
      }
      contentContainerStyle={
        styles.content
      }
    >
      <Text style={styles.title}>
        Favoritos
      </Text>

      {loading && (
        <Text>
          Cargando...
        </Text>
      )}

      {!loading &&
        garments.length === 0 && (
          <Text
            style={
              styles.empty
            }
          >
            No tienes favoritos
          </Text>
        )}

      <View style={styles.grid}>
        {garments.map(
          garment => (
            <Pressable
              key={
                garment.id
              }
              style={
                styles.card
              }
              onPress={() =>
                router.push({
                  pathname:
                    "/garment/[id]",

                  params: {
                    id:
                      garment.id,
                  },
                })
              }
            >
              <Image
                source={{
                  uri:
                    garment.imageUrl,
                }}
                style={
                  styles.image
                }
              />
            </Pressable>
          )
        )}
      </View>
    </ScrollView>
  )
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor:
        COLORS.background,
    },

    content: {
      paddingTop: 60,

      paddingHorizontal:
        SPACING.lg,

      paddingBottom: 120,
    },

    title: {
      ...TYPOGRAPHY.h2,

      marginBottom: 30,

      color:
        COLORS.text,
    },

    empty: {
      textAlign:
        "center",

      color:
        COLORS.textSecondary,
    },

    grid: {
      flexDirection:
        "row",

      flexWrap:
        "wrap",

      justifyContent:
        "space-between",
    },

    card: {
      width: "48%",

      marginBottom: 18,
    },

    image: {
      width: "100%",

      height: 200,

      borderRadius: 20,

      backgroundColor:
        "#F5F5F5",
    },
  });