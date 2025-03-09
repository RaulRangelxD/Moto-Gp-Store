import React from 'react'
import { Image, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { StackNavigationProp } from '@react-navigation/stack'
import { EnvelopeIcon, HomeIcon, ShoppingBagIcon, TagsIcon, UserIcon, UserPlusIcon, SingOutIcon, NavIcon, ChevronLeftIcon } from '@/components/Icons'

type RootDrawerParamList = {
  Home: undefined
  Login: undefined
  Logout: undefined
  Register: undefined
  Profile: undefined
  Productos: undefined
  Categorias: undefined
  Contacto: undefined
}

type RootStackParamList = {
  Drawer: undefined
  Cart: undefined
}

// Navbar for Drawer Screens
export const DrawerNavigationHeader = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>()

  return (
    <View className='flex flex-row justify-center items-center w-full p-2 bg-black'>
      <Pressable onPress={() => navigation.openDrawer()} style={{ marginRight: 10 }}>
        <NavIcon size={24} />
      </Pressable>
      <View className='mx-auto'>
        <Header />
      </View>
      <View>
        <RightHeader />
      </View>
    </View>
  )
}

// Navbar for Stack Screens
export const StackNavigationHeader = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <View className='flex flex-row justify-center items-center w-full p-2 bg-black'>
      <Pressable onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
        <ChevronLeftIcon size={24} />
      </Pressable>
      <View className='mx-auto'>
        <Header />
      </View>
      <View>
        <RightHeader />
      </View>
    </View>
  )
}

// Common Header Component
const Header = () => (
  <View>
    <Image source={require('@/assets/logo.webp')} style={{ width: 100, height: 40 }} />
  </View>
)

// Cart Button on the right
const RightHeader = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>()

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Cart')}>
        <ShoppingBagIcon />
      </Pressable>
    </View>
  )
}
