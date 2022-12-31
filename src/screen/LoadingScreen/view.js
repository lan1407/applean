import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default LoadingView = ({navigation}) => {
  return (
    <View style={[styles.body]}>
      <SVG_NAME.IC_ONBOARDING />
      <Text style={[styles.text]}>HomeScreen</Text>
    </View>
  );
};