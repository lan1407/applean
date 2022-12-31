import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {STYLE_GLOBAL} from '../../utils/AppConst';
import {firebase} from '../../../config';

function FavouriteScreenView({name, firebase}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.body]}>
      <SVG_NAME.IC_LOGO1 />
      <View style={styles.title}>
        <Text style={STYLE_GLOBAL.body1Bold}>
          trang FavouriteScreenView{name.firstName}
        </Text>
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
          }}
          style={[styles.button]}>
          <Text style={[styles.text3]}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default React.memo(FavouriteScreenView);
