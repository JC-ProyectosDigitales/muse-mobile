import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native'

import {
  useEffect,
  useState,
} from 'react'

import {
  useLocalSearchParams,
  router,
} from 'expo-router'

import {
  getGarmentById,
  deleteGarment,
} from '@/src/services/garment.service'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

export default function GarmentDetail() {
  const { id } =
    useLocalSearchParams()

  const [
    garment,
    setGarment,
  ] = useState<any>(null)

  useEffect(() => {
    async function load() {
      const data =
        await getGarmentById(
          id as string
        )

      setGarment(data)
    }

    load()
  }, [])

  async function handleDelete() {
    Alert.alert(
      'Eliminar prenda',
      '¿Deseas eliminar esta prenda?',
      [
        {
          text:
            'Cancelar',
        },

        {
          text:
            'Eliminar',

          style:
            'destructive',

          onPress:
            async () => {
              await deleteGarment(
                id as string
              )

              router.replace(
                '/(tabs)/closet'
              )
            },
        },
      ]
    )
  }

  if (!garment) {
    return (
      <View
        style={
          styles.center
        }
      >
        <Text>
          Cargando...
        </Text>
      </View>
    )
  }

  return (
    <ScrollView
      style={
        styles.container
      }
    >
      <Image
        source={{
          uri:
            garment.image_url,
        }}
        style={
          styles.image
        }
      />

      <View
        style={
          styles.content
        }
      >
        <Text
          style={
            styles.title
          }
        >
          {
            garment.category
          }
        </Text>

        <Text>
          Color:{' '}
          {
            garment.color
          }
        </Text>

        <Text>
          Temporada:{' '}
          {
            garment.season
          }
        </Text>

        <Text>
          Estilo:{' '}
          {
            garment.style
          }
        </Text>

        <Pressable
          style={
            styles.editButton
          }
        >
          <Text>
            Editar
          </Text>
        </Pressable>

        <Pressable
          style={
            styles.deleteButton
          }
          onPress={
            handleDelete
          }
        >
          <Text
            style={{
              color:
                'white',
            }}
          >
            Eliminar
          </Text>
        </Pressable>
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

    image: {
      width: '100%',

      height: 350,
    },

    content: {
      padding:
        SPACING.lg,
    },

    title: {
      fontSize:
        TYPOGRAPHY.h1.fontSize,

      fontWeight:
        '700',

      marginBottom: 20,
    },

    editButton: {
      marginTop: 30,

      padding: 16,

      borderRadius: 16,

      backgroundColor:
        COLORS.surface,
    },

    deleteButton: {
      marginTop: 12,

      padding: 16,

      borderRadius: 16,

      backgroundColor:
        'red',

      alignItems:
        'center',
    },

    center: {
      flex: 1,

      justifyContent:
        'center',

      alignItems:
        'center',
    },
  })