import React from 'react'
import '../global.css'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Image, View, Pressable } from 'react-native'
import HomeScreen from '@/app/Home'
import LoginScreen from '@/app/user/Login'
import LogoutScreen from '@/app/user/Logout'
import RegisterScreen from '@/app/user/Register'
import ProfileScreen from '@/app/user/Profile'
import CategoriesScreen from '@/app/products/Categories'
import ProductsScreen from '@/app/products/Products'
import ContactScreen from '@/app/contact/Contact'
import CartScreen from '@/app/cart/cart'
import { Otro } from './otros'
import {
  EnvelopeIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SingOutIcon,
  TagsIcon,
  UserIcon,
  UserPlusIcon,
} from '@/components/Icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

type RootDrawerParamList = {
  Home: undefined
  Login: undefined
  Logout: undefined
  Register: undefined
  Profile: undefined
  Productos: undefined
  Categorias: undefined
  Contacto: undefined
  cart: undefined
  otros: undefined
}

const Drawer = createDrawerNavigator<RootDrawerParamList>()

export default function Layout() {
  const auth = false
  return (
    <GestureHandlerRootView>
      <Drawer.Navigator
        id={undefined}
        initialRouteName="Home"
        screenOptions={({}) => ({
          drawerStyle: {
            backgroundColor: 'black',
          },
          drawerActiveTintColor: 'red',
          drawerInactiveTintColor: 'gray',
          headerTitle: () => Header(),
          headerRight: () => RightHeader(),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'red',
          drawerContentContainerStyle: { flex: 1, flexDirection: 'column' },
        })}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: (props) => <HomeIcon {...props} />,
          }}
        />
        <Drawer.Screen
          name="cart"
          component={CartScreen}
          options={{
            drawerIcon: (props) => <ShoppingCartIcon {...props} />,
          }}
        />
        {!auth ? (
          <>
            <Drawer.Screen
              name="Login"
              component={LoginScreen}
              options={{
                drawerIcon: (props) => <UserIcon {...props} />,
              }}
            />
            <Drawer.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                drawerIcon: (props) => <UserPlusIcon {...props} />,
              }}
            />
          </>
        ) : (
          <>
            <Drawer.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                drawerIcon: (props) => <UserIcon {...props} />,
              }}
            />
            <Drawer.Screen
              name="Logout"
              component={LogoutScreen}
              options={{
                drawerIcon: (props) => <SingOutIcon {...props} />,
              }}
            />
          </>
        )}
        <Drawer.Screen
          name="Productos"
          component={ProductsScreen}
          options={{
            drawerIcon: (props) => <ShoppingBagIcon {...props} />,
          }}
        />
        <Drawer.Screen
          name="Categorias"
          component={CategoriesScreen}
          options={{
            drawerIcon: (props) => <TagsIcon {...props} />,
          }}
        />
        <Drawer.Screen
          name="Contacto"
          component={ContactScreen}
          options={{
            drawerIcon: (props) => <EnvelopeIcon {...props} />,
          }}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  )
}

const Header = () => {
  return (
    <View>
      <Image
        source={require('@/assets/logo.webp')}
        style={{ width: 100, height: 40 }}
      />
    </View>
  )
}

const RightHeader = () => (
  <Drawer.Screen
    name="cart"
    component={CartScreen}
    options={{
      drawerIcon: (props) => <ShoppingCartIcon {...props} />,
    }}
  />
)
