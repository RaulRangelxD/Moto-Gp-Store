import { View, Text, Pressable } from 'react-native'
export default function BuyScreen() {
  return (
    <View className="items-center justify-center">
      <View className="w-80 justify-center items-center">
        <Text>Compra</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          quibusdam nesciunt praesentium quis optio eaque ratione ad provident
          hic natus consequuntur soluta autem iste laboriosam obcaecati
          voluptatum rem, harum deserunt.
        </Text>
        <Text>Metodo de pago</Text>
      </View>
      <Pressable>
        <Text>Comprar</Text>
      </Pressable>
    </View>
  )
}
