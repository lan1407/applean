/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text, View, StyleSheet} from 'react-native';
import RootComponent from './src/view/index';
export default function App() {
  return (
    <RootComponent />
    // <View style={style.container}>
    //   <Text>APP</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
