import { useEffect, useState } from 'react'
import { View, ScrollView, Pressable, Text } from 'react-native'
import { CardProductsInCart } from '../../components/cart/CartCard'
import { products } from '../../mocks/products.json'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/utils/types'

export default function CartScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const [total, setTotal] = useState(0)
  return (
    <View className="md:flex-row justify-center items-center md:items-baseline z-0 flex-1 ">
      <ScrollView className="w-full mt-6 flex-1 max-h-screen ">
        {products.map((item) => (
          <View key={item.id} className="mb-6 w-full">
            <CardProductsInCart Product={item} />
          </View>
        ))}
      </ScrollView>

      <View className=" bg-white/95 md:bg-white/50 w-full md:w-1/4 justify-center items-center m-4 h-48 z-10 shadow-transparent drop-shadow-2xl sticky bottom-0">
        <Text className="text-2xl py-2 border-b-2 border-black/30">
          Total: 100
        </Text>
        <Pressable
          className=" h-8 w-28 rounded-lg transition-all bg-primary-light mt-5 active:scale-110 active:bg-primary-light/80"
          onPress={() => navigation.navigate('Buy')}
        >
          <Text className="text-white text-center text-lg  ">Comprar</Text>
        </Pressable>
      </View>
    </View>
  )
}
