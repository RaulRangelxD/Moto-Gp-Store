import React from 'react'
import { View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'

export default function AnimationTest() {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onTouchStart={() => {
        scale.value = withSpring(1.5, { damping: 8 })
      }}
      onTouchEnd={() => {
        scale.value = withSpring(1, { damping: 8 })
      }}
    >
      <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'blue', borderRadius: 50 }, animatedStyle]} />
    </View>
  )
}
