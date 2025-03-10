import { View, Text, Image, Pressable } from 'react-native'
import { MinusIcon, MayusIcon } from '../Icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/utils/types'

export const TextLimit = (text: string) => {
  const textlimiter = (text) => {
    const words = text.split(' ')
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + ' ...'
    }
    return text
  }

  return textlimiter(text)
}

export function CardProductsInCart({ Product }) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <View className="grid md:grid-flow-col w-11/12 h-72 md:h-56 justify-center items-center shadow-black shadow-md lg:justify-between self-center lg:px-12 mb-10  ">
      <View className="lg:grid flex flex-col lg:grid-flow-col items-center lg:mb-5 lg:gap-3  justify-center ">
        <Image
          className="rounded-md"
          source={{ uri: Product.image }}
          style={{ width: 300, height: 150 }}
        />
        <Text className="text-2xl whitespace-nowrap ml-10 ">
          {TextLimit(Product.title)}
        </Text>
        <Text className="text-xl ml-10 font-bold">
          {Product.price} <Text className="text-cyan-600">$</Text>
        </Text>
      </View>

      <View className="md:ml-10 flex-row md:flex-col justify-center items-center space-x-2 md:space-x-0">
        <View className="flex-row space-x-2 items-center justify-between md:justify-center md:px-1.5 rounded-3xl bg-primary w-36 md:w-full px-3">
          <Pressable className="active:scale-95 ">
            <MinusIcon className="text-white" />
          </Pressable>
          <Text className="text-xl text-white">1</Text>
          <Pressable className="active:scale-95">
            <MayusIcon className="text-white" />
          </Pressable>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Buy')}
          className="md:mt-2 bg-secondary p-1.5 rounded-full active:bg-secondary/70  w-36 md:w-full"
        >
          <Text className="text-white text-md text-center">Comprar</Text>
        </Pressable>
      </View>
    </View>
  )
}
