import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '../../../config';
import {STYLE_GLOBAL} from '../../utils/AppConst';

const LoginView = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={[styles.body]}>
      <SVG_NAME.IC_LOGO1 />
      <View style={styles.title}>
        <Text style={STYLE_GLOBAL.body1Bold}>Đăng nhập</Text>
        <Text style={(STYLE_GLOBAL.body1, styles.text5)}>
          Nhập email và mật khẩu của bạn
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.email1}>
          <Text style={styles.email}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={email => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.pass}>
          <Text style={styles.email}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={password => setPassword(password)}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          loginUser(email, password);
        }}
        style={[styles.button]}>
        <Text style={[styles.text3]}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={styles.account}>
        <Text>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.text4}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginView;
