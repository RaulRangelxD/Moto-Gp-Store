import React, { useRef } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons'

const images = [
  require('@/assets/placeholder.webp'),
  require('@/assets/placeholder.webp'),
  require('@/assets/placeholder.webp'),
  require('@/assets/placeholder.webp'),
  require('@/assets/placeholder.webp'),
]

const CarouselExample = () => {
  const ref = useRef<ICarouselInstance>(null)
  const progress = useSharedValue<number>(0)

  const goToPrev = () => {
    ref.current?.scrollTo({ count: -1, animated: true })
  }

  const goToNext = () => {
    ref.current?.scrollTo({ count: 1, animated: true })
  }

  return (
    <View className='relative rounded'>
      <Carousel
        ref={ref}
        width={496}
        height={335}
        data={images}
        onProgressChange={progress}
        scrollAnimationDuration={500}
        autoPlay={true}
        autoPlayInterval={3000}
        renderItem={({ item }) => (
          <View className='w-full h-full justify-center items-center border-2 border-default-dark overflow-hidden rounded'>
            <Image source={item} resizeMode='contain' className='w-full h-full' />
          </View>
        )}
      />

      <TouchableOpacity onPress={goToPrev} className='absolute flex justify-center left-0 inset-y-0 p-2 rounded'>
        <ChevronLeftIcon className='text-default-dark' />
      </TouchableOpacity>

      <TouchableOpacity onPress={goToNext} className='absolute flex justify-center right-0 inset-y-0 p-2 rounded'>
        <ChevronRightIcon className='text-default-dark' />
      </TouchableOpacity>

      <Pagination.Basic
        progress={progress}
        data={images}
        dotStyle={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          width: 10,
          height: 10,
          borderRadius: 50,
        }}
        containerStyle={{ flexDirection: 'row', marginTop: 10 }}
        onPress={(index) => ref.current?.scrollTo({ count: index - progress.value, animated: true })}
      />
    </View>
  )
}

export default CarouselExample
