import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default SplashView = ({navigation}) => {
  // setTimeout(() => {
  //   navigation.navigate('Onboarding');
  // }, 3000);

  return (
    <View style={[styles.body]}>
      <SVG_NAME.IC_SPLASH />
      <Text style={[styles.text]}>SmartSchool</Text>
    </View>
  );
};
