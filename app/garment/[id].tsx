import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Keyboard,
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

import { launchImageLibraryAsync, MediaTypeOptions,} from "expo-image-picker";

import { replaceGarmentImage } from "@/src/services/garment.service";

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
  const { id: rawId } =
    useLocalSearchParams<{
      id: string;
    }>();

  const id =
    (Array.isArray(rawId)
      ? rawId[0]
      : rawId)?.trim();

  const removeGarment =
    useGarmentStore(
      (state) =>
        state.removeGarment
    );

  const updateGarmentStore =
    useGarmentStore(
      (state) =>
        state.updateGarment
    );

  const [garment, setGarment] =
    useState<Garment | null>(
      null
    );

  const [
    originalGarment,
    setOriginalGarment,
  ] = useState<Garment | null>(
    null
  )

  const [loading, setLoading] =
    useState(true);

  const [editing, setEditing] =
    useState(false);

  const [saving, setSaving] =
    useState(false);

  const [
    changingImage,
    setChangingImage
  ] = useState(false)

  const [deleting, setDeleting] =
    useState(false);

  useEffect(() => {
    async function loadGarment() {
      try {
        const data =
          await getGarmentById(id);

        const loaded = {
          id: data.id,
          imageUrl: data.image_url,
          category: data.category,
          color: data.color,
          season: data.season,
          style: data.style,
          createdAt: data.created_at,
        }

        setGarment(loaded);

        setOriginalGarment(loaded);

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

              router.replace(
                "/(tabs)/closet"
              );
            } finally {
              setDeleting(false);
            }
          },
        },
      ]
    );
  }

  async function handleSave() {
    if (!garment || !id) {
      return;
    }

    try {
      if (
        !garment
      ) {
        return;
      }

      if (
        !garment.category
        ?.trim()
      ) {
        Alert.alert(
          "Campo requerido",
          "Agrega una categoría"
        )

        return;
      }

      if ((garment.color ?? "").length > 30) {
        Alert.alert("Demasiado largo", "Color máximo 30 caracteres");

        return;
      }

      if ((garment.style ?? "").length > 40) {
        Alert.alert("Demasiado largo", "Estilo máximo 40 caracteres");

        return;
      }
      
      setSaving(true);

      const updated =
        await updateGarment(
          id,
          {
            category:
              garment.category,

            color:
              garment.color,

            season:
              garment.season,

            style:
              garment.style,
          }
        );

      const updatedGarment =
        {
          ...garment,

          imageUrl:
            updated.image_url,

          category:
            updated.category,

          color:
            updated.color,

          season:
            updated.season,

          style:
            updated.style,

          description:
            updated.description,

          tags:
            updated.tags,

          brand:
            updated.brand,

          aiProcessed:
            updated.ai_processed,

          createdAt:
            updated.created_at,
        };

      setGarment(
        updatedGarment
      );

      updateGarmentStore(
        updatedGarment
      );

      setOriginalGarment(
        updatedGarment
      )
      
      Keyboard.dismiss()

      setEditing(false);

      Alert.alert(
        "Éxito",
        "Prenda actualizada"
      );
    } catch {
      Alert.alert(
        "Error",
        "No se pudo actualizar"
      );
    } finally {
      setSaving(false);
    }
  }

  const hasChanges =
    JSON.stringify(
      garment
    ) !==
    JSON.stringify(
      originalGarment
    )

    function cancelEdit() {
      setGarment(
        originalGarment
      )

      setEditing(false)

      Keyboard.dismiss()
    }

  async function handleChangeImage() {
    if (!id) {
      return
    }

    try {
      const result =
        await launchImageLibraryAsync({
          mediaTypes:
            MediaTypeOptions.Images,

          quality: 0.8,
        })

      if (result.canceled) {
        return
      }

      setChangingImage(true)

      const updated =
        await replaceGarmentImage(
          id,
          result.assets[0].uri
        )

      const updatedGarment = {
        ...garment!,
        imageUrl:
          updated.image_url,
      }

      setGarment(
        updatedGarment
      )

      updateGarmentStore(
        updatedGarment
      )

      Alert.alert(
        "Éxito",
        "Imagen actualizada"
      )
    } catch (error) {
      console.log(error)

      Alert.alert(
        "Error",
        "No se pudo cambiar la imagen"
      )
    } finally {
      setChangingImage(false)
    }
  }


  if (loading) {
    return (
      <View style={styles.center}>
        <Text>
          Cargando...
        </Text>
      </View>
    );
  }

  if (!garment) {
    return (
      <View style={styles.center}>
        <Text>
          Prenda no encontrada
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
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

      <Pressable style={styles.editButton} onPress={handleChangeImage}>
        {changingImage ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.deleteText}>Cambiar foto</Text>
        )}
      </Pressable>

      <View style={styles.info}>
        {[
          {
            key: "category",
            label: "Categoría",
          },
          {
            key: "color",
            label: "Color",
          },
          {
            key: "season",
            label: "Temporada",
          },
          {
            key: "style",
            label: "Estilo",
          },
        ].map((field) => (
          <View key={field.key}>
            <Text style={styles.label}>{field.label}</Text>

            <TextInput
              editable={editing}
              placeholder={`Agregar ${field.label.toLowerCase()}`}
              value={(garment[field.key as keyof Garment] ?? "") as string}
              onChangeText={(
                text
              ) =>
                setGarment((prev) => ({
                  ...prev!,
                  [field.key]: text.trimStart(),
                }))
              }
              style={[styles.input, !editing && styles.inputDisabled]}
            />
          </View>
        ))}
      </View>

      <View
        style={{
          gap: 12,
        }}
      >
        <Pressable
          style={[
            styles.editButton,

            (!hasChanges || saving) && {
              opacity: 0.6,
            },
          ]}
          disabled={editing && !hasChanges}
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

        {editing && (
          <Pressable
            style={{
              alignItems: "center",
            }}
            onPress={cancelEdit}
          >
            <Text>Cancelar</Text>
          </Pressable>
        )}
      </View>

      <Pressable
        style={[styles.deleteButton, deleting && styles.deleteButtonDisabled]}
        onPress={handleDelete}
      >
        <Trash2 size={18} color="white" />

        <Text style={styles.deleteText}>Eliminar prenda</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles =
  StyleSheet.create({
    container: {
      paddingTop: 60,

      paddingHorizontal:
        SPACING.lg,

      paddingBottom: 40,
    },

    center: {
      flex: 1,

      justifyContent:
        "center",

      alignItems:
        "center",
    },

    header: {
      flexDirection:
        "row",

      alignItems:
        "center",

      gap: 16,

      marginBottom: 18,
    },

    title: {
      fontSize:
        TYPOGRAPHY.h2
          .fontSize,

      fontWeight:
        "700",

      color:
        COLORS.text,
    },

    image: {
      width: "100%",

      height: 220,

      resizeMode:
        "contain",

      borderRadius: 24,

      marginBottom: 18,

      backgroundColor:
        "#F8F8F8",
    },

    info: {
      gap: 8,
    },

    label: {
      fontWeight:
        "700",

      color:
        COLORS.text,
    },

    input: {
      height: 54,

      borderWidth: 1,

      borderColor:
        "#DDD",

      borderRadius: 16,

      paddingHorizontal: 16,

      marginTop: 8,

      marginBottom: 12,

      backgroundColor:
        "white",
    },

    inputDisabled: {
      backgroundColor:
        "#F5F5F5",
    },

    deleteButton: {
      marginTop: 12,

      height: 56,

      borderRadius: 16,

      backgroundColor:
        "#DC2626",

      flexDirection:
        "row",

      justifyContent:
        "center",

      alignItems:
        "center",

      gap: 8,
    },

    deleteButtonDisabled: {
      opacity: 0.7,
    },

    deleteText: {
      color: "white",

      fontWeight:
        "700",
    },

    editButton: {
      marginTop: 12,

      marginBottom: 24,

      height: 56,

      borderRadius: 16,

      backgroundColor:
        COLORS.primary,

      justifyContent:
        "center",

      alignItems:
        "center",
    },
  });
