import { useEffect, useState } from 'react'
import { FlatList, View, ScrollView, Pressable, Text } from 'react-native'
import { CardProductsInCart } from '../../components/cart/CartCard'
import { products } from '../../mocks/products.json'

export default function CartScreen() {
  return (
    <View className="flex-1 md:flex-row justify-center items-center md:items-baseline z-0 ">
      <ScrollView className="flex-1 w-full mt-6">
        {products.map((item) => (
          <View key={item.id} className="mb-4 w-full h-full">
            <CardProductsInCart Product={item} />
          </View>
        ))}
      </ScrollView>

      <View className="sticky bottom-0 bg-white/95 w-full  md:top-0 md:w-1/4 justify-center items-center m-4 h-48 z-10 shadow-transparent drop-shadow-2xl">
        <Pressable className=" py-4 px-6 rounded-lg">
          <Text className="text-black font-bold text-center">Comprar</Text>
        </Pressable>
      </View>
    </View>
  )
}
