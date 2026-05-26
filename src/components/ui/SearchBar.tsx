import {
  View,
  StyleSheet,
} from 'react-native'

import { Search }
  from 'lucide-react-native'

import { Input }
  from './Input'

import {
  COLORS,
} from '@/src/theme'

interface Props {
  value: string
  onChangeText: (
    text: string
  ) => void
}

export function SearchBar({
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Search
          size={20}
          color={
            COLORS.textSecondary
          }
        />
      </View>

      <Input
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  icon: {
    position: 'absolute',

    left: 18,
    top: 18,

    zIndex: 10,
  },
})