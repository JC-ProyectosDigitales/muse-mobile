import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native'

import Header
  from '@/src/components/home/Header'

import SectionTitle
  from '@/src/components/home/SectionTitle'

import QuickActionCard
  from '@/src/components/home/QuickActionCard'

import RecentOutfitCard
  from '@/src/components/home/RecentOutfitCard'

import {
  COLORS,
  SPACING,
} from '@/src/theme'

export default function HomeScreen() {
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
      <Header />

      <SectionTitle
        title="Quick Actions"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={
          false
        }
        style={styles.actions}
      >
        <QuickActionCard
          title="Upload Clothes"
          icon="camera"
        />

        <QuickActionCard
          title="Generate Outfit"
          icon="sparkles"
        />

        <QuickActionCard
          title="AI Styling"
          icon="shirt"
        />
      </ScrollView>

      <SectionTitle
        title="Recent Outfits"
        action="See all"
      />

      <RecentOutfitCard />

      <RecentOutfitCard />
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

  actions: {
    marginBottom: SPACING.xl,
  },
})