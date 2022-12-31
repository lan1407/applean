import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {STYLE_GLOBAL} from '../../utils/AppConst';
import {useNavigation} from '@react-navigation/native';
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OnboardingView = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require('../img/backgroud.png')}
      resizeMethod="stretch">
      <View style={[styles.body]}>
        <SVG_NAME.IC_LOGO />
        <Text style={[styles.text, STYLE_GLOBAL.h1]}>
          Chào mừng bạn đến với cửa hàng
        </Text>
        <Text style={[styles.text1, STYLE_GLOBAL.body2]}>
          Nhận hàng tạp hóa của bạn trong vòng một giờ
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={[styles.button]}>
          <Text style={[styles.text3]}>Bắt đầu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default OnboardingView;
