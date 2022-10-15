import React from 'react';
import {
  View,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default Login = ({navigation}) => {
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={require('./img/backgroud.png')}
      resizeMethod="stretch">
      <StatusBar barStyle="light-content" />
      {/* Email && Password */}
      <View style={{height: '100%', width: '100%'}}>
        <View
          style={{
            height: '20%',
            width: '100%',
            backgroundColor: '#53B175',
            marginTop: 0.4 * windowHeight,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '70%',
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Email:</Text>
            <TextInput
              style={{
                height: '100%',
                width: '70%',
                borderBottomWidth: 1,
                borderColor: 'white',
              }}
            />
          </View>
          <View
            style={{
              width: '70%',
              height: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Password:</Text>
            <TextInput
              style={{
                height: '100%',
                width: '70%',
                borderBottomWidth: 1,
                borderColor: 'white',
              }}
            />
          </View>
        </View>

        {/* Buttoon */}
        <View
          style={{
            width: '100%',
            heght: '20%',
            maginTop: 0.15 * windowHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{
              width: '60%',
              height: '15%',
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#53B175',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '60%',
              height: '15%',
              borderColor: 'white',
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#53B175',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Đăng Kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
