import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useEffect, useState } from "react";

import { router, useLocalSearchParams } from "expo-router";

import { ArrowLeft, Trash2 } from "lucide-react-native";

import { COLORS, SPACING, TYPOGRAPHY } from "@/src/theme";

import {
  deleteGarment,
  getGarmentById,
  updateGarment,
} from "@/src/services/garment.service";

import { useGarmentStore } from "@/src/store/garmentStore";

import { Garment } from "@/src/types/garment";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error && "message" in error) {
    return String((error as { message: unknown }).message);
  }

  return "No se pudo eliminar la prenda. Inténtalo de nuevo.";
}

export default function GarmentDetailScreen() {
  const { id: rawId } = useLocalSearchParams<{
    id: string;
  }>();

  const id = (Array.isArray(rawId) ? rawId[0] : rawId)?.trim();

  const removeGarment = useGarmentStore((state) => state.removeGarment);

  const updateGarmentStore = useGarmentStore((state) => state.updateGarment);

  const [garment, setGarment] = useState<Garment | null>(null);

  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState(false);

  const [saving, setSaving] = useState(false);

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function loadGarment() {
      try {
        const data = await getGarmentById(id);

        setGarment({
          id: data.id,
          imageUrl: data.image_url,
          category: data.category,
          color: data.color,
          season: data.season,
          style: data.style,
          createdAt: data.created_at,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadGarment();
    }
  }, [id]);

  async function handleDelete() {
    if (!id || deleting) {
      return;
    }

    Alert.alert(
      "Eliminar prenda",
      "Esta acción no se puede deshacer. ¿Deseas eliminar esta prenda?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            setDeleting(true);

            try {
              await deleteGarment(id);

              removeGarment(id);

              router.replace("/(tabs)/closet");
            } catch (error) {
              Alert.alert("Error", getErrorMessage(error));
            } finally {
              setDeleting(false);
            }
          },
        },
      ],
    );
  }

  async function handleSave() {
    if (!garment || !id) {
      return;
    }

    try {
      setSaving(true);

      const updated = await updateGarment(id, {
        category: garment.category,

        color: garment.color,

        season: garment.season,

        style: garment.style,
      });

      const updatedGarment = {
        ...garment,
        ...updated,
      };

      setGarment(updatedGarment);

      updateGarmentStore(updatedGarment);

      setEditing(false);

      Alert.alert("Éxito", "Prenda actualizada");
    } catch (error) {
      console.log(error);

      Alert.alert("Error", "No se pudo actualizar");
    } finally {
      setSaving(false);
    }
  }

  if (!garment) {
    return (
      <View style={styles.center}>
        <Text>Prenda no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <ArrowLeft size={24} color={COLORS.text} />
        </Pressable>

        <Text style={styles.title}>Detalle</Text>
      </View>

      <Image
        source={{
          uri: garment.imageUrl,
        }}
        style={styles.image}
      />

      <View style={styles.info}>
        {["category", "color", "season", "style"].map((field) => (
          <View key={field}>
            <Text style={styles.label}>{field}</Text>

            <TextInput
              editable={editing}
              value={(garment[field as keyof Garment] ?? "") as string}
              onChangeText={(text) =>
                setGarment((prev) => ({
                  ...prev!,
                  [field]: text,
                }))
              }
              style={[styles.input, !editing && styles.inputDisabled]}
            />
          </View>
        ))}
      </View>

      <Pressable
        style={[styles.deleteButton, deleting && styles.deleteButtonDisabled]}
        onPress={handleDelete}
        disabled={deleting}
      >
        {deleting ? (
          <ActivityIndicator color="white" />
        ) : (
          <Trash2 size={18} color="white" />
        )}

        <Text style={styles.deleteText}>
          {deleting ? "Eliminando..." : "Eliminar prenda"}
        </Text>
      </Pressable>
      <Pressable
        style={styles.editButton}
        onPress={editing ? handleSave : () => setEditing(true)}
      >
        {saving ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.deleteText}>
            {editing ? "Guardar cambios" : "Editar"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 60,
    paddingHorizontal: SPACING.lg,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },

  title: {
    fontSize: TYPOGRAPHY.h2.fontSize,
    fontWeight: "700",
    color: COLORS.text,
  },

  image: {
    width: "100%",
    height: 320,
    borderRadius: 24,
    marginBottom: 24,
  },

  info: {
    gap: 8,
  },

  label: {
    fontWeight: "700",
    color: COLORS.text,
  },

  value: {
    marginBottom: 12,
    color: COLORS.textSecondary,
  },

  deleteButton: {
    marginTop: 24,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#DC2626",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  deleteButtonDisabled: {
    opacity: 0.7,
  },

  deleteText: {
    color: "white",
    fontWeight: "700",
  },

  input: {
    height: 54,

    borderWidth: 1,

    borderColor: "#DDD",

    borderRadius: 16,

    paddingHorizontal: 16,

    marginTop: 8,

    marginBottom: 12,

    backgroundColor: "white",
  },

  inputDisabled: {
    backgroundColor: "#F5F5F5",
  },

  editButton: {
    marginTop: 12,

    height: 56,

    borderRadius: 16,

    backgroundColor: COLORS.primary,

    justifyContent: "center",

    alignItems: "center",
  },
});
