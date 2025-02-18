import { Link } from 'expo-router'
import { Text, View, Image } from 'react-native'

export const Navbar = () => {
  return (
    <View className='flex flex-row justify-center items-center w-full bg-black px-2'>
      <Image source={require('@/public/logo.webp')} style={{ width: 100, height: 40, resizeMode: 'center' }} />
      <View className='flex-grow'></View>
      <View className='flex flex-row space-x-4'>
        <Link href={'#'} className='text-white'>
          Login/Register
        </Link>
        <Link href={'#'} className='text-white'>
          Home
        </Link>
        <Link href={'#'} className='text-white'>
          Productos
        </Link>
        <Link href={'#'} className='text-white'>
          Categorias
        </Link>
        <Link href={'#'} className='text-white'>
          Contacto
        </Link>
        <Link href={'#'} className='text-white'>
          Carrito
        </Link>
      </View>
    </View>
  )
}
