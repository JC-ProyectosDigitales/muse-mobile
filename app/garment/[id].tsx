import {
  View,
  Text,
  StyleSheet,
  Image,
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
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

export default function GarmentDetailScreen() {
  const { id } =
    useLocalSearchParams<{
      id: string
    }>()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() =>
            router.back()
          }
        >
          <ArrowLeft
            size={24}
            color={COLORS.text}
          />
        </Pressable>

        <Text style={styles.title}>
          Detalle de prenda
        </Text>
      </View>

      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
          }}
          style={styles.image}
        />

        <Text style={styles.label}>
          ID:
        </Text>

        <Text style={styles.value}>
          {id}
        </Text>
      </View>
    </View>
  )
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        COLORS.background,
      paddingTop: 60,
      paddingHorizontal:
        SPACING.lg,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      marginBottom: 24,
    },

    title: {
      fontSize:
        TYPOGRAPHY.h2.fontSize,
      fontWeight: '700',
      color: COLORS.text,
    },

    content: {
      alignItems: 'center',
    },

    image: {
      width: '100%',
      height: 320,
      borderRadius: 24,
      marginBottom: 24,
    },

    label: {
      fontSize:
        TYPOGRAPHY.body.fontSize,
      fontWeight: '600',
      color: COLORS.text,
    },

    value: {
      marginTop: 8,
      color:
        COLORS.textSecondary,
    },
  })