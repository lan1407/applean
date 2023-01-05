// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {StatusBar, Text, View, StyleSheet} from 'react-native';
// import RootComponent from './src/screen/index';

// export default function App() {
//   return (
//     <RootComponent />

//     <View style={style.container}>
//       <Text>APP</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {firebase} from './config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import HomeScreen from './src/screen/HomeScreen';
import FavouriteScreen from './src/screen/Favourite';
import SearchScreen from './src/screen/Search';
import ShopCartScreen from './src/screen/ShopCart';
import StoreScreen from './src/screen/Store';
import ProductInfoScreen from './src/screen/ProductInfo';
import {SVG_NAME} from './src/assets/patch';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //hander user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  });

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
        })}>
        <Tab.Screen
          name="Cửa hàng"
          component={StoreScreen}
          options={{
            tabBarIcon: () => <SVG_NAME.IC_STORE />,
          }}
        />
        <Tab.Screen
          name="Tìm kiếm"
          component={SearchScreen}
          options={{
            tabBarIcon: () => <SVG_NAME.IC_TAGSEARCH />,
          }}
        />
        <Tab.Screen
          name="Giỏ hàng"
          component={ShopCartScreen}
          options={{
            tabBarIcon: () => <SVG_NAME.IC_TAGCART />,
          }}
        />
        <Tab.Screen
          name="Yêu thích"
          component={FavouriteScreen}
          options={{
            tabBarIcon: () => <SVG_NAME.IC_HEART />,
          }}
        />
        <Tab.Screen
          name="Tài khoản"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <SVG_NAME.IC_PERSON />,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="HomeTab" component={MyTabs} />
      <Stack.Screen name="Store" component={StoreScreen} />
      <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
