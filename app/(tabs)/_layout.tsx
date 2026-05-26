import { Tabs } from 'expo-router'

import {
  House,
  Shirt,
  Sparkles,
  Upload,
  User,
} from 'lucide-react-native'

import { BlurView }
  from 'expo-blur'

import {
  View,
  StyleSheet,
} from 'react-native'

import {
  COLORS,
  RADIUS,
  SHADOWS,
} from '@/src/theme'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',

          left: 20,
          right: 20,
          bottom: 24,

          height: 78,

          backgroundColor:COLORS.surface,

          borderRadius: 999,

          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',

          paddingHorizontal: 18,

          shadowColor: COLORS.black,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.08,
          shadowRadius: 20,

          elevation: 10,
        },

        tabBarBackground: () => (
          <BlurView
            intensity={80}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        ),

        tabBarActiveTintColor:
          COLORS.primary,

        tabBarInactiveTintColor:
          COLORS.textSecondary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <View
              style={styles.iconContainer}
            >
              <House
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="closet"
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <View
              style={styles.iconContainer}
            >
              <Shirt
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="upload"
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <View
              style={
                styles.uploadButton
              }
            >
              <Upload
                color={COLORS.white}
                size={24}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="outfits"
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <View
              style={styles.iconContainer}
            >
              <Sparkles
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({
            color,
            size,
          }) => (
            <View
              style={styles.iconContainer}
            >
              <User
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadButton: {
    width: 70,
    height: 70,

    borderRadius: 999,

    backgroundColor:
      COLORS.primary,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: -10,

    ...SHADOWS.floating,
  },
})