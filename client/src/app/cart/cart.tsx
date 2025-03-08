import { useEffect, useState } from 'react'
import { FlatList, View, ScrollView, Pressable, Text } from 'react-native'
import { CardProductsInCart } from '../../components/cart/CartCard'
import { products } from '../../mocks/products.json'

export default function CartScreen() {
  // const [price, setPrice] = useState()

  return (
    <View className="flex-1 flex-row ">
      <View className="w-3/4 flex-1 mt-6 mr-4">
        <ScrollView>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="mb-2 w-full">
                <CardProductsInCart Product={item} />
              </View>
            )}
          />
        </ScrollView>
      </View>

      <View className="w-1/4 justify-center items-center border-2 border-black m-4">
        <Pressable className=" py-4 px-6 rounded-lg">
          <Text className="text-black font-bold text-center">Comprar</Text>
        </Pressable>
      </View>
    </View>
  )
}
