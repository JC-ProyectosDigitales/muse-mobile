import { router } from 'expo-router'

import {
  View,
  ActivityIndicator,
} from 'react-native'

import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    router.replace({
      pathname: '/(tabs)/home',
    })
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator />
    </View>
  )
}