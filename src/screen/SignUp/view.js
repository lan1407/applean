import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {STYLE_GLOBAL} from '../../utils/AppConst';
import {firebase} from '../../../config';

const SignUpView = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: 'youfood-c21a1.firebaseapp.com',
          })
          .then(() => {
            alert('Verification email sent');
          })
          .catch(error => {
            alert.message;
          })
          .then(() => {
            firebase
              .firestore()
              .collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
              });
          })
          .catch(error => {
            alert(error.message);
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <View style={[styles.body]}>
      <SVG_NAME.IC_LOGO1 />
      <View style={styles.title}>
        <Text style={STYLE_GLOBAL.body1Bold}>Đăng kí</Text>
        <Text style={(STYLE_GLOBAL.body1, styles.text5)}>
          Nhập email và mật khẩu của bạn
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.email1}>
          <Text style={styles.email}>Họ</Text>
          <TextInput
            style={styles.input}
            onChangeText={firstName => setFirstName(firstName)}
            autoCorrect={false}
          />
        </View>
        <View style={styles.pass}>
          <Text style={styles.email}>Tên</Text>
          <TextInput
            style={styles.input}
            onChangeText={lastName => setLastName(lastName)}
            autoCorrect={false}
          />
        </View>
        <View style={styles.pass}>
          <Text style={styles.email}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={email => setEmail(email)}
            autoCapitalize={false}
            autoCorrect={false}
          />
        </View>
        <View style={styles.pass}>
          <Text style={styles.email}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            onChangeText={password => setPassword(password)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.text6}>
        <Text>Bằng cách đăng kí, bạn đồng ý với </Text>
        <Text style={styles.text4}>Điều khoản dịch vụ</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          registerUser(email, password, firstName, lastName);
        }}
        style={[styles.button]}>
        <Text style={[styles.text3]}>Đăng kí</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.text4}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUpView;
