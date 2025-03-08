import { View, Text, Image, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { MinusIcon, MayusIcon } from '../Icons'

export function CardProductsInCart({ Product }) {
  return (
    <View className="grid grid-cols-2 w-11/12 h-full justify-center items-center gap-2 mb-4 ml-8 border-2 ">
      <View className="flex flex-col items-center justify-center space-y-4">
        <Text className="text-2xl text-justify">{Product.title}</Text>
        <Image
          className="object-contain"
          source={{ uri: Product.image }}
          style={{ width: 300, height: 150 }}
        />
        <Text className="text-lg">{Product.price}</Text>
      </View>

      <View className="items-center justify-center">
        <View className="flex-row space-x-2 items-center justify-center">
          <Pressable>
            <MinusIcon size={12} />
          </Pressable>
          <Text className="text-xl">1</Text>
          <Pressable>
            <MayusIcon size={12} />
          </Pressable>
        </View>
        <Link href={'/Home'} asChild>
          <Pressable className="mt-2">
            <Text>Comprar</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}
