import React from 'react';
import {
  View,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default Home = ({navigation}) => {
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={require('./img/backgroud.png')}
      resizeMethod="stretch">
      <StatusBar barStyle="light-content" />
      <View style={{marginTop: 50}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('./img/clean.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{marginTop: 0.4 * windowHeight, marginLeft: 0.3 * windowWith}}>
        <Text style={{color: 'white', fontSize: 40}}>Trang chu</Text>
      </View>
    </ImageBackground>
  );
};
