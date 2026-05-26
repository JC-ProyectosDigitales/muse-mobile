import { Tabs } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'

import { COLORS } from '../../src/theme/colors'

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

          borderRadius: 28,

          borderTopWidth: 0,

          backgroundColor: COLORS.white,

          elevation: 0,
        },

        tabBarActiveTintColor:
          COLORS.primary,

        tabBarInactiveTintColor:
          COLORS.textLight,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="closet"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="shirt-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="upload"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="add-circle"
              size={34}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="outfits"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="sparkles-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}