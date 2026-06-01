import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native'

import {
  useLocalSearchParams,
  router,
} from 'expo-router'

import {
  ArrowLeft,
} from 'lucide-react-native'

import {
  useEffect,
  useState,
} from 'react'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

import {
  getGarments,
} from '@/src/services/garment.service'

export default function GarmentScreen() {
  const { id } =
    useLocalSearchParams()

  const [
    garment,
    setGarment,
  ] = useState<any>(null)

  useEffect(() => {
    async function loadGarment() {
      const garments =
        await getGarments()

      const current =
        garments.find(
          item => item.id === id
        )

      setGarment(current)
    }

    loadGarment()
  }, [id])

  if (!garment) {
    return (
      <View
        style={[
          styles.container,
          {
            justifyContent:
              'center',
            alignItems:
              'center',
          },
        ]}
      >
        <Text>
          Cargando...
        </Text>
      </View>
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
    >
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

      <Image
        source={{
          uri:
            garment.image_url,
        }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {
            garment.category ||
            'Prenda'
          }
        </Text>

        <Text
          style={
            styles.label
          }
        >
          Categoría
        </Text>

        <Text
          style={
            styles.value
          }
        >
          {garment.category ||
            'Sin categoría'}
        </Text>

        <Text
          style={
            styles.label
          }
        >
          Color
        </Text>

        <Text
          style={
            styles.value
          }
        >
          {garment.color ||
            'No definido'}
        </Text>

        <Text
          style={
            styles.label
          }
        >
          Temporada
        </Text>

        <Text
          style={
            styles.value
          }
        >
          {garment.season ||
            'No definida'}
        </Text>

        <Text
          style={
            styles.label
          }
        >
          Estilo
        </Text>

        <Text
          style={
            styles.value
          }
        >
          {garment.style ||
            'No definido'}
        </Text>
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

    header: {
      paddingTop: 60,
      paddingHorizontal:
        SPACING.lg,
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

      alignItems:
        'center',
    },

    image: {
      width: '100%',
      height: 350,
    },

    content: {
      padding:
        SPACING.lg,
    },

    title: {
      fontSize: 28,

      fontWeight: '700',

      color:
        COLORS.text,

      marginBottom: 24,
    },

    label: {
      fontSize: 14,

      fontWeight: '600',

      color:
        COLORS.textSecondary,

      marginTop: 16,
    },

    value: {
      fontSize: 16,

      color:
        COLORS.text,

      marginTop: 4,
    },
  })