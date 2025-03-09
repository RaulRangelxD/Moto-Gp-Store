import React from 'react'
import '../global.css'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { Image, View, Pressable } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { StackNavigationProp } from '@react-navigation/stack'

// Import Screens
import HomeScreen from '@/app/Home'
import LoginScreen from '@/app/user/Login'
import LogoutScreen from '@/app/user/Logout'
import RegisterScreen from '@/app/user/Register'
import ProfileScreen from '@/app/user/Profile'
import CategoriesScreen from '@/app/products/Categories'
import ProductsScreen from '@/app/products/Products'
import ContactScreen from '@/app/contact/Contact'
import CartScreen from '@/app/cart/cart'

import { EnvelopeIcon, HomeIcon, ShoppingBagIcon, TagsIcon, UserIcon, UserPlusIcon, SingOutIcon, NavIcon, ChevronLeftIcon } from '@/components/Icons'
import { DrawerNavigationHeader, StackNavigationHeader } from '@/components/Navbar'

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

const Drawer = createDrawerNavigator<RootDrawerParamList>()
const Stack = createStackNavigator<RootStackParamList>()

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Drawer'
          component={DrawerNavigator}
          options={{
            header: () => <DrawerNavigationHeader />,
          }}
        />
        <Stack.Screen name='Cart' component={CartScreen} options={{ headerShown: true, header: () => <StackNavigationHeader /> }} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  )
}

function DrawerNavigator() {
  const auth = false

  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        drawerStyle: { backgroundColor: 'black' },
        drawerActiveTintColor: 'red',
        drawerInactiveTintColor: 'gray',
        drawerContentContainerStyle: { flex: 1, flexDirection: 'column' },
        header: () => <DrawerNavigationHeader />,
      }}
    >
      <Drawer.Screen name='Home' component={HomeScreen} options={{ drawerIcon: (props) => <HomeIcon {...props} /> }} />
      {!auth ? (
        <>
          <Drawer.Screen name='Login' component={LoginScreen} options={{ drawerIcon: (props) => <UserIcon {...props} /> }} />
          <Drawer.Screen name='Register' component={RegisterScreen} options={{ drawerIcon: (props) => <UserPlusIcon {...props} /> }} />
        </>
      ) : (
        <>
          <Drawer.Screen name='Profile' component={ProfileScreen} options={{ drawerIcon: (props) => <UserIcon {...props} /> }} />
          <Drawer.Screen name='Logout' component={LogoutScreen} options={{ drawerIcon: (props) => <SingOutIcon {...props} /> }} />
        </>
      )}
      <Drawer.Screen name='Productos' component={ProductsScreen} options={{ drawerIcon: (props) => <ShoppingBagIcon {...props} /> }} />
      <Drawer.Screen name='Categorias' component={CategoriesScreen} options={{ drawerIcon: (props) => <TagsIcon {...props} /> }} />
      <Drawer.Screen name='Contacto' component={ContactScreen} options={{ drawerIcon: (props) => <EnvelopeIcon {...props} /> }} />
    </Drawer.Navigator>
  )
}
