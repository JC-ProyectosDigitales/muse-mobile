import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native'

import {
  ArrowLeft,
  ChevronRight,
  Pencil,
  Trash2,
  MoreHorizontal,
} from 'lucide-react-native'

import { router } from 'expo-router'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

const garment = {
  name: 'Blusa oversize',

  image:
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800',

  color: 'Lavanda',

  style: 'Casual',

  season:
    'Primavera / Verano',

  occasion: 'Diario',
}

export default function GarmentDetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() =>
            router.back()
          }
        >
          <ArrowLeft
            size={22}
            color={COLORS.text}
          />
        </Pressable>

        <Pressable>
          <MoreHorizontal
            size={22}
            color={COLORS.text}
          />
        </Pressable>
      </View>

      <Image
        source={{
          uri: garment.image,
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {garment.name}
      </Text>

      <View style={styles.infoCard}>
        <AttributeRow
          label="Color"
          value={garment.color}
        />

        <AttributeRow
          label="Estilo"
          value={garment.style}
        />

        <AttributeRow
          label="Temporada"
          value={garment.season}
        />

        <AttributeRow
          label="Ocasión"
          value={garment.occasion}
        />
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.iconButton}
        >
          <Pencil
            size={20}
            color={COLORS.text}
          />
        </Pressable>

        <Pressable
          style={styles.iconButton}
        >
          <Trash2
            size={20}
            color={COLORS.text}
          />
        </Pressable>
      </View>

      <Pressable
        style={styles.saveButton}
      >
        <Text
          style={styles.saveText}
        >
          Guardar en mi clóset
        </Text>
      </Pressable>
    </View>
  )
}

type AttributeProps = {
  label: string
  value: string
}

function AttributeRow({
  label,
  value,
}: AttributeProps) {
  return (
    <Pressable style={styles.row}>
      <View>
        <Text style={styles.label}>
          {label}
        </Text>

        <Text style={styles.value}>
          {value}
        </Text>
      </View>

      <ChevronRight
        size={18}
        color={
          COLORS.textSecondary
        }
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
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

    justifyContent:
      'space-between',

    alignItems: 'center',

    marginBottom: 20,
  },

  image: {
    width: '100%',

    height: 280,

    resizeMode: 'contain',

    marginBottom: 24,
  },

  title: {
    fontSize:
      TYPOGRAPHY.h2.fontSize,

    lineHeight:
      TYPOGRAPHY.h2.lineHeight,

    fontWeight: '700',

    color: COLORS.text,

    marginBottom: 20,
  },

  infoCard: {
    backgroundColor:
      COLORS.surface,

    borderRadius: 20,

    overflow: 'hidden',
  },

  row: {
    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',

    paddingVertical: 16,

    paddingHorizontal: 18,

    borderBottomWidth: 1,

    borderBottomColor:
      COLORS.border,
  },

  label: {
    fontSize:
      TYPOGRAPHY.caption.fontSize,

    lineHeight:
      TYPOGRAPHY.caption.lineHeight,

    color:
      COLORS.textSecondary,

    marginBottom: 4,
  },

  value: {
    fontSize:
      TYPOGRAPHY.body.fontSize,

    lineHeight:
      TYPOGRAPHY.body.lineHeight,

    color: COLORS.text,

    fontWeight: '500',
  },

  actions: {
    flexDirection: 'row',

    marginTop: 18,

    marginBottom: 28,
  },

  iconButton: {
    width: 46,

    height: 46,

    borderRadius: 14,

    backgroundColor:
      COLORS.surface,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 12,
  },

  saveButton: {
    height: 58,

    borderRadius: 18,

    backgroundColor:
      COLORS.primary,

    justifyContent: 'center',

    alignItems: 'center',
  },

  saveText: {
    color: COLORS.white,

    fontWeight: '600',

    fontSize:
      TYPOGRAPHY.body.fontSize,

    lineHeight:
      TYPOGRAPHY.body.lineHeight,
  },
})