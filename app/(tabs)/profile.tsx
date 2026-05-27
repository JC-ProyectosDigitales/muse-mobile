import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native'

import {
  Settings,
  Bell,
  User,
  ChartColumn,
  Heart,
  Calendar,
  CircleHelp,
  ChevronRight,
} from 'lucide-react-native'

import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@/src/theme'

const menuItems = [
  {
    id: '1',
    title: 'Mi perfil',
    icon: User,
  },

  {
    id: '2',
    title: 'Estadísticas de estilo',
    icon: ChartColumn,
  },

  {
    id: '3',
    title: 'Favoritos',
    icon: Heart,
  },

  {
    id: '4',
    title: 'Calendario',
    icon: Calendar,
  },

  {
    id: '5',
    title: 'Ajustes',
    icon: Settings,
  },

  {
    id: '6',
    title: 'Ayuda & Soporte',
    icon: CircleHelp,
  },
]

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={
        styles.content
      }
      showsVerticalScrollIndicator={
        false
      }
    >
      <View style={styles.topBar}>
        <Pressable style={styles.iconButton}>
          <Settings
            size={22}
            color={COLORS.text}
          />
        </Pressable>

        <Pressable style={styles.iconButton}>
          <Bell
            size={22}
            color={COLORS.text}
          />
        </Pressable>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://i.imgur.com/6VBx3io.png',
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>
          Ana Sofia
        </Text>

        <Text style={styles.bio}>
          Amante de la moda minimalista
          {'\n'}
          y los colores neutros.
        </Text>
      </View>

      <View style={styles.menu}>
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <Pressable
              key={item.id}
              style={styles.menuItem}
            >
              <View
                style={styles.menuLeft}
              >
                <Icon
                  size={20}
                  color={
                    COLORS.textSecondary
                  }
                />

                <Text
                  style={
                    styles.menuText
                  }
                >
                  {item.title}
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
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      COLORS.background,
  },

  content: {
    paddingTop: 70,
    paddingHorizontal:
      SPACING.lg,

    paddingBottom: 140,
  },

  topBar: {
    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',

    marginBottom: 40,
  },

  iconButton: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },

  profileSection: {
    alignItems: 'center',

    marginBottom: 42,
  },

  avatar: {
    width: 96,
    height: 96,

    borderRadius: 999,
    marginBottom: 18,
  },

  name: {
    fontSize:
      TYPOGRAPHY.h1.fontSize,

    lineHeight:
      TYPOGRAPHY.h1.lineHeight,

    fontWeight: '700',

    color: COLORS.text,

    marginBottom: 10,
  },

  bio: {
    fontSize:
      TYPOGRAPHY.body.fontSize,

    lineHeight:
      TYPOGRAPHY.body.lineHeight,

    color:
      COLORS.textSecondary,

    textAlign: 'center',
  },

  menu: {
    backgroundColor:
      COLORS.surface,

    borderRadius: 28,

    overflow: 'hidden',
  },

  menuItem: {
    flexDirection: 'row',

    justifyContent:
      'space-between',

    alignItems: 'center',

    paddingVertical: 22,

    paddingHorizontal: 22,

    borderBottomWidth: 1,

    borderBottomColor:
      COLORS.border,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    marginLeft: 16,

    fontSize:
      TYPOGRAPHY.body.fontSize,

    lineHeight:
      TYPOGRAPHY.body.lineHeight,

    color: COLORS.text,

    fontWeight: '500',
  },
})