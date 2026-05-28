import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'

import {
  Check,
} from 'lucide-react-native'

import Svg, {
  Circle,
} from 'react-native-svg'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

const progress = 78

const radius = 120
const strokeWidth = 10

const circumference =
  2 * Math.PI * radius

const strokeDashoffset =
  circumference -
  (circumference * progress) / 100

const detectedAttributes = [
  'Tipo de prenda',
  'Color',
  'Estilo',
  'Temporada',
  'Ocasión',
]

export default function AnalyzeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Analizando tu prenda...
      </Text>

      <Text style={styles.subtitle}>
        Nuestra IA está detectando
        {'\n'}
        detalles importantes.
      </Text>

      <View style={styles.progressWrapper}>
        <Svg
          width={280}
          height={280}
        >
          <Circle
            cx="140"
            cy="140"
            r={radius}
            stroke={COLORS.border}
            strokeWidth={strokeWidth}
            fill="none"
          />

          <Circle
            cx="140"
            cy="140"
            r={radius}
            stroke={COLORS.primary}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={
              circumference
            }
            strokeDashoffset={
              strokeDashoffset
            }
            strokeLinecap="round"
            rotation="-90"
            origin="140,140"
          />
        </Svg>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600',
            }}
            style={styles.image}
          />

          <Text style={styles.percent}>
            {progress}%
          </Text>
        </View>
      </View>

      <View style={styles.attributes}>
        {detectedAttributes.map(
          (item) => (
            <View
              key={item}
              style={styles.attributeRow}
            >
              <Text
                style={
                  styles.attributeText
                }
              >
                {item}
              </Text>

              <Check
                size={18}
                color={COLORS.primary}
              />
            </View>
          )
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:
      COLORS.background,

    paddingTop: 70,

    paddingHorizontal:
      SPACING.lg,
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

    marginBottom: 40,
  },

  progressWrapper: {
    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 50,
  },

  imageContainer: {
    position: 'absolute',

    alignItems: 'center',
  },

  image: {
    width: 140,

    height: 140,

    resizeMode: 'contain',
  },

  percent: {
    marginTop: 12,

    fontSize:
      TYPOGRAPHY.h3.fontSize,

    lineHeight:
      TYPOGRAPHY.h3.lineHeight,

    fontWeight: '700',

    color: COLORS.primary,
  },

  attributes: {
    marginTop: 10,
  },

  attributeRow: {
    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',

    paddingVertical: 16,

    borderBottomWidth: 1,

    borderBottomColor:
      COLORS.border,
  },

  attributeText: {
    fontSize:
      TYPOGRAPHY.body.fontSize,

    lineHeight:
      TYPOGRAPHY.body.lineHeight,

    color: COLORS.text,
  },
})