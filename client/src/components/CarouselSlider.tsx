import React, { useState, useEffect } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

const images = [
  require('@/assets/placeholder.webp'),
  require('@/assets/placeholder.webp'),
  require('@/assets/placeholder.webp'),
  require('@/assets/placeholder.webp'),
  require('@/assets/placeholder.webp'),
]

const CarouselExample = () => {
  const [imageDimensions, setImageDimensions] = useState({ width: 500, height: 350 }) // Tamaño por defecto
  const [containerDimensions, setContainerDimensions] = useState({ width: 500, height: 350 })

  const handleContainerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout // Obtener las dimensiones del contenedor
    setContainerDimensions({ width, height })
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <Carousel
        loop
        width={containerDimensions.width} // Usar el tamaño del contenedor
        height={containerDimensions.height}
        autoPlay={true}
        autoPlayInterval={3000} // Cambia de imagen cada 3 segundos
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View
            className='w-full h-full bg-blue-300 justify-center items-center'
            onLayout={handleContainerLayout} // Obtener las dimensiones del contenedor
          >
            {/* Mostrar el índice encima de la imagen */}
            <Image source={item} className='w-full h-full' resizeMode='contain' />
          </View>
        )}
      />
    </View>
  )
}

export default CarouselExample
