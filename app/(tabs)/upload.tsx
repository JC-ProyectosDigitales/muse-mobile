import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native'

import {
  ArrowLeft,
  Camera,
  ImagePlus,
} from 'lucide-react-native'

import * as ImagePicker from 'expo-image-picker'

import { router } from 'expo-router'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

import {
  uploadImage,
  createGarment,
} from '@/src/services/garment.service'

import { useGarmentStore } from '@/src/store/garmentStore'

export default function UploadScreen() {
  const addGarment =
    useGarmentStore(
      state => state.addGarment
    )

  async function pickImage() {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (!permission.granted) {
        Alert.alert(
          'Permiso requerido',
          'Debes permitir acceso a tu galería'
        )
        return
      }

      const result =
        await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes:
              ImagePicker.MediaTypeOptions.Images,

            quality: 0.8,
          }
        )

      if (result.canceled) {
        return
      }

      const imageUri =
        result.assets[0].uri

      const imageUrl =
        await uploadImage(
          imageUri
        )

      const created =
        await createGarment({
          imageUrl,
          category:
            'Sin categoría',
        })

      if (
        !created ||
        created.length === 0
      ) {
        throw new Error(
          'No se pudo crear la prenda'
        )
      }

      const garment =
        created[0]

      addGarment({
        id: garment.id,
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
        createdAt:
          garment.created_at,
      })

      router.push('/closet')
    } catch (error: any) {
      console.log(
        'UPLOAD ERROR:',
        error
      )

      Alert.alert(
        JSON.stringify(error))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() =>
            router.back()
          }
        >
          <ArrowLeft
            size={20}
            color={COLORS.text}
          />
        </Pressable>
      </View>

      <Text style={styles.title}>
        Subir prenda
      </Text>

      <Text style={styles.subtitle}>
        Toma una foto{'\n'}o elige de tu galería
      </Text>

      <View style={styles.uploadBox}>
        <Camera
          size={42}
          color={
            COLORS.textSecondary
          }
        />
      </View>

      <Pressable
        style={styles.primaryButton}
      >
        <Text
          style={
            styles.primaryButtonText
          }
        >
          Tomar foto
        </Text>
      </Pressable>

      <Text style={styles.separator}>
        o
      </Text>

      <Pressable
        style={styles.secondaryButton}
        onPress={pickImage}
      >
        <ImagePlus
          size={18}
          color={COLORS.text}
        />

        <Text
          style={
            styles.secondaryButtonText
          }
        >
          Elegir de galería
        </Text>
      </Pressable>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>
          Tip para mejores
          resultados
        </Text>

        <View
          style={styles.tipContent}
        >
          <View
            style={styles.tipList}
          >
            <Text
              style={styles.tipItem}
            >
              • Fondo neutro
            </Text>

            <Text
              style={styles.tipItem}
            >
              • Buena iluminación
            </Text>

            <Text
              style={styles.tipItem}
            >
              • Prenda completa
              visible
            </Text>
          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop',
            }}
            style={styles.preview}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      COLORS.background,
    paddingTop: 50,
    paddingHorizontal:
      SPACING.lg,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor:
      COLORS.surface,
    justifyContent:
      'center',
    alignItems: 'center',
  },

  title: {
    fontSize:
      TYPOGRAPHY.h1.fontSize,
    lineHeight:
      TYPOGRAPHY.h1.lineHeight,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },

  subtitle: {
    fontSize:
      TYPOGRAPHY.body.fontSize,
    lineHeight:
      TYPOGRAPHY.body.lineHeight,
    color:
      COLORS.textSecondary,
    marginBottom: 20,
  },

  uploadBox: {
    height: 200,
    borderRadius: 28,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor:
      COLORS.border,
    backgroundColor:
      COLORS.surface,
    justifyContent:
      'center',
    alignItems: 'center',
    marginBottom: 28,
  },

  primaryButton: {
    height: 56,
    borderRadius: 18,
    backgroundColor:
      COLORS.primary,
    justifyContent:
      'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryButtonText: {
    fontSize:
      TYPOGRAPHY.body.fontSize,
    lineHeight:
      TYPOGRAPHY.body.lineHeight,
    fontWeight: '600',
    color: COLORS.white,
  },

  separator: {
    textAlign: 'center',
    color:
      COLORS.textSecondary,
    marginBottom: 12,
  },

  secondaryButton: {
    height: 56,
    borderRadius: 18,
    backgroundColor:
      COLORS.surface,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    flexDirection: 'row',
    justifyContent:
      'center',
    alignItems: 'center',
    marginBottom: 28,
  },

  secondaryButtonText: {
    marginLeft: 10,
    fontSize:
      TYPOGRAPHY.body.fontSize,
    lineHeight:
      TYPOGRAPHY.body.lineHeight,
    color: COLORS.text,
    fontWeight: '500',
  },

  tipContainer: {
    backgroundColor:
      COLORS.surface,
    borderRadius: 24,
    padding: 20,
  },

  tipContent: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  tipList: {
    flex: 1,
    marginRight: 12,
  },

  tipTitle: {
    fontSize:
      TYPOGRAPHY.body.fontSize,
    lineHeight:
      TYPOGRAPHY.body.lineHeight,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 14,
  },

  tipItem: {
    fontSize:
      TYPOGRAPHY.bodySmall.fontSize,
    lineHeight:
      TYPOGRAPHY.bodySmall.lineHeight,
    color:
      COLORS.textSecondary,
    marginBottom: 8,
  },

  previewContainer: {
    marginTop: 12,
  },

  preview: {
    width: 72,
    height: 96,
    borderRadius: 12,
  },
})